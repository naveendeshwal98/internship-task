function confirmMessage(){
	var name=document.myform.name.value;  
	var email=document.myform.email.value;  
	var subject=document.myform.subject.value;  
	var content=document.myform.content.value;  
	
	if(name == "" ||email == "" ||subject == "" ||content == ""){

		alert("fields can't be blank")
	}
	else{
		alert("Your response have been saved!");
	}
}