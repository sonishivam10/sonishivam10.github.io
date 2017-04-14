$(function() {
  
    // Setup form validation on the #register-form element
    $("#register-form").validate({
    
        // Specify the validation rules
        rules: {
            firstname: "required",
            
            email: {
                required: true,
                email: true
            },
			message: {
				required: true;
				minlenght: 10 ;
            },
            
        },
        
        // Specify the validation error messages
        messages: {
            firstname: "Please enter your first name",
            message: "Please enter your message",
            email: "Please enter a valid email address",
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });