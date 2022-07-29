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
            text: "Hey is it alright if I put on some music?",
            startTime: 0,
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
            text: "different time of day",
            startTime: 42500,
        },
        {
            text: "different direction",
            startTime: 43500,
        },
        {//and a lot of luggage
            text: "but still just us and your luggage.",
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
            text: "Do you even need to ask?",
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
            text: "No way really?",
            startTime: 40000,
        },
        // Instead of this vague description, tell specific events that happened
        // You were wearing that awful vest and helmet
        // show he's a classic macho guy, contrast to how sensitive he is later
        {
            text: "Oh I remember now! Like ten years ago",
            startTime: 48500,
        },
        {
            text: "You were wearing that stupid neon vest",
            startTime: 51500,
        },
        {
            text: "arguing with your boss on the phone",
            startTime: 54500,
        },
        {
            text: "I was kinda nervous",
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
            text: "AH HA HA HAH HA HAA AHA",
            startTime: 500,
        },
        {
            text: "HA HA HAH HA HAA HA",
            startTime: 3000,
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
            text: "Hey remember that thing I said?",
            startTime: 500,
        },
        {
            text: "Oh you go",
            startTime: 2500,
        },
        {
            text: "No you first",
            startTime: 3250,
        },
        {
            text: "I mean,",
            startTime: 10500,
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
            startTime: 20500,
        },
        {
            text: "and I'll turn the corner",
            startTime: 24500,
        },
        {
            text: "and you won't be there",
            startTime: 26500,
        },
        {
            text: "Ow!",
            startTime: 34500,
        },
        {
            text: "Why'd you punch me?",
            startTime: 35000,
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
            text: "Hey wanna change the song?",
            startTime: 500,
        },
        {
            text: "Oh you go",
            startTime: 2500,
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
            startTime: 39500,
        },
        {
            text: "Don't act like I'm already gone",
            startTime: 41500,
        },
    ],
};

// Arc 4 looking forward and singalong____________________________________________________

let config4 = {
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
            text: "So...",
            startTime: 0,
        },
        {
            text: "...",
            startTime: 4000,
        },
    ],
};

let configWoman4 = {
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
            text: "So...?",
            startTime: 2000,
        },
        {
            text: "...I'm gonna change the song.",
            startTime: 10000,
        },
        {
            text: "wow I can't believe you still have this one.",
            startTime: 13000,
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
        }, 90000);

        setTimeout(() => {
            let man4 = new TextBox(config4);
            man4.start();

            let woman4 = new TextBox(configWoman4);
            woman4.start();
        }, 150000);
    }
}

