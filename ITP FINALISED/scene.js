var trees_x;
var treePos_y;
var clouds;
var mountain;

function startGame_Scene()
{
    trees_x = [200,600,1100,1600];
    treePos_y = height/1.59;
    
    clouds = [
        {x_pos:-200, y_pos:50},
        {x_pos:-100, y_pos:150},
        {x_pos:200, y_pos:65},
        {x_pos:500, y_pos:50},
        {x_pos:800, y_pos:150},
        {x_pos:1000, y_pos:90},
        {x_pos:1400, y_pos:10}
        ];
    
    mountain = [
        {x_pos:350, y_pos:550},
        {x_pos:850, y_pos:700},
        {x_pos:1250, y_pos:655},
        {x_pos:1700, y_pos:500},
        ];
}

function drawTrees()
{
    for(var i = 0; i < trees_x.length; i++)
    {
        fill(165,42,42);
        rect(trees_x[i], treePos_y, 20,70);
        fill(85,107,47);
        ellipse(trees_x[i] - 14, treePos_y - 6, 50,60);
        ellipse(trees_x[i] + 3, treePos_y - 56, 40,40);
        ellipse(trees_x[i] + 9, treePos_y - 27, 70,70);
        fill(220,20,60);
        ellipse(trees_x[i] + 19, treePos_y - 27, 10,10);
        ellipse(trees_x[i] - 14, treePos_y - 16, 10,10);
        ellipse(trees_x[i] + 3, treePos_y - 56, 10,10);
        //anchor
/*        fill(255,0,0);
        ellipse(trees_x[i],treePos_y,5,5);*/
    }
}

function animateClouds()
{
    clouds[0].x_pos = clouds[0].x_pos + 0.3; 
    clouds[1].x_pos = clouds[1].x_pos + 0.6;
    clouds[2].x_pos = clouds[2].x_pos + 0.3;
    clouds[3].x_pos = clouds[3].x_pos + 0.6;
    clouds[4].x_pos = clouds[4].x_pos + 0.7;
    clouds[5].x_pos = clouds[5].x_pos + 0.3;
    clouds[6].x_pos = clouds[6].x_pos + 0.25;
}

function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    {
        fill(255);
        ellipse(clouds[i].x_pos - 30, clouds[i].y_pos, 50,50);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, 60,60);
        ellipse(clouds[i].x_pos + 30, clouds[i].y_pos, 50,50);
        //anchor
        /*fill(255,0,0);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, 5,5);*/
    }
}

function drawMountains()
{
      for(var i = 0; i<mountain.length; i++)
      {
        fill(0,0,0,30);
        triangle(mountain[i].x_pos - 479, mountain[i].y_pos, mountain[i].x_pos - 316, floorPos_y, mountain[i].x_pos, floorPos_y);
        fill(120,120,120); 
        triangle(mountain[i].x_pos - 316, floorPos_y,mountain[i].x_pos, floorPos_y, mountain[i].x_pos - 152, floorPos_y - 282);
        fill(255);
        triangle(mountain[i].x_pos - 152, floorPos_y - 282, mountain[i].x_pos - 182, floorPos_y - 231, mountain[i].x_pos - 124, floorPos_y - 231);
        //anchor
      /*  fill(255,0,0);
        ellipse(mountain[i].x_pos, floorPos_y, 5,5)*/
    }
}



