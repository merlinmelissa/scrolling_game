function drawGC_IsLeftAndIsFalling()
{
        //jumping-left code
        fill(250,240,230);
        rect(gameChar_x-4, gameChar_y-65,8,13);
        ellipse(gameChar_x, gameChar_y-25,13,30);
        fill(0); 
        ellipse(gameChar_x, gameChar_y-9,6,6);
        fill(255,218,185);
        ellipse(gameChar_x, gameChar_y-46,10,15);
        ellipse(gameChar_x-4, gameChar_y-31,15,5);
        stroke(1);
        line(gameChar_x-4, gameChar_y-44, gameChar_x, gameChar_y-46);
        fill(0);
        ellipse(gameChar_x-4, gameChar_y-49,1,2);
        //anchor
/*        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}

function drawGC_IsRightAndIsFalling()
{
        //jumping-right code
        fill(250,240,230);
        rect(gameChar_x-5, gameChar_y-64,8,13);
        ellipse(gameChar_x-1, gameChar_y-25,13,30);
        fill(0);
        ellipse(gameChar_x-1, gameChar_y-9,6,6);
        fill(255,218,185);
        ellipse(gameChar_x-1, gameChar_y-46,10,15);
        ellipse(gameChar_x+2, gameChar_y-31,15,5);
        stroke(1);
        line(gameChar_x-2, gameChar_y-45, gameChar_x+2, gameChar_y-43);
        fill(0); 
        ellipse(gameChar_x+1, gameChar_y-49,1,2);
/*        //anchor
        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}

function drawGC_IsLeft()
{
        //walking left code
        fill(250,240,230);
        rect(gameChar_x-6, gameChar_y-56,8,13);
        ellipse(gameChar_x-1, gameChar_y-17,13,30);
        fill(0);
        ellipse(gameChar_x-1, gameChar_y-1,6,6);
        fill(255,218,185);
        ellipse(gameChar_x-1, gameChar_y-38,10,15);
        ellipse(gameChar_x-3, gameChar_y-23,5,10);
        stroke(1);
        line(gameChar_x-5, gameChar_y-36, gameChar_x-2, gameChar_y-37);
        fill(0);
        ellipse(gameChar_x-5, gameChar_y-41,1,2);
        //anchor
/*        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}

function drawGC_IsRight()
{
        //walking right code
        fill(250,240,230);
        rect(gameChar_x-4, gameChar_y-56,8,13);
        ellipse(gameChar_x, gameChar_y-17,13,30);
        fill(0);
        ellipse(gameChar_x, gameChar_y-1,6,6);
        fill(255,218,185);
        ellipse(gameChar_x, gameChar_y-38,10,15);
        ellipse(gameChar_x+1, gameChar_y-23,5,10);
        stroke(1);
        line(gameChar_x, gameChar_y-38, gameChar_x+4, gameChar_y-37);
        fill(0);
        ellipse(gameChar_x+3, gameChar_y-41,1,2);
/*        //anchor
        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}

function drawGC_IsFallingOrIsPlummeting()
{
        //jumping facing forwards code
        fill(250,240,230);
        rect(gameChar_x-4, gameChar_y-66,11,13);
        ellipse(gameChar_x-1, gameChar_y-27,25,30);
        fill(0);
        ellipse(gameChar_x+6, gameChar_y-12,8,8);
        ellipse(gameChar_x-4, gameChar_y-12,8,8);
        fill(255,218,185);
        ellipse(gameChar_x+1, gameChar_y-48,15,15);
        ellipse(gameChar_x-15, gameChar_y-30,5,10);
        ellipse(gameChar_x+12, gameChar_y-31,5,10);
        stroke(1);
        line(gameChar_x-3, gameChar_y-46, gameChar_x, gameChar_y-47);
        line(gameChar_x, gameChar_y-47, gameChar_x+4, gameChar_y-46);
        fill(0);
        ellipse(gameChar_x-3, gameChar_y-51,1,2);
        ellipse(gameChar_x+4, gameChar_y-51,1,2);
        //anchor
/*        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}

function drawGC_StandingFrontFacing()
{
        //standing front facing code
        fill(250,240,230);
        rect(gameChar_x-6, gameChar_y-56,11,13);
        ellipse(gameChar_x-1,gameChar_y-17,25,30);
        fill(0);
        ellipse(gameChar_x+4, gameChar_y-2,8,8);
        ellipse(gameChar_x-6, gameChar_y-2,8,8);
        fill(255,218,185);
        ellipse(gameChar_x-1, gameChar_y-38,15,15);
        ellipse(gameChar_x-15, gameChar_y-20,5,10);
        ellipse(gameChar_x+12, gameChar_y-21,5,10);
        stroke(1);
        line(gameChar_x-5, gameChar_y-36, gameChar_x-2, gameChar_y-37);
        line(gameChar_x-2, gameChar_y-37, gameChar_x+2, gameChar_y-36);
        fill(0);
        ellipse(gameChar_x-5, gameChar_y-41,1,2);
        ellipse(gameChar_x+2, gameChar_y-41,1,2);
        //anchor
/*        fill(255,0,0);
        ellipse(gameChar_x, gameChar_y,5,5);*/
}
