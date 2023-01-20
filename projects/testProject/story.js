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
            text: "different side of the road",
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
            text: "Really?",
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
            text: "Got that white collar job",
            startTime: 25500,
        },
        {
            text: "Go to church every Sunday",
            startTime: 27500,
        },
        {
            text: "No honking",
            startTime: 29500,
        },
        {
            text: "No rude gestures",
            startTime: 30500,
        },
        {
            text: "All-around well-tempered, sophisticated individual.",
            startTime: 31500,
            duration: 3000,
        },
        {
            text: "And don't you act like Miss Goodie-Two shoes",
            startTime: 37500,
        },
        {
            text: "You were stone cold when I met you",
            startTime: 39500,
        },
        {
            text: "The Iron Maiden",
            startTime: 41500,
        },
        {
            text: "I thought you hated me!",
            startTime: 43500,
        },
        {
            text: "I was the only one asking!",
            startTime: 51500,
        },
        {
            text: "What kinda stupid rule is that?",
            startTime: 55500,
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
            text: "Wow look at you!",
            startTime: 33500,
        },
        {
            text: "So professional!",
            startTime: 35500,
        },
        {
            text: "You know I didn't hate you",
            startTime: 47500,
        },
        {
            text: "I kept hanging out with you didn't I?",
            startTime: 49500,
        },
        {
            text: "The guy always asks.",
            startTime: 53500,
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
        {
            text: "",
            startTime: 35000,
            callback: () => {
                const audioElement = new Audio('phone.mp3');
                audioElement.volume = 0.25;
                audioElement.play();
                setTimeout(() => {
                    const audioElement = new Audio('tap.mp3');
                    audioElement.volume = 0.75;
                    audioElement.play();
                }, 8000);
            }
        },
        {
            text: "Crap",
            startTime: 41000,
        },
        {
            text: "Hello? This is Ed",
            startTime: 48000,
        },
        {
            text: "Yeah, I'm almost there",
            startTime: 52000,
        },
        {
            text: "Just a few more minutes",
            startTime: 56000,
        },
        {
            text: "No she won't miss her flight!",
            startTime: 60000,
        },
        {
            text: "Yeah I'll be back in thirty minutes",
            startTime: 68000,
        },
        {
            text: "No, go to sleep.",
            startTime: 70000,
        },
        {
            text: "Go to sleep.",
            startTime: 74000,
        },
        {
            text: "'Night",
            startTime: 78000,
        },
        {
            text: "Yeah",
            startTime: 86000,
        },
        {
            text: "She still gets worried when I'm out past midnight",
            duration: 3000,
            startTime: 88000,
        },
        {
            text: "It's annoying",
            startTime: 94000,
        },
        {
            text: "Your faith was strong",
            startTime: 149000,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "But you needed proof",
            startTime: 151000,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "You saw her bathing on the roof",
            startTime: 153000,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "Her beauty",
            startTime: 156500,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "in the moonlight",
            startTime: 157500,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "overthrew ya",
            startTime: 158500,
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
        },
        {
            text: "She tied you to a kitchen chair",
            startTime: 163500,
            duration: 3000,
            style: {
                "font-size": "25px",
                "font-style": "italic",
            },
        },
        {
            text: "She broke your throne and she cut your hair",
            startTime: 167000,
            style: {
                "font-size": "30px",
                "font-style": "italic",
            },
        },
        {
            text: "And from your lips she drew the Hallelujah",
            startTime: 170000,
            duration: 6000,
            style: {
                "font-size": "45px",
                "font-style": "italic",
            },
        },
        {
            text: "Pffffft",
            startTime: 180000,
        },
        {
            text: "Heh heh",
            startTime: 182000,
        },
        {
            text: "Nah I was perfect.",
            startTime: 185000,
        },
        {
            text: "Man, I'll miss this",
            startTime: 195000,
        },
        {
            text: "You know what I mean.",
            startTime: 201000,
        },
        {
            text: "Sigh.",
            startTime: 205000,
        },
        {
            text: "You're impossible.",
            style: {
                "font-style": "italic",
            },
            startTime: 208000,
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
            callback: () => {
                const audioElement = new Audio('casette2.mp3');
                audioElement.play();
                setTimeout(() => {
                    // const audioElement2 = new Audio('hallelujah.mp3');
                    // audioElement2.volume = 0.25;
                    // audioElement2.play();
                    // const audioElement3 = new Audio('surface_noise.wav');
                    // audioElement3.volume = 0.7;
                    // audioElement3.play();
                }, 8000);
            }
        },
        {
            text: "wow I can't believe you still have this.",
            startTime: 13000,
        },
        {
            text: "your Mom?",
            startTime: 84000,
        },
        {
            text: "aww that's sweet",
            startTime: 92000,
        },
        {
            text: "...Hallelujah",
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
            startTime: 18500 + 60000 + 50000,
            duration: 4000,
        },
        {
            text: "Hallelujah",
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
            startTime: 18000 + 60000 + 50000 + 4000,
        },
        {
            text: "Hallelujah",
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
            duration: 2500,
            startTime: 18500 + 60000 + 50000 + 4000 + 3000,
        },
        {
            text: "Hallelujah",
            style: {
                "font-size": "18px",
                "font-style": "italic",
            },
            duration: 5000,
            startTime: 18000 + 60000 + 50000 + 4000 + 4000 + 3000,
        },
        {
            text: "She tied you to a kitchen chair",
            startTime: 163500,
            duration: 3000,
            style: {
                "font-size": "25px",
                "font-style": "italic",
            },
        },
        {
            text: "She broke your throne and she cut your hair",
            startTime: 167000,
            style: {
                "font-size": "30px",
                "font-style": "italic",
            },
        },
        {
            text: "And every breath we drew was Hallelujah",
            startTime: 170000,
            duration: 6000,
            style: {
                "font-size": "45px",
                "font-style": "italic",
            },
        },
        {
            text: "Hey hey who're you laughing at?",
            startTime: 182000,
        },
        {
            text: "You screwed up, not me",
            startTime: 183000,
        },
        {
            text: "You!",
            startTime: 186000,
        },
        {
            text: "You're impossible.",
            startTime: 190000,
        },
        {
            text: "What?",
            startTime: 197000,
        },
        {
            text: "Getting the lyrics wrong?",
            startTime: 199000,
        },
        {
            text: "No I'm afraid I don't.",
            startTime: 203000,
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
        }, 120000);

        // setTimeout(() => {
        //     let man4 = new TextBox(config4);
        //     man4.start();

        //     let woman4 = new TextBox(configWoman4);
        //     woman4.start();
        // }, 150000);
    }
}

