$(document).ready(function () {
    $("#sign-up").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4,
            },
            emailAddres: {
                required: true,
                email: true

            },
            password: {
                required: true,
                minlength: 6
            },
            card: {
                required: true,
                maxlength:16
        

            },

           cardcvc:{
            required:true,
            minlength:3,
            maxlength:4

           },
           confirmpassword:{
            required:true
           },
           checkbox:{
            required:true,
            maxlength:16

           },
        },
        messages:{
            fname:{
                required:"Please enter your name",
                
            },
            emailAddres:{
                required:"please enter a valid Email-Id",

            },
            password: {
                required:"Please enter your password",
                maxlength:16
        

            },
            card: {
                required:"Please enter your 10 digits card-number",
                maxlength:16
        

            },
            cardcvc:{
                required:"Plese enter last 3 digits of your card",
                minlength:3,
                maxlength:4,
                typeof:'number'
    
               },
            checkbox:{
                required:"Please agree to the terms and conditions "
               },
               confirmpassword:{
                required:"Please enter your password again ",
                maxlength:16
               },
        }
    })


})
