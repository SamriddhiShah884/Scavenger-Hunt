class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
   
  
    async start(){
      if(gameState === 0){
        player = new Player();
       
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
 
    }
  
    play(){
      form.hide();
    
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
    
        background (bImg);
        
  image (trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 250;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
          var   pn= player.name;
        //  var px=player.position;
        fill ("white");
        textSize (20);
  
            text (pn,x+30,y+20);
            stroke ("red");
            ellipse (x,y,80, 120);
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
       
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10;
  
        player.update();
      }
  
      if(player.distance>4700){
        gameState=2;
      
      }
  
      drawSprites();
    }
  
    end(){
  
      console.log("Game Over");
      game.getRank ();
  
  
    }
  }
  