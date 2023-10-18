var canvas = new fabric.Canvas("my_canvas");

player_x = 30;
player_y = 30;

block_width = 30;
block_height = 30;

save_player_image = "";
save_block_image = "";

function player_update()
{
    fabric.Img.fromURL("player.png",function(Img){
        save_player_image=Img;

        save_player_image.scaleToWidth(160);
        save_player_image.scaleToHeight(170);

        save_player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(save_player_image);
    });
}

function update_block(GetImg)
{
  fabric.Img.fromURL(GetImg,function(Img){
    save_block_image = Img;

    save_block_image.scaleToWidth(block_width);
    save_block_image.scaleToHeight(block_height);

    save_block_image.set({
        top:player_y,
        left:player_x
    });
    canvas.add(save_block_image);
  });
}

  window.addEventListener("keydown",my_keydown);

  function my_keydown(e)
  {
   key_pressed = e.keyCode;
   console.log(key_pressed);
   if(e.shiftKey == true && key_pressed == "80")
   {
    block_height = block_height + 10;
    block_width = block_width + 10;
    document.getElementById("current_height").innerHTML=block_height;
    document.getElementById("current_width").innerHTML=block_width;
   }
   if(e.shiftKey == true && key_pressed == "77")
   {
    block_height = block_height - 10;
    block_width = block_width - 10;
    document.getElementById("current_height").innerHTML=block_height;
    document.getElementById("current_width").innerHTML=block_width;
   }
   if(key_pressed =="37")
   {
    left();
   }
   if(key_pressed =="38")
   {
    up();
   }
   if(key_pressed =="39")
   {
    right();
   }
   if(key_pressed =="40")
   {
    down();
   }
   if(key_pressed =="87")
   {
    update_block("wall.jpg");
   }
   if(key_pressed =="71")
   {
    update_block("ground.png");
   }
   if(key_pressed =="76")
   {
    update_block("light_green.png");
   }
   if(key_pressed =="84")
   {
    update_block("trunk.jpg");
   }
   if(key_pressed =="82")
   {
    update_block("roof.jpg");
   }
   if(key_pressed =="89")
   {
    update_block("yellow_wall.png");
   }
   if(key_pressed =="68")
   {
    update_block("dark_green.png");
   }
   if(key_pressed =="85")
   {
    update_block("unique.png");
   }
   if(key_pressed =="67")
   {
    update_block("cloud.jpg");
   }
  }

  