let letdraw;
let letplay;
let count = 0
let stop=0
let game = "hell";
let size=10;
function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  rect(100,height-100,width-150,70);
}

function draw() {
  
  if (count==0)
  {
  background(0);
  //rect(20,20,width-40,40);
  fill("white")
  textSize(50);
  text("FakeGUI",240,60)
  
  instruct();
    
  letdraw = createButton("LET'S DRAW");
  letdraw.position(20,height-100);
  letdraw.mousePressed(setdraw);

  letplay = createButton("EXIT");
  letplay.position(20,height-65);
  letplay.mousePressed(setplay);
  }
  
  else if (count==1)
  {
    if (mouseIsPressed)
    {
      rect(mouseX,mouseY,size,size);
      
      noStroke();
    } 
  }
  
  else if (count==2)
  {
    
    if(stop<500)
    {
    
    let x=random(width-300);
    let y=random(height);
    fill(0,0,random(0,225));
    text("Goodbye!",x,y);
    textSize(random(5,100));
    // noStroke();
    // fill(0,0,random(10,225));
    // rect(x,y,50,50);
    stop++;
    }
    else
    {
    clear();
    }
  }
}
  
function setdraw()
{
  count=1;
  background("magenta") ;
  instruct();
}

function setplay()
{
  count=2;
  background("blue") ; 
  instruct();
}

function instruct()
{
  //noFill();
 //rect(100,height-100,width-150,70);
  textSize(15);
  fill("white")
  text("if you click LET'S DRAW, move your mouse to create a pattern.",110,height-85);
  text("if you are bored, just click on LET'S DRAW to rest the canvas.",110,height-65);
    text("if you are tired, click on Exit",110,height-45);
     
}

