'use js'
        
        var can, ctx, step = 100, steps = 255;
              delay = 20;
              var rgbstep = 100;
              var white = 100;
 
        function init() {
            can = document.getElementById("title");
            ctx= can.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.font = "40pt Helvetica";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
                     Textfadeup();        
         }
 
        function Textfadeup() {
            rgbstep++;
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.fillStyle = "rgb(" + rgbstep + "," + rgbstep + "," + rgbstep + ")"
            ctx.fillText("WELCOME TO", 500, 20);
            if (rgbstep < 255)
                var t = setTimeout('Textfadeup()', 10);
            if (rgbstep == 255) {
                Textfadedown();
            }
        }
        function Textfadedown() {
			rgbstep=rgbstep-1;
            ctx.clearRect(0, 0, can.width, can.height);
            ctx.fillStyle = "white(" + rgbstep + "," + rgbstep + "," + rgbstep + ")"
            ctx.fillText("SWEENBOX", 500, 60);
            if (rgbstep > 80)
                var t = setTimeout('Textfadedown()', 10);
        }  
