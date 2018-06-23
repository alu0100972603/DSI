class Email{
	
	constructor(email) {
		this.email = email;
	}
	
	validate_Email(){
		
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
		
	    if(!expr.test(this.email))
	        return false;
	    else
	    	return true;
	}
}