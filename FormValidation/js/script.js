function checking(){
	clearAll();
	checkingNom();
	checkingAge();
	checkingPays();
	checkingEmail();
	checkingMotDePasse();
}

function clearAll(){
	document.getElementById('erreur_nom').innerHTML = '<h3 id="erreur_nom" class="wrong"></h3>';
	document.getElementById('erreur_prenom').innerHTML = '<h3 id="erreur_prenom" class="wrong"></h3>';
	document.getElementById('erreur_age').innerHTML = '<h3 id="erreur_age" class="wrong"></h3>';
	document.getElementById('erreur_pays').innerHTML = '<h3 id="erreur_pays" class="wrong"></h3>';
	document.getElementById('erreur_pseudo').innerHTML = '<h3 id="erreur_pseudo" class="wrong"></h3>';
	document.getElementById('erreur_civilité').innerHTML = '<h3 id="erreur_civilité" class="wrong"></h3>';
	document.getElementById('erreur_email').innerHTML = '<h3 id="erreur_email" class="wrong"></h3>';
	document.getElementById('erreur_password').innerHTML = '<h3 id="erreur_password" class="wrong"></h3>';
	document.getElementById('erreur_confirmation').innerHTML = '<h3 id="erreur_confirmation" class="wrong"></h3>';
}

function checkingNom(){
		var temp = document.getElementsByName('nom')[0].value;
		if(temp.length < 2){
			document.getElementById('erreur_nom').innerHTML = '<h3 id="erreur_nom"  class="wrong"> Un nom doit contenir au moin 2 caractere</h3>';
		}

	    temp = document.getElementsByName('prenom')[0].value;
		if(temp.length < 2){
			document.getElementById('erreur_prenom').innerHTML = '<h3 id="erreur_prenom" class="wrong"> Un prenom doit contenir au moin 2 caractere</h3>';
		}

		temp = document.getElementsByName('pseudo')[0].value;
		if(temp.length < 4){
			document.getElementById('erreur_pseudo').innerHTML = '<h3 id="erreur_pseudo" class="wrong"> Un pseudo doit contenir au moin 4 caractere</h3>';
		}
}

function checkingAge(){
	var temp = document.getElementsByName('age')[0].value;
		if(temp < 5 || temp > 100){
			document.getElementById('erreur_age').innerHTML = '<h3 id="erreur_age" class="wrong"> vous avez '+temp+' ans ? really ? </h3>';
		}
}
function checkingPays(){
	var temp  = document.getElementById('pays');
	var holder = temp.options[temp.selectedIndex].text;
	if(holder=='selectionnez votre Pays'){
		document.getElementById('erreur_pays').innerHTML = '<h3 id="erreur_pays" class="wrong"> vous devez selectionnez votre pays !</h3>';
	}

	var temp  = document.getElementById('civilité');
	var holder = temp.options[temp.selectedIndex].text;
	if(holder=='selectionnez votre civilité'){
		document.getElementById('erreur_civilité').innerHTML = '<h3 id="erreur_civilité" class="wrong"> vous devez selectionnez votre civilité !</h3>';
	}

}
function checkingMotDePasse(){
		var mdp1 = document.getElementsByName("motDePasse")[0].value;
		var mdp2 = document.getElementsByName("confirmation")[0].value;

				if(mdp1.length >= 6){
						if(mdp1 === mdp2 && mdp2!='' && mdp2 !=''){
						}else{
							document.getElementById("erreur_confirmation").innerHTML = '<h3 id="erreur_confirmation" class="wrong">mot de passes ne sont pas identiques !</h3>';
						}
					}else{
						document.getElementById("erreur_password").innerHTML = '<h3 id="erreur_password class="wrong">mot de passe doit contenir plus de 6 caractere</h3>';
					}
}

function checkingEmail(){
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(reg.test(document.getElementsByName('email')[0].value) ==false){
		document.getElementById('erreur_email').innerHTML = '<h3 id="erreur_email"  class="wrong"> Email doit etre valide !</h3>';
	}
}