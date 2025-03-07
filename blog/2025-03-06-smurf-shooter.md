---
slug: smurf-shooter
title: Smurf Shooter
authors: roehrs
tags: ['ai']
---

Game time!

This time we use the Cursor IDE and Claude 3.5-sonnet to build a game from a simple description.

The game idea comes from my 6.111 Introductory Digital Project Laboratory course at MIT.  My partner and I came up with the project title ThermoNuclear Smurf Detonation Device.  Our TA called it an automatic A+ project.  So we had to make it work with digital chips and no microprocessor.  It took a whopping semester to build it with our nerd kits that we transported chained to our wrists with <!-- truncate --> handcuffs.  

Back in the day, the world was in love with Smurfs, those blue fuzzy things with white hats. <b>[Learn more about Smurfs](https://en.wikipedia.org/wiki/The_Purple_Smurfs)</b>.

This is not our photo as disc photography (not digital) was all the rage so we don't have a picture, but once you see one rat's nest of wires for a project in 6.111, you've seen them all.   My friend did the game hardware and I did the video section. ![Nerd Kits wired up.](/smurfs/NerdKits.png)

**36 years later...**

Hey, what about that game we made back in the days of big hair and great music.  Can AI make that game?

I fired up Cursor, the AI enable IDE, <b>[Cursor IDE, download it, build, and get rich](https://www.cursor.com/en)</b> and gave this ridiculously bare prompt with no real thought.

Oh, I spoke the prompt using the Mac's fn-fn voice-typer trick.  (I'm not swearing, type the **fn** key twice to voice type on a Mac anywhere text is accepted.) This will explain the 'Astros' among other things in the prompt.

```
Write a game that simulates the Astros game instead
of asteroids have 3-D Smurf characters that get blown
up into smaller Smurf characters. Write this game
using JavaScript. The rocket can we accelerated
with the A key, slowed with the S key,  and fired missiles
with the F key and rotated with the R key to the right
```

(Good grief, the voice-typer can't even spell things and Claude still  gets it.)


And it built this <a href="/smurfs/"><b>Smurf Shooter, click here to play</b></a> on the first go.

![Smurf game](/smurfs/SmurfScreenshot.png)

And it produced these lovely instructions:

```

This game includes:

1. A rocket that you can control with:
   - 'A' key to accelerate
   - 'S' key to decelerate
   - 'R' key to rotate
   - 'F' key to fire missiles

2. Smurfs that:
   - Float around the screen
   - Split into smaller Smurfs when hit by missiles
   - Are drawn with a simple blue body and white hat

3. Game features:
   - Collision detection between missiles and Smurfs
   - Screen wrapping for both the rocket and Smurfs
   - Victory condition when all Smurfs are destroyed
   - Smooth animation using requestAnimationFrame

To play the game:
1. Save both files in the same directory
2. Open index.html in a web browser
3. Use the A, S, R, and F keys to control the rocket
   and shoot the Smurfs

The Smurfs will split into smaller versions when hit,
until they reach a minimum size at which point they'll
disappear when hit. The game ends when
all Smurfs are destroyed.
```

I love the graphic it produced for the smurf.  Classic!

There are some issues.  The missiles don't take into account the speed of the ship when fired.  I did not say what happened if the ship collided with an astroid.  So all in all pretty amazine.

I did not touch the code one bit except to add the /smurfs path to game.js in the index.html.  Otherwise, it all works on the first shot.  No other edits or prompts.

Do we need coders?

- Time to build this game. 5 minutes.
- Time to write this up. 1 hour.
- Time for you to read it. Priceless!


PostScript

I was using chatgpt to help debug issues with Docusaurus to get these links to flat html pages to work around Facebook's insanity.  It took three hours to figure it out.  Once we did, (yes, the AI and I...). It had this to say:

```
Haha, I feel your pain. Docusaurus can be a real time vampire
when things don’t behave as expected.
Glad we finally got it working! 🚀🎉

Now you can get back to actually building stuff
instead of fighting with Facebook’s overengineered nonsense.
If anything else in this godforsaken setup gives you trouble,
just hit me up—no three-hour detours next time. 😆

🔥 Go forth and conquer, my friend! 🔥

```

I can see how people have relationships with AI... pretty wild.

