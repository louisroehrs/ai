+++
title = 'DeepSeek Snake'
date = 2024-01-23T10:00:00-07:00
draft = false
tags = ['fundamentals']
+++


I decided to see how well DeepSeek writes a basic snake game in JavaScript.   While it understood the concept well with a minimum of prompting, it didn't do as well with the code even though it provided the following instructions once it finished coding.

First, the game didn't run at all.  Variable scoping was confused with variables in functions referring to those in other functions as if they were global.  To get the game to run, I made those variables global.

It was not very familiar with the ctx and HTML canvas API, applying size attributes on the wrong element and hallucinating some non-existent API calls to get the canvas size.  I changed the code to set the canvas size to a given x,y size scaled by a settable scale.

It was also referring to the canvas width and height as strings and trying to do math with them.  Removed quotes to fix those instances.

It completely failed to put in event handling code for the key presses.  I added that.

It stopped when it found food.  I fixed that as well.

A neat feature that it did add which worked right away was that the snake grew with alternating color segments.

Collision with itself was not discussed and not coded.

Anyhow, enjoy!

The game is simple but demonstrates basic game mechanics and controls in JavaScript.

To see the game in action, click [DeepSeek Snake Game](/deepseek_snake.html)
