var questions = [{	info: "<p>La maison du Professeur Chabalet a pour URI <span class='uri'>http://www.lamaisondumeurtre.fr/instances#LaMaisonDuMeurtre</span></p>",
				question: "<p>Combien y a-t-il de pièces dans la maison?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .'},

				{	info: "<p></p>",
				question: "<p>Combien y a-t-il de personnes dans la maison?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Qui est la victime?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:estVivant rdf:type owl:DatatypeProperty ;\n           rdfs:label "est vivant"@fr ;\n           rdfs:comment "indique si une personne est vivante (True) ou morte (False)"@fr ;\n           rdfs:domain :Personne ;\n           rdfs:range xsd:boolean .'},

				{	info: "<p>Toutes les personnes encore en vie sont considérées suspectes</p>",
				question: "<p>Donnez la liste des suspects.</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:estVivant rdf:type owl:DatatypeProperty ;\n           rdfs:label "est vivant"@fr ;\n           rdfs:comment "indique si une personne est vivante (True) ou morte (False)"@fr ;\n           rdfs:domain :Personne ;\n           rdfs:range xsd:boolean .'},

				{	info: "<p></p>",
				question: "<p>Dans quelle pièce se situe la victime?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:estVivant rdf:type owl:DatatypeProperty ;\n           rdfs:label "est vivant"@fr ;\n           rdfs:comment "indique si une personne est vivante (True) ou morte (False)"@fr ;\n           rdfs:domain :Personne ;\n           rdfs:range xsd:boolean .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Y a-t-il d'autres personnes dans cette pièce? (tranformez la requête précédante; utilisez ASK)</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:estVivant rdf:type owl:DatatypeProperty ;\n           rdfs:label "est vivant"@fr ;\n           rdfs:comment "indique si une personne est vivante (True) ou morte (False)"@fr ;\n           rdfs:domain :Personne ;\n           rdfs:range xsd:boolean .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Listez les personnes dans chaque pièce.</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Combien y a-t-il de personnes dans chaque pièce (contenant au moins une personne)?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Quelle(s) pièce(s) contien-nen-t au moins deux personnes? (piste: utilisez la requête précédante comme sous-requête)</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p></p>",
				question: "<p>Quelle(s) pièce(s) est/sont vide(s)?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p>La victime a voulu écrire le nom de son assassin sur un cahier avec une plume, mais le pot d'encre s'est renversé et rend le nom du meurtrier en partie illisible.<br /><img src='media/encrier-nom.jpg' /><br />On déchiffre cependant que son nom de famille ou son prénom finit par 'e.'</p>",
				question: "<p>Quels sont les suspects restants? (augmentez la requête listant les suspects)</p>",
				ontology: '...'},

				{	info: "<p>Le meurtrier n'est pas dans une des pièces voisines à celle où se situe la victime</p>",
				question: "<p>Qui est par conséquent innoscent?</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .\n\n:aPourPieceVoisine rdf:type owl:ObjectProperty ,\n                            owl:SymmetricProperty ;\n                   rdfs:range :Piece ;\n                   rdfs:domain :Piece .'},

				{	info: "<p>Le meurtrier n'est pas dans une des pièces voisines à celle où se situe la victime</p>",
				question: "<p>Quels sont les suspects restants? (augmentez la requête listant les suspects)</p>",
				ontology: '@prefix : <http://www.lamaisondumeurtre.fr#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .\n\n:aPourPieceVoisine rdf:type owl:ObjectProperty ,\n                            owl:SymmetricProperty ;\n                   rdfs:range :Piece ;\n                   rdfs:domain :Piece .'},

				{	info: "<p>Un certain nombre d'objets suspects ont été identifiés dans la maison. L'un d'entre eux est l'arme du crime.</p>",
				question: "<p>Combien y a-t-il d'objets dans la maison?</p>",
				ontology: ':Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:Objet rdf:type owl:Class ;\n       rdfs:label "objet"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .\n\n:pieceContientObjet rdf:type owl:ObjectProperty ;\n                    rdfs:range :Objet ;\n                    rdfs:domain :Piece ;\n                    owl:inverseOf :objetDansPiece .'},

				{	info: "<p>L'arme du crime ne se trouve pas dans la pièce où se situe la victime</p>",
				question: "<p>Quels objets ne peuvent pas être l'arme du crime?</p>",
				ontology: ':Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:Objet rdf:type owl:Class ;\n       rdfs:label "objet"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .\n\n:pieceContientObjet rdf:type owl:ObjectProperty ;\n                    rdfs:range :Objet ;\n                    rdfs:domain :Piece ;\n                    owl:inverseOf :objetDansPiece .'},

				{	info: "<p>Personne ne se situe dans une pièce où a été posée l'arme du crime</p>",
				question: "<p>Quel objet est l'arme du crime?</p>",
				ontology: ':Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:Objet rdf:type owl:Class ;\n       rdfs:label "objet"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .\n\n:pieceContientObjet rdf:type owl:ObjectProperty ;\n                    rdfs:range :Objet ;\n                    rdfs:domain :Piece ;\n                    owl:inverseOf :objetDansPiece .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},

				{	info: "<p>Le meurtrier se situe dans une pièce sans objet </p>",
				question: "<p>Qui est le meurtrier? (augmentez la requête listant les suspects)</p>",
				ontology: ':Maison rdf:type owl:Class ;\n        rdfs:label "maison"@fr .\n\n:Personne rdf:type owl:Class ;\n          rdfs:label "personne"@fr .\n\n:Piece rdf:type owl:Class ;\n       rdfs:label "pièce"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:Objet rdf:type owl:Class ;\n       rdfs:label "objet"@fr ;\n       rdfs:subClassOf owl:Thing .\n\n:maisonContientPiece rdf:type owl:ObjectProperty ;\n                     rdfs:domain :Maison ;\n                     rdfs:range :Piece ;\n                     owl:inverseOf :pieceDansMaison .\n\n:pieceContientObjet rdf:type owl:ObjectProperty ;\n                    rdfs:range :Objet ;\n                    rdfs:domain :Piece ;\n                    owl:inverseOf :objetDansPiece .\n\n:pieceContientPersonne rdf:type owl:ObjectProperty ;\n                       rdfs:range :Objet ;\n                       rdfs:domain :Piece ;\n                       owl:inverseOf :personneDansPiece .'},
				]

var turtleArea;
var sparqlResult;
var sparqlEditor;
var currentQuestion = 0;



$(document).ready(function(){

	$('#commencer').click(function()
	{
		$('#hero1').html('<b>' + $('#binome1').val() + '</b>');
		$('#hero2').html('<b>' + $('#binome2').val() + '</b>');
		$('#consignes').css('display', 'none');
		$('#enquete').css('display', 'block');
		$('body').css('background', "url('media/ron_blood_032.png') repeat scroll 0 0 black");

		turtleArea = CodeMirror.fromTextArea(document.getElementById("codeturtle"), {
		        mode: "text/turtle",
		        tabMode: "indent",
		        matchBrackets: true,
		        readOnly: "true"
		      });
		sparqlEditor = CodeMirror.fromTextArea(document.getElementById("codesparql"), {
		        mode: "application/x-sparql-query",
	    		tabMode: "indent",
	    		matchBrackets: true,
		      });
		sparqlResult = CodeMirror.fromTextArea(document.getElementById("codexml"), {
		        mode: {name: "xml", alignCDATA: true},
		        readOnly: "true"
		      });

		updateQuestion(currentQuestion);
	});

	$('#executeSparqlButton').click(function()
	{
		executeSparql(sparqlEditor.getValue(), $('#sparqlendpoint').val());
	});

	$('#questpred').click(function()
	{
		if (currentQuestion > 0) {
			currentQuestion--;
			updateQuestion(currentQuestion);
		}
	});

	$('#questsuiv').click(function()
	{
		if (currentQuestion < questions.length-1) {
			currentQuestion++;
			updateQuestion(currentQuestion);
		}
	});

	$(document).mousemove(function(e){
      $('body').css('background-position', '-'+e.pageX/10+'px -'+e.pageY/10+'px');
    });
});


function updateQuestion(currentQuestion) {

	$('#numquestion').text(currentQuestion+1);
	$('#info').html(questions[currentQuestion]["info"]);
	$('#question').html(questions[currentQuestion]["question"]);
	turtleArea.setValue(questions[currentQuestion]["ontology"])

	$('#questpred').css('color', (currentQuestion==0? '#555' : 'white'));
	$('#questsuiv').css('color', (currentQuestion==questions.length-1? '#555' : 'white'));
}


function executeSparql(sparqlQuery, sparqlServerUrl) {
        $.ajax
        ({
            type: 'GET',
            dataType: "xml",
            url: sparqlServerUrl,
            data: {query: sparqlQuery, output:'xml'},
            beforeSend: function() {
        		sparqlResult.setValue("Requête en cours...");
    		},
    		success: function(response, textStatus, jqXHR) {
    			var xmlString;
			    //IE
			    if (window.ActiveXObject){
			        xmlString = response.xml;
			    }
			    // code for Mozilla, Firefox, Opera, etc.
			    else{
			        xmlString = (new XMLSerializer()).serializeToString(response);
			    }
        		sparqlResult.setValue(xmlString);
    		},
        }).fail(function(jqXHR, textStatus) {
        	if (jqXHR.responseText) {
        		sparqlResult.setValue(jqXHR.responseText);
        	} else {
        		alert("Ajax error! \nVerifiez l'URL du endpoint SPARQL.");
        		sparqlResult.setValue('');
        	}
        });
}
