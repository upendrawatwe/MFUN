(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("audio1").play();
		alert('अ');
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("audio2").play();
		alert('आ');
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("audio3").play();
		alert('इ');
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
		document.getElementById("audio4").play();
		alert('ई');
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
