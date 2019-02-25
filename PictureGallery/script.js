function ChangePic(name){
	document.getElementById('big_pict').innerHTML = '<div class="big-pic" id="big_pict"><img  src="images/photo'+name+'.png" /></div>';
	document.getElementById('title').innerHTML = '<div id="title">Titre de la photo '+name+'</div>';
}