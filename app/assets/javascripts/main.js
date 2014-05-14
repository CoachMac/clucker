$(document).ready(function(){
	 

	 $("#btnStart").on('click',function(){
        $("#btnStart").fadeOut();
        $("#dialogSignup").fadeIn();
});

	 $("#cancelbtn").on('click',function(){
     	$("#btnStart").fadeIn();
     	$("#dialogSignup").fadeOut();
});

     $("#btnShowLogin").on('click',function(){      
    	$("#dialogLogin").toggle();
});

 	$("#submitbtn").on('click',function(){
        var fn = $("#firstname").val;
        var ln = $("#lastname").val;
        var pw = $("#password").val;
        var em = $("#email").val;
        var cp = $("#confirmpassword").val;

        if (!fn & !ln & !pw & !em & !cp) { alert("Stop!");} 
        // ajax call at end of function

        if (pw != cp) {alert ('Your passwords have to match!');}

        $.ajax({
            url: '/api/savesignup', 
            type: 'POST',
            data: {firstname: firstname, lastname: lastname, password: password, email: email, confirmpassword: confirmpassword }
        }).done(function(data){
            console.log(data.id);


    });

     

    


    
 });
});


function Login(){
    var lemail = $('#txtLoginEmail').val();
    var lpassword = $('#txtLoginPassword').val();

    if (!lemail & !lpassword)
        return;


        $.ajax({
            url: '/api/login', 
            type: 'POST',
            data: { email: email, password: password }
        }).done(function(data){
            console.log(data.id);


    // if (data === null)
    //         ShowError("Hmm...we couldn't log you in. Might want to try again.");
    //     else
    //         window.location = '/main/cluck?user=' + data;

    });




}

// 	});
	

// });
 





// 		$.ajax({
// 			url: '/api/bloo', 
// 			type: 'POST',
// 			data: {blue: 'iron', devil: 'duke' }
//           name-value pair
// 		}).done(function(data){
// 			console.log(data.id);
// 		});
// 	});
// });