function getVariable(){
var txtVal = document.getElementById("urlText").value;

if(txtVal){
	var txtValComp = new URL(txtVal);;
	txtValComp = txtValComp.searchParams.get("v");
	var imgArray = ['default','thumbnail','large']
	var ytimgArray = ['default','mqdefault','hqdefault']
	for(var i=0; i < imgArray.length; i++){
		document.getElementById('container').innerHTML += '<fieldset id="'+imgArray[i]+'"> <legend>'+imgArray[i]+'</legend> <img src="http://img.youtube.com/vi/'+txtValComp+'/'+ytimgArray[i]+'.jpg"> <p><a href="http://img.youtube.com/vi/'+txtValComp+'/'+ytimgArray[i]+'.jpg" target="_blank">Download Image</a></p> </fieldset>';
	}
}else{
	document.getElementById("errmsg").innerHTML = "Please enter valid youtube URL";
}

}
