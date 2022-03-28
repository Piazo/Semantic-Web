

let map;
let map_loaded = false;

//lorsque le navigateur a fini de charger la page la fonction loadScriptAndEventListerner est appelée
window.addEventListener('load', loadScriptAndEventListerner, false);

function script_loaded()
{
  console.log("Google Map script loaded");
  map_loaded = true;
}

function loadScriptAndEventListerner() {
  //fonction exécutée lorsque la page a fini d'être chargée par le navigateur

  // ajout du script permettant d'interroger l'api googleMap
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVjhvjqz3W_fQNAsIP1hFZ_g8QHhjKUMo&callback=script_loaded";
  document.body.appendChild(script);

  //ajout d'un gestionnaire d'évènement pour les boutons radio
  const lesRadios =document.querySelectorAll("input[type='radio']"); // on récupère tous les objets de la page correspondant à des boutons radio
  for (let compt=0;compt<lesRadios.length;compt++){
    lesRadios[compt].addEventListener('change',getData,false); //lorsque l'utilisateur clique sur un bouton radio, ie son état change, la fonction getData est exécutée
  }
}

function getData(event){
  // fonction exécutée lors que l'utilisateur clique sur un bouton radio
  const radioSelected = event.target.id; // on récupère l'id du bouton radio cliqué
  console.log("Vous avez cliqué sur le bouton radio d'id = "+radioSelected); // on affiche dans la console js l'id du bouton selectionné
  let colorCode = ""; // on initialise à vide la couleur des pins sur la carte
  let query = "";// on initialise à vide la requête sparql à envoyer au serveur fuseki
  //le code suivant permet de définir la requête SPARQL à envoyer au serveur fuseki en fonction du bouton selectionné
  //ainsi que la couleur des pins sur la carte
  if (radioSelected == "cbox1"){
    colorCode = "#F4FA58";
    query = "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> "+
           "select ?gps (group_concat(?nomfilm;separator=' ** ') as ?lesfilms) (count(?nomfilm) as ?nbfilms) "+
           "where { "+
           "?film a ?classeFilm. "+
           "?classeFilm rdfs:label \"film\"@fr. "+
           "?film ?p ?lieu. "+
           "?film rdfs:label ?nomfilm. "+
           "?p rdfs:label \"se déroule à\"@fr. "+
           "?lieu ?p2 ?gps. "+
           "?p2 rdfs:label \"a pour coordonnées GPS\"@fr "+
           "} "+
           "group by (?gps) ";
  }
  if (radioSelected =="cbox2"){
    colorCode = "#FE9A2E";
    query = "";
    alert("A vous de définir la requête dans la fonction getData");

  }




  if (query){
  console.log("Envoi au serveur de la requête "+query);
  //on va envoyer la requête au serveur fuseki et définir le traitement à réaliser lorsque le serveur répond à la requête
  $.ajax({
    //envoi de la requête
    method: "GET",
    url: "http://localhost:3030/visu/sparql?query="+encodeURIComponent(query)+"&format=json",
    dataType : "json"
  })
  .success(function( data ) {
    // code qui sera exécuter lorsque le navigateur reçoit la réponse du serveur fuseki

    const stops = []; // ce tableau contiendra l'ensemble des infos à associer à un point de la carte
    data.results.bindings.forEach(function(s)
    {  //pour chaque réponse renvoyé par le serveur
      if (s.nbfilms.value>0){
        const mark = //info sur un pin de la carte
        {
          name : s.lesfilms.value, //on récupère le contenu de la variable ?lesfilms de la requête sparql
          long : s.gps.value.split(',')[1], // on recupère la longitude, ie partie après le , dans la variable ?gps de la requête
          lat : s.gps.value.split(',')[0],// on recupère la longitude, ie partie avant le , dans la variable ?gps de la requête
          nb : s.nbfilms.value,// on recupère le nombre de film, dans la variable ?nbfilms de la requête
        };
        stops.push(mark); // on ajoute la réponse pour ce point
      }
    });
    const markers = //ensemble des pin et leur couleur
    {
      "color" : colorCode,
      "stops" : stops
    };
    if(markers.stops.length == 0)
    {
      alert("pas de films avec ce critère");
    }
    else
    {
      init_map("map", markers); //on appelle la fonction qui va afficher la carte avec les markers dans la div d'id
    }
  });
  }
  else {console.log("La carte ne s'affiche pas car aucune requête à envoyer au serveur n'a été définie!")}
}




function init_map(divId, markers)
{
  console.log("Initialize Google map on the block : "+divId+" with the followings elements");
  console.log(markers);
  if(map_loaded)
  {
    map = new google.maps.Map(document.getElementById(divId));

    const bounds = new google.maps.LatLngBounds();


    markers.stops.forEach(function(marker)
    {
      const pos = new google.maps.LatLng(marker.lat, marker.long);

      bounds.extend(pos);
      let pinColor;
      if(markers.color != undefined)
      {
        pinColor = markers.color;
        pinColor = pinColor.replace("#", "");
      }
      else
        pinColor = "0d2e54";
      const pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
      const pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));
      const markerPin = new google.maps.Marker({
        position: pos,
        map: map,
        icon: pinImage,
        shadow: pinShadow,
        title : marker.nb+" film(s) réalisé(s) ici",
        animation: google.maps.Animation.DROP
      });
      const contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+marker.nb+' film(s) réalisés</h1>'+
      '<div id="bodyContent">'+marker.name+
      '</div>'+
      '</div>';

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });


      google.maps.event.addListener(markerPin, 'click', function() {
        infowindow.open(map,markerPin);
      });
    });



    map.fitBounds(bounds);
    map.panToBounds(bounds);
  }
  else
  {
    console.log("Please wait until the Google Map API is laoded ... ");
  }
}
