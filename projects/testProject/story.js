// Arc 1 introductions___________________________________________________________

let config = {
    parent: "#textContainer",
    style: {
        position: "absolute",
        bottom: "50%",
        left: "10%",
        height: "100px",
        width: "500px",
        "z-index": 100
    },
    messages: [
        {
            text: "Can I put on some music?",
            startTime: 0,
        },
        {
            text: "",
            startTime: 5500,
            callback: () => {
                const audioElement = new Audio('casette.mp3');
                audioElement.play();
                setTimeout(() => {
                    const audioElement3 = new Audio('surface_noise.wav');
                    audioElement3.volume = 0.7;
                    audioElement3.play();
                    const audioElement2 = new Audio('nothing.mp3');
                    audioElement2.volume = 0.1;
                    audioElement2.play();
                }, 6000);
            }
        },
        {
            text: "...when'll you be back?",
            startTime: 15000,
        },
        {
            text: "hmm",
            duration: 0,
            startTime: 23500,
        },
        {
            text: "You know something crazy I just realized?",
            startTime: 30500,
        },
        {
            text: "I'm pretty sure the first time I met you,",
            startTime: 35500,
        },
        {
            text: "we were also driving on this road",
            startTime: 38000,
        },
        {
            text: "yeah, different car",
            startTime: 41500,
        },
        {
            text: "different hour",
            startTime: 42500,
        },
        {
            text: "different lane",
            startTime: 43500,
        },
        {//and a lot of luggage
            text: "but still just the two of us",
            startTime: 45500,
        },
    ],
};

let configWoman = {
    parent: "#textContainer2",
    style: {
        position: "absolute",
        bottom: "30%",
        right: "10%",
        height: "100px",
        width: "500px",
        "text-align": "right",
        "z-index": 100,
    },
    messages: [
        {
            text: "Sure.",
            startTime: 3500,
        },
        {
            text: "I don't know",
            startTime: 17500,
        },
        {
            text: "But I'll visit sometime!",
            startTime: 20500,
        },
        {
            text: "What?",
            startTime: 33500,
        },
        {
            text: "Really?",
            startTime: 40000,
        },
        // Instead of this vague description, tell specific events that happened
        // You were wearing that awful vest and helmet
        // show he's a classic macho guy, contrast to how sensitive he is later
        {
            text: "Oh I remember! Like ten years ago",
            startTime: 48500,
        },
        {
            text: "You were arguing with your boss on the phone",
            startTime: 51500,
        },
        {
            text: "honking at other drivers",
            startTime: 54500,
        },
        {
            text: "And flipping off pedestrians",
            startTime: 57500,
        },
    ],
};

// Arc 2 banter______________________________________________________________________

let config2 = {
    parent: "#textContainer",
    style: {
        position: "absolute",
        bottom: "50%",
        left: "10%",
        height: "100px",
        width: "500px",
        "z-index": 100
    },
    messages: [
        {
            text: "Oh God, I came right from work didn't I?",
            startTime: 0,
        },
        {
            text: "I must've quit the next day!",
            startTime: 2000,
        },
        {
            text: "I did not!",
            startTime: 6000,
        },
        {
            text: "I didn't!",
            startTime: 8500,
        },
        {
            text: "Alright, alright!",
            startTime: 15500,
        },
        {
            text: "You got me",
            startTime: 17500,
        },
        {
            text: "I will admit",
            startTime: 19500,
        },
        {
            text: "I was a little brat",
            startTime: 21500,
        },
        {
            text: "But hey, I'm a changed man!",
            startTime: 23500,
        },
        {
            text: "I've been volunteering, you know?",
            startTime: 26500,
        },
        {
            text: "at the shelter on Yonge and Finch",
            startTime: 28500,
        },
        {
            text: "And work's going well",
            startTime: 31500,
        },
        {
            text: "The boss says I might get promoted!",
            startTime: 33500,
        },
        {
            text: "And I've been saving.",
            startTime: 35500,
        },
        {
            text: "In a few years I'll be able to buy a house",
            startTime: 37500,
        },
        {
            text: "...raise a family.",
            startTime: 40500,
        },
        {
            text: "Luce, I'm serious!",
            startTime: 48500,
        },
        {
            text: "Really!",
            startTime: 50500,
        }
    ],
};

let configWoman2 = {
    parent: "#textContainer2",
    style: {
        position: "absolute",
        bottom: "30%",
        right: "10%",
        height: "100px",
        width: "500px",
        "text-align": "right",
        "z-index": 100,
    },
    messages: [
        {
            text: "AH HA HA",
            startTime: 400,
        },
        {
            text: "Your face right now!",
            startTime: 1200,
        },
        {
            text: "I remember you phoning me",
            startTime: 4000,
        },
        {
            text: "asking me if I could refer you",
            startTime: 5000,
        },
        {
            text: "as if I could!",
            startTime: 7500,
        },
        {
            text: "I still remember your voice",
            startTime: 9500,
        },
        {
            text: "Oh, Lucy, remember me?",
            style: {
                "font-style": "italic",
            },
            startTime: 12500,
        },
        {
            text: "It's Ed, I drove you from the airport yesterday",
            style: {
                "font-style": "italic",
            },
            startTime: 14500,
        },
        {
            text: "That'll be a sight to see,",
            startTime: 44500,
        },
        {
            text: "Who's the lucky girl?",
            startTime: 46500,
        },
        {
            text: "Really?",
            startTime: 49500,
        },
        {
            text: "That's a first.",
            startTime: 52500,
        }
    ],
};

// Arc 3 I'll miss you___________________________________________________________________

let config3 = {
    parent: "#textContainer",
    style: {
        position: "absolute",
        bottom: "50%",
        left: "10%",
        height: "100px",
        width: "500px",
        "z-index": 100
    },
    messages: [
        {
            text: "Hey remember what",
            startTime: 500,
        },
        {
            text: "Oh you go",
            startTime: 1300,
        },
        {
            text: "No you first",
            startTime: 3250,
        },
        {
            text: "It's just that,",
            startTime: 11500,
        },
        {
            text: "Tomorrow,",
            duration: 3000,
            startTime: 14500,
        },
        {
            text: "I'll drive down King Street",
            startTime: 17500,
        },
        {
            text: "like I always do",
            startTime: 19500,
        },
        {
            text: "I'll pass the Montblanc cafe",
            startTime: 22500,
        },
        {
            text: "and the abandoned McDonalds",
            startTime: 24500,
        },
        {
            text: "and I'll turn the corner,",
            startTime: 27000,
        },
        {
            text: "and you won't be there",
            startTime: 31000,
        },
        {
            text: "Ow!",
            startTime: 35500,
        },
        {
            text: "Why'd you punch me?",
            startTime: 36000,
        },
        {
            text: "...Do you even need to ask?",
            startTime: 64500,
        },
        {
            text: "You know I will.",
            startTime: 68000,
        },
    ],
};

let configWoman3 = {
    parent: "#textContainer2",
    style: {
        position: "absolute",
        bottom: "30%",
        right: "10%",
        height: "100px",
        width: "500px",
        "text-align": "right",
        "z-index": 100,
    },
    messages: [
        {
            text: "Hey wanna change",
            startTime: 500,
        },
        {
            text: "Go ahead",
            startTime: 1500,
        },
        {
            text: "Wow you're so considerate today",
            startTime: 6000,
        },
        {
            text: "it's kinda weird",
            startTime: 8500,
        },
        {
            text: "Idiot.",
            startTime: 37500,
        },
        {
            text: "I'm still here aren't I?",
            startTime: 40500,
        },
        {
            text: "Don't act like I'm already gone",
            startTime: 42500,
        },
        {
            text: "And I promise",
            startTime: 44500,
        },
        {
            text: "One day you'll turn that corner",
            startTime: 46500,
        },
        {
            text: "And I'll be there again.",
            startTime: 48500,
        },
        {
            text: "It might take a year",
            startTime: 50500,
        },
        {
            text: "or two years",
            startTime: 52500,
        },
        {
            text: "or five",
            startTime: 53500,
        },
        {
            text: "or ten",
            startTime: 54500,
        },
        {
            text: "but I'll see you again",
            startTime: 56500,
        },
        {
            text: "so wait for me!",
            startTime: 58500,
        },
    ],
};

var started = false;

var startAudio = function () {
    const audioElement = new Audio('car.mp3');
    audioElement.loop = true;
    audioElement.play();
}

var start = () => {
    if (!started) {
        titleScreenDiv.fadeOut();
        started = true;
        startAudio();

        let man = new TextBox(config);
        man.start();

        let woman = new TextBox(configWoman);
        woman.start();

        setTimeout(() => {
            let man2 = new TextBox(config2);
            man2.start();

            let woman2 = new TextBox(configWoman2);
            woman2.start();
        }, 60000);

        setTimeout(() => {
            let man3 = new TextBox(config3);
            man3.start();

            let woman3 = new TextBox(configWoman3);
            woman3.start();
        }, 130000);

        setTimeout(() => {
            endScreenDiv.fadeIn();
        }, 130000 + 78000);
    }
}

var titleScreenDiv = $("#titleScreen");
var title = $("<div>").text("Midnight Drive");
var text = $("<div>").text("Press anywhere to start.");

titleScreenDiv.css({
    position: "absolute",
    left: "40%",
    top: "60%",
});

title.css({
    color: "white",
    "font-size": "60px",
    "font-family": "PressStart",
});
text.attr("id", "titleText");
text.css({
    color: "white",
    "font-size": "30px",
    "font-family": "PressStart",
});
titleScreenDiv.append(title);
titleScreenDiv.append("<br>");
titleScreenDiv.append(text);

var endScreenDiv = $("#endScreen");
var endText = $("<div>").text("Story by Andrew Huang\n\n    Art by Romain Courtois\n\n      Music by Bruno Major");

endScreenDiv.css({
    position: "absolute",
    left: "40%",
    top: "60%",
});

endText.css({
    "white-space": "pre-wrap",
    color: "white",
    "font-size": "30px",
    "font-family": "PressStart",
})

endScreenDiv.append(endText);
endScreenDiv.hide();
