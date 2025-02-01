# Quiz Game by Shishank Shekher
## Made using React.js, Node.js, Express.js and TailwindCSS



## Setting Up the game
To play the browser game, start by running the following commands in your '.../QuizGame/server' terminal:
>npm run dev

This will start the development back-end server on port 8080, which allow access to the API without triggering CORS.

Next, on a new terminal with the path '.../QuizGame/QuizGame'
>npm run dev 

This will launch the vite local host and we will be able to launch our browser game.




## How to Play

There is a button on the top left corner of your screen which can be used to play/pause the music

Enter your name in the provided input field and click on the 'Start' button to begin the game.

The questions will automatically change as you submit an answer.

A sound effect will hint the player if they have selected the correct answer or not.

For each consecutive correct answer, the multiplier will rise by 100%, i.e., on the first correct answer you will gain 100 points,
and on the consecutive correct answer 200, then 300 .....
The multiplier will reset to 100 points if you get an answer wrong.

Lastly , the game will end when all the questions have been answered. The player's final score will be displayed with their name!


