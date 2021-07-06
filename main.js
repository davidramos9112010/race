canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
race_car1_width=100;
race_car1_height=90;
race_car1_x=10;
race_car1_y=10;
race_car2_width=100;
race_car2_height=90;
race_car2_x=10;
race_car2_y=10;
backround_image="ractrack.jpg";
race_car1_image="racecar.image1.png";
race_car2_image="racecar.image2.png";
function add(){background_imgTag = new Image();
     //defining a variable with a new image
      background_imgTag.onload = uploadBackground;
      // setting a function, onloading this variable
       background_imgTag.src = background_image;
       // load image
        race_car1_imgTag = new Image();
        //defining a variable with a new image
         race_car1_imgTag.onload = uploadracecar1;
         // setting a function, onloading this variable
          race_car1_imgTag.src = race_car1_image;
     // load image}
     race_car2_imgTag = new Image();
        //defining a variable with a new image
         race_car2_imgTag.onload = uploadracecar2;
         // setting a function, onloading this variable
          race_car2_imgTag.src = race_car2_image;
     // load image
     function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
     }
     function uploadracecar1() { ctx.drawImage(race_car1_imgTag, race_car1_x, race_car1_y, race_car1_width, race_car1_height);
     } function uploadracecar2() { ctx.drawImage(race_car2_imgTag, race_car2_x, race_car2_y, race_car2_width, race_car2_height);
     }
     
     window.addEventListener("keydown", my_keydown);
      function my_keydown(e) { keyPressed = e.keyCode;
         console.log(keyPressed);
         if(keyPressed == '38') { up(); console.log("up"); } 
         if(keyPressed == '40') { down(); console.log("down"); } 
         if(keyPressed == '37') { left(); console.log("left"); } 
         if(keyPressed == '39') { right(); console.log("right"); } 
         if(keyPressed == '87') { car2_up(); console.log("key w"); } 
         if(keyPressed == '83') { car2_down(); console.log("key s"); } 
         if(keyPressed == '65') { car2_left(); console.log("key a"); } 
         if(keyPressed == '68') { car2_right(); console.log("key d"); } 
        
        if(race_car1_x>700)
{
console.log("car1 won");
document.getElementById('game_status').innerhtml = "car 1 won";


}

else if(race_car2_x>700)
{
console.log("car2 won");
document.getElementById('game_status').innerhtml = "car 2 won";


}
    
    }
         function up() { 
            if(race_car1_y >=0) { race_car1_y = race_car1_y - 10;
                console.log("When up arrow is pressed, x = " + race_car1_x + " | y = " +race_car1_y);
                 uploadBackground();
                  uploadracecar1(); } } 
                  function down() { if(race_car1_y <=500) { race_car1_y =race_car1_y+ 10;
                    console.log("When down arrow is pressed, x = " + race_car1_x + " | y = " +race_car1_y);
                     uploadBackground(); uploadracecar1(); } }
    function left() { 
        if(race_car1_x >= 0) { race_car1_x =race_car1_x - 10;
            console.log("When left arrow is pressed, x = " + race_car1_x + " | y = " +race_car1_y);
             uploadBackground(); uploadracecar1();
            } }
             function right() { if(race_car1_x <= 700) { race_car1_x =race_car1_x + 10;
                console.log("When right arrow is pressed, x = " + race_car1_x + " | y = " +race_car1_y); uploadBackground();
                 uploadrace_car1();
                } }
                function car2_up() { 
                    if(rover_y >=0) { race_car2_y = race_car2_y - 10;
                        console.log("When up arrow is pressed, x = " + race_car2_x + " | y = " +race_car2_y);
                         uploadBackground();
                          uploadracecar2(); } } 
                          function car2_down() { if(race_car2_y <=500) { race_car2_y =race_car2_y+ 10;
                            console.log("When down arrow is pressed, x = " + race_car2_x + " | y = " +race_car2_y);
                             uploadBackground(); uploadracecar2(); } }
            function car2_left() { 
                if(race_car2_x >= 0) { race_car2_x =race_car2_x - 10;
                    console.log("When left arrow is pressed, x = " + race_car2_x + " | y = " +race_car2_y);
                     uploadBackground(); uploadracecar2();
                    } }
                     function car2_right() { if(race_car2_x <= 700) { race_car2_x =race_car2_x + 10;
                        console.log("When right arrow is pressed, x = " + race_car2_x + " | y = " +race_car2_y); uploadBackground();
                         uploadrace_car2();
                        } }
        