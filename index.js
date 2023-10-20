// Define a function named rollDice
function rollDice() {
    // Generate random numbers between 1 and 6 for two dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Log the generated random numbers to the console
    console.log("Random Number 1: " + randomNumber1);
    console.log("Random Number 2: " + randomNumber2);
    
    // Select the HTML elements with the classes "img1" and "img2"
    var img1Element = document.querySelector(".img1");
    var img2Element = document.querySelector(".img2");

    // Create an array of image file paths for dice faces
    var imagesArray = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png"
    ];

    // Set the src attribute of img1Element to the image corresponding to randomNumber1
    img1Element.setAttribute("src", imagesArray[randomNumber1 - 1]);
  
    
    // Set the src attribute of img2Element to the image corresponding to randomNumber2
    img2Element.setAttribute("src", imagesArray[randomNumber2 - 1]);
    if (randomNumber1 > randomNumber2){
        document.querySelector("div > h1").textContent = "🥇 Player 1 won";
;

    }
    else if (randomNumber2 > randomNumber1){
        document.querySelector("div > h1").textContent = "Player 2 won 🥈";
    }
    else{
        document.querySelector("div > h1").textContent = "Draw 🙏";
    }

}

// Call the rollDice function to simulate rolling two dice
rollDice();
