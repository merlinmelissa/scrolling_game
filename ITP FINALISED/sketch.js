var screen;
var floorPos_y;

var gameChar_x;
var gameChar_y;
var gameChar_world_x;
var gameChar_width;

var scrollPos;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectables;
var canyons;

var game_score;
var flagpole;
var lives;

var backgroundItalian;
var jumpSound;
var walkSound;

var platforms;
var enemies;

function preload()
{
    soundFormats('mp3','wav');
    backgroundItalian = loadSound('assets/bgm.mp3');
    jumpSound = loadSound('assets/pizza.mp3');
    jumpSound.setVolume(0.3);
    walkSound = loadSound('assets/walk.wav');
    walkSound.setVolume(1.0);  
    
}

function setup()
{
    screen=0;
    createCanvas(1024, 576);
    lives = 4;
    startGame();
    backgroundMusic();
    
}

function backgroundMusic()
{
    backgroundItalian.loop();
    backgroundItalian.play(); 
    backgroundItalian.setVolume(0.03);
       
}

function startGame()
{
	floorPos_y = height * 3/4;
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gameChar_width = 30;
    startGame_Scene();

    scrollPos = 0;
    
    gameChar_world_x = gameChar_x - scrollPos;
  
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    canyons = [ 
        {x_pos:405, Width:85},
        {x_pos:55, Width:85},
        {x_pos:900, Width:85},
        {x_pos:1280, Width:85},
        {x_pos:730, Width:85},
        {x_pos:-1550, Width:85},
        {x_pos:-500, Width:85}
        ];

    collectables =[
        {x_pos:-600, y_pos:360,Size:4, isFound:false},
        {x_pos:-1700, y_pos:420,Size:4, isFound:false},
        {x_pos:-1100, y_pos:360,Size:4, isFound:false},
        {x_pos:-1200, y_pos:360,Size:4, isFound:false},
        {x_pos:-1150, y_pos:360,Size:4, isFound:false},
        {x_pos:-1000, y_pos:360,Size:4, isFound:false},
        {x_pos:-1300, y_pos:360,Size:4, isFound:false},
        {x_pos:50, y_pos:360,Size:4, isFound:false},
        {x_pos:328, y_pos:420,Size:4, isFound:false},
        {x_pos:570, y_pos:420,Size:4, isFound:false},
        {x_pos:890, y_pos:360,Size:4, isFound:false},
        {x_pos:1450, y_pos:420,Size:4, isFound:false},
        {x_pos:1350, y_pos:250,Size:4, isFound:false},
        {x_pos:1250, y_pos:420,Size:4, isFound:false}
        ];
    
    platforms = [];
    
    platforms.push(createPlatforms(-1500,floorPos_y - 60,1000));
    platforms.push(createPlatforms(5,floorPos_y - 60,100));
    platforms.push(createPlatforms(820,floorPos_y - 60,100));
    platforms.push(createPlatforms(1400,floorPos_y - 60,200));
    
    game_score = 0;
    
    flagpole = {isReached: false, x_pos: 1850};
    
    lives -=1;
    enemies = [];
    enemies.push(new Enemy(-1500, floorPos_y - 70, 200));
    enemies.push(new Enemy(-1200, floorPos_y - 70, 200));
    enemies.push(new Enemy(-1250, floorPos_y - 70, 190));
    enemies.push(new Enemy(-1300, floorPos_y - 70, 490));
    enemies.push(new Enemy(-1000, floorPos_y - 70, 280));
    enemies.push(new Enemy(10, floorPos_y - 70, 90));
    enemies.push(new Enemy(140, floorPos_y - 10, 230));
    enemies.push(new Enemy(610, floorPos_y - 10, 100));
    enemies.push(new Enemy(990, floorPos_y - 10, 290));
    enemies.push(new Enemy(970, floorPos_y - 10, 250));
    enemies.push(new Enemy(1000, floorPos_y - 10, 550));
    enemies.push(new Enemy(1050, floorPos_y - 10, 490));
       
}

function draw()
{
    
	///////////DRAWING CODE//////////
    
    clear();
    if(screen==0){
        background(143,188,143);
        fill(0);
        textFont('fontBold', 33 );
        text('Chef Aldo lost his pizzas in the forest. Only you, the chosen one can',70,120);
        text('help him get them back before the rats eat them. Do not let the rat',80,200);
        text('catch you, he will eat all your pizzas and make you lose lives.',90,280);
        text('If you are ready press the spacebar and be a hero :)',160,440);
        textSize(21);
        text('Power: When Chef Aldo is on a platform, pressing his intial will give you a power jump',130,360);
        
    }
    
    if(screen==1){
    
    //blue sky
    background(100,155,255);
    
    //green ground
    noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
    
    push();
    translate(scrollPos,0);
    
    //clouds
    drawClouds();
    animateClouds();
    
    //mountains
    drawMountains();
    
    //trees
    drawTrees();
    
    //platforms
    for(var i = 0; i<platforms.length; i++)
        {
            platforms[i].draw();
            
        }
    
	//canyon
    for(var i = 0; i<canyons.length; i++)
      {
        drawCanyon(canyons[i]); 
        checkCanyon(canyons[i]);  
         
      }

    //collectable
    for(var i = 0; i<collectables.length; i++)
      {
          if(!collectables[i].isFound)
          {
                drawCollectable(collectables[i]);
                checkCollectable(collectables[i]);
              
          }
        
      }
    
    renderFlagpole();
    
    for(var i = 0; i < enemies.length; i++)
        {
            enemies[i].draw();
            var isContact = enemies[i].checkContact(gameChar_world_x,gameChar_y);
            if(isContact)
                {
                    if(lives > 0)
                    {
                        startGame();
                        break;
                    }
                }
        }

    pop();
    
    //the game character
    if(isLeft && isFalling)
	{
		// add your jumping-left code
        drawGC_IsLeftAndIsFalling();
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        drawGC_IsRightAndIsFalling();
	}
	else if(isLeft)
	{
		// add your walking left code
        drawGC_IsLeft();
	}
	else if(isRight)
	{
		// add your walking right code
        drawGC_IsRight();
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        drawGC_IsFallingOrIsPlummeting();
	}
	else
	{
		// add your standing front facing code
        drawGC_StandingFrontFacing();
	}

    fill(255);
    noStroke();
    textSize(20);
    text("score up to 14 : " + game_score,20,20); 
    
    textSize(20);
    fill(255,0,0)
    text("lives: " + lives, width - 70, 20);
    
    drawLifeTokens();

    if(lives < 1)
    {
        noLoop();
        textSize(50);
        text("GAME OVER", 340,height/2 - 50)
        textSize(40);
        fill(0);
        text("Press space to continue", 300,height/2-10) 
        
    }
    
    if(flagpole.isReached == true)
    {
        noLoop();
        fill(0,255,0)
        textSize(50);
        text("LEVEL COMPLETE", 330,height/2 - 50)
        fill(0);
        textSize(40);
        text("Press space to continue", 360,height/2-10) 
        
    }
    
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
  
    if(isLeft)
    {
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 5;
        }
        else
        {
            scrollPos +=5;
        }
        
    }
    
    if(isRight)
    {
        if(gameChar_x < width * 0.8)
        {
            gameChar_x += 5;
        }
        else
        {
            scrollPos -=5;
        }
        
    }
       
    if(gameChar_y < floorPos_y)
    {
        var isContact = false;
        for(var i = 0; i < platforms.length; i++)
            {
                if(platforms[i].checkContact(gameChar_world_x, gameChar_y) == true)
                    {
                        isContact = true;
                        isFalling = false;
                        break;
                    }
            }
        if(isContact == false)
            {
                gameChar_y += 1;
                isFalling = true;
            }
        
    }
        
    else
    {
        isFalling = false;
    }
    
    if(isPlummeting)
    {
        gameChar_y += 5;
        checkPlayerDie();
        
    }

    gameChar_world_x = gameChar_x - scrollPos;
    
     if(flagpole.isReached == false)
    {
        checkFlagpole();
        
    }
    
    
}
}
    
function keyPressed()
{
	//if statements to control the animation of the character when keys are pressed.

    if(isPlummeting == false){
        
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if(key == ' ')
    {
        screen=1;
    }
    
    if(keyCode == 37)
    {
        console.log("left arrow");
        isLeft = true;
        walkSound.play();
        
    }
    else if(keyCode == 39)
    {
        console.log("right arrow");
        isRight = true;
        walkSound.play();
        
    }
    else if(keyCode == 38)
    {
        if(gameChar_y >= floorPos_y)
        {
            console.log("up arrow");
            gameChar_y -= 70;
            jumpSound.play();
            
        }  
    }
    else if(keyCode == 65)
    {
        if(!isFalling && gameChar_y <= floorPos_y - 60)
        {
            isFalling=true;
            gameChar_y -= 160;
            
        }
        else
        {
            gameChar_y += 0;
            
        }
            
    
    }
    
}
}
    
function keyReleased()
{
	//if statements to control the animation of the character when keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
     if(keyCode==37)
    {
        console.log("left arrow");
        isLeft = false;
    }
    else if(keyCode==39)
    {
        console.log("right arrow");
        isRight = false;
    }

}

function drawCollectable(t_collectable)
{
    fill(184,134,11);
    triangle(t_collectable.x_pos - 12, t_collectable.y_pos + 13, t_collectable.x_pos + 10, t_collectable.y_pos + 13, t_collectable.x_pos + 2, t_collectable.y_pos - 10);
    fill(255,215,0);
    triangle(t_collectable.x_pos - 10, t_collectable.y_pos + 10, t_collectable.x_pos + 9, t_collectable.y_pos + 10, t_collectable.x_pos + 2, t_collectable.y_pos - 10);
    fill(165,42,42);
    ellipse(t_collectable.x_pos + 1, t_collectable.y_pos - 3, t_collectable.Size, t_collectable.Size);
    ellipse(t_collectable.x_pos - 3, t_collectable.y_pos + 5, t_collectable.Size, t_collectable.Size);
    ellipse(t_collectable.x_pos + 4, t_collectable.y_pos + 5, t_collectable.Size, t_collectable.Size);
    //anchor
/*    fill(255,0,0);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, 0.1,01); */  
    
}

function drawCanyon(t_canyon)
{
    noStroke();
    fill(0);
    ellipse(t_canyon.x_pos + 42.5,floorPos_y,85,10);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.Width,150);
    fill(30,144,255);
    rect(t_canyon.x_pos,floorPos_y + 110,t_canyon.Width,150);
    fill(255,100);
    rect(t_canyon.x_pos + 10,floorPos_y + 118,15,2);
    rect(t_canyon.x_pos + 47,floorPos_y + 119,15,2);
    rect(t_canyon.x_pos + 37,floorPos_y + 128,15,2);
    rect(t_canyon.x_pos + 64,floorPos_y + 133,15,2);
    rect(t_canyon.x_pos + 11,floorPos_y + 133,15,2);
    //anchor
 /*   fill(255,0,0);
    ellipse(t_canyon.x_pos, floorPos_y, 5,5);*/
       
}

function checkCollectable(t_collectable)
{
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos)<15)
    {
        t_collectable.isFound=true;
        game_score+=1;
    }
    
}

function checkCanyon(t_canyon)
{
    if(gameChar_y == floorPos_y && gameChar_world_x - gameChar_width/2 > t_canyon.x_pos && gameChar_world_x + gameChar_width/2 < t_canyon.x_pos +t_canyon.Width)
    {
        isPlummeting=true;
        isLeft = false;
        isRight = false;
        
    }
    
}

function renderFlagpole()
{
    push();
    strokeWeight(5);
    stroke(245,255,250);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
    fill(72,209,204);
    noStroke();
    
    if(flagpole.isReached)
    {
         rect(flagpole.x_pos,floorPos_y - 250,80,50);        
    }
    else
    {
        rect(flagpole.x_pos,floorPos_y - 50,80,50);
    }
    
    pop();
    
}

function checkFlagpole()
{
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d < 15)
    {
        flagpole.isReached = true;
    }
    
}

function checkPlayerDie()
{
    if(gameChar_y > height)
    {
        console.log("lives: " + lives);
        if (lives > 0)
        {
           startGame(); 
        }
        else
        {
            console.log("Game Over")
        }
    }
}

function drawLifeTokens(){
   
    for(var i=0;i<lives;i++){
        fill(139,0,0);
        ellipse(25*i+960,40,20,20);
    }
    
}

function createPlatforms(x, y, length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            fill(128,0,0);
            rect(this.x, this.y, this.length, 15);
            fill(255);
            textSize(14);
            text("ALDO = A",this.x+10,this.y+12);
    
        },
        checkContact: function(gc_x, gc_y)
        {
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d =this.y - gc_y;
                if(d >= 0 && d<5)
                {
                    return true;
                    
                }
                
            }
            
            return false;
        }
    }
    
    return p;
}

function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1.4;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
            {
                this.inc = -1;
            }
        
        else if(this.currentX < this.x)
            {
                this.inc = 1;
            }
    }
    
    this.draw = function()
    {
        this.update();
        stroke(1);
        fill(255);
        ellipse(this.currentX - 10,this.y - 15,11,15);
        ellipse(this.currentX + 10,this.y - 15,11,15);
        noStroke();
        fill(119,136,153)
        ellipse(this.currentX, this.y, 25, 25);
        stroke(1);
        ellipse(this.currentX - 10,this.y - 13,7,11);
        ellipse(this.currentX + 10,this.y - 13,7,11);
        fill(0);
        ellipse(this.currentX - 7, this.y - 3, 5, 5);
        ellipse(this.currentX + 7, this.y - 3, 5, 5);
        stroke(1);
        line(this.currentX - 9,this.y - 9,this.currentX - 2,this.y - 6);
        line(this.currentX + 2,this.y - 6,this.currentX + 9,this.y - 9);
        line(this.currentX,this.y + 5,this.currentX - 5,this.y + 10);
        line(this.currentX,this.y + 5,this.currentX + 5,this.y + 10);
        fill(233,150,122);
        ellipse(this.currentX, this.y + 1, 4, 4);
        noStroke();
        fill(255);
        rect(this.currentX + 1,this.y + 7,1,3);
        rect(this.currentX - 1,this.y + 7,1,3);
         
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y)
        
        if(d < 20)
            {
                return true;
            }
        return false;
    }
    
}