canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
racecar_width=100;
racecar_height=90;
racecar_x=10;
racecar_y=10;
backround_image="ractrack.jpg";
race_car_image="racecar.image1.png";
race_car_image="racecar.image2.png";
function add(){background_imgTag = new Image();
     //defining a variable with a new image
      background_imgTag.onload = uploadBackground;
      // setting a function, onloading this variable
       background_imgTag.src = background_image;
       // load image
        racecar_imgTag = new Image();
        //defining a variable with a new image
         racecar_imgTag.onload = uploadracecar;
         // setting a function, onloading this variable
          racecar_imgTag.src = racecar_image;
     // load image}
     function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
     }
      function uploadracecar() { ctx.drawImage(racecar_imgTag, racecar_x, racecar_y, racecar_width, racecar_height);
     }
     window.addEventListener("keydown", my_keydown);
      function my_keydown(e) { keyPressed = e.keyCode;
         console.log(keyPressed);
         if(keyPressed == '38') { up(); console.log("up"); } 
         if(keyPressed == '40') { down(); console.log("down"); } 
         if(keyPressed == '37') { left(); console.log("left"); } 
         if(keyPressed == '39') { right(); console.log("right"); } } 
         function up() { 
             if(racecar_y >=0) { racecar_y = racecar_y - 10;
                 console.log("When up arrow is pressed, x = " + racecar_x + " | y = " +racecar_y);
                  uploadBackground();
                   uploadracecar(); } } 
                   function down() { if(racecar_y <=500) { racecar_y =racecar_y+ 10;
                     console.log("When down arrow is pressed, x = " + racecar_x + " | y = " +racecar_y);
                      uploadBackground(); racecar(); } }
     function left() { 
         if(racecar_x >= 0) { racecar_x =racecar_x - 10;
             console.log("When left arrow is pressed, x = " + racecar_x + " | y = " +racecar_y);
              uploadBackground(); uploadracecar();
             } }
              function right() { if(racecar_x <= 700) { racecar_x =racecar_x + " | y = " +racecar_y); uploadBackground();
                  uploadracecar();
                 } }+ 10;
                 console.log("When right arrow is pressed, x = " + racecar_x 


