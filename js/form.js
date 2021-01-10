class Form {
  
    constructor() {
     

    }
        hide(){
      input.hide();
      title.hide();
      button.hide ();
      
    }
  
    display(){
     title = createElement('h2')
      title.html("Scavenger Hunt");
      title.position(600, 400);
      
    input = createInput("Player Nickname");
  button = createButton('Play');
      
      input.position(600, 500);
      button.position(665, 550);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        player.update(name)
        
        greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(130, 160)

      });
  
    }


  }
  