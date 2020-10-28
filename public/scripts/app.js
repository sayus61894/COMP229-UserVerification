/*      
        Filename:   app.js
        Name:       Parth Shreyash Patel
        StudentID:  301 134 072
        Date:       2020-10-09
*/


$(function(){
    
    /* Trying to emulate the data-toggle function */
    /* Clicking the first tab, removes the active tab from the others, and adds it to itself.
        Then changes the display of the info windows to ensure that only the corresponding one is shown */ 
    $('#project01').on('click', function(){
        console.log("starting");
        $("#project02").removeClass('active');
        $("#project03").removeClass('active');
        $('#project01').addClass('active');
        console.log("worked");
        $('#proj01').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj02').css("display", "none");
        $('#proj03').css("display", "none");
    });

    $('#project02').on('click', function(){
        console.log("starting");
        $("#project01").removeClass('active');
        $("#project03").removeClass('active');
        $('#project02').addClass('active');
        console.log("worked");
        $('#proj02').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj01').css("display", "none");
        $('#proj03').css("display", "none");
    });

    $('#project03').on('click', function(){
        console.log("starting");
        $("#project02").removeClass('active');
        $("#project01").removeClass('active');
        $('#project03').addClass('active');
        console.log("worked");
        $('#proj03').css({"display": "flex", "background-color":"rgb(225, 225, 225)", "color": "black"});
        $('#proj02').css("display", 'none');
        $('#proj01').css("display","none");
    });

    /* Helper functions for the 'Packages' for the Service Page. Originally display is set to 'none'.
        Clicking on a bar, will change the display of the corresponding 'package' thus showing it.
        Before showing the corresponding package, any packages being shown are first hidden */
    
         /*for java bar and card */
    $('#java').on('click', function(){
            $(".serviceCard").hide();
            $('#javaCard').toggle();
    });

        /*for C# bar and card */
    $('#cSharp').on('click', function(){
        $(".serviceCard").hide();
        $('#cSharpCard').toggle();
    });

        /*for python bar and card */
    $('#python').on('click', function(){
        $(".serviceCard").hide();
        $('#pythonCard').toggle();
    });

        /*for web dev bar and card. Group them into one class as they all correspond to a single package */
    $('.webDevGroup').on('click', function(){
        $(".serviceCard").hide();
        $('#webCard').toggle();
    });

    /* When Submit button for Contact Me page is clicked */

    /* Checks to make sure that the three required fields hold values.
        If not an alert pop ups that notifies the user that the form must still be filled out.
        If form is filled out, an alert thanking them is shown, and they are redirected to the homepage. */
    $("#enter").on('click', function(){
        let firstName = document.getElementById("firstName");
        let emailAdd = document.getElementById("emailAdd");
        let comment = document.getElementById("comment");
        if(firstName.value == "" || emailAdd == "" || comment.value == ""){
            alert("Please fill out form before submitting!");
        }else{
            alert("Thank you, I will get back to you soon!")
            window.location.href = '/home';
            /* Could not get above to work, StackOverflow suggested 'return false' .
                LINK -> https://stackoverflow.com/questions/6109527/window-location-href-not-working-in-form-onsubmit */
            return false;
        }

    });
});
