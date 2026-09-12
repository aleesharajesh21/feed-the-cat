function feed(food) {

    const message = document.getElementById("message");
    const cat = document.getElementById("catImage");

    if (food === "fish") {
        message.innerHTML = "Yummy! I love fish! 😻";
        cat.src = "images/cat fish.png";
    }

    else if (food === "chicken") {
        message.innerHTML = "Mmmm... chicken! 😸";
        cat.src = "images/cat chicken.png";
    }

    else if (food === "milk") {
        message.innerHTML = "My favourite! 🥰";
        cat.src = "images/cat milk.png";
    }

    else if (food === "carrot") {
        message.innerHTML = "Umm... I'm a cat, not a rabbit! 😾";
        cat.src = "images/cat disgusted.png";
    }

    cat.style.transform = "scale(1.1)";

    setTimeout(function() {
        cat.style.transform = "scale(1)";
    }, 300);
}


function resetGame() {
    document.getElementById("message").innerHTML =
        "Feed me please! 😿";

    document.getElementById("catImage").src =
        "images/cat.png";
}