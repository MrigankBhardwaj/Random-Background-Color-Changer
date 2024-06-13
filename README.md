# Random-Background-Color-Changer
Random background color changer is my first JavaScript Project in which you can change color and upodate the hex code by clicking the given button on screen.
NOTE : I have only written JavaScript code in it HTML and CSS codes are from freeCodeCamp practice project.
# In this Random Background Color Changer project there are three files :
    - index.html -> containing all the HTML code
    - style.css  -> containing all the css code
    - app.js     -> containing all the javaScript code.

# app.js
- Inside the app.js file first I create a array variable named #darkColorsArr and stored the hex code in it.
- Then using DOM I get the required elements like btn, body and hexCode span.
- Then I created a function named getColorIndex() in which I created a random index within the given array length by using
    -> Math.random() - To get the random number between 0 to 9
    -> Math.floor() - To get the whole number and prevent the indexes from being float.
- Then I changed the value the background color and hex code on the click of the given button by using addEventListener.

Have any suggestion or improvement feel free to contact me on bhardwajmrigank13@gmail.com