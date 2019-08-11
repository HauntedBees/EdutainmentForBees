const texts = {
    "test": "My name is Craig, and here I sit. | I'd like to take, a massive shit. | And when I do, you best watch out. | I'm gonna blast, these poopies out.",
    "test2": "We're no strangers to love, You know the rules and so do I, A full commitment's what I'm thinking of, You wouldn't get this from any other guy, I just wanna tell you how I'm feeling, Gotta make you understand, Never gonna give you up, Never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you, We've known each other for so long, Your heart's been aching but you're too shy to say it, Inside we both know what's been going on, We know the game and we're gonna play it",
    
    "nobees": "I don't have any bees with me right now.",
    "nohives": "I don't have any empty beehives with me right now. I'll need to empty one of my full ones out, or trade for a new one.",
    "beelease": "I have released the bees on this @arg. I can come back later to collect them. The longer they're here, the more nectar they'll collect!",
    "beesTooSoon": "The bees are back in their hive, but they didn't have enough time to collect any nectar!",
    "beesCollected": "The bees are back in their hive, and they got some nectar, too!",

    //"boat": "?boat",
    "goToPlace": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey. | ?sail",
    //"returnToPlace": "?return",

    "noIncense": "I don't have any incense. If I just reach into a beehive now, I'll get a lot of nasty stings! | But if I light some incense, the smoke will calm the bees enough for me to get the honeycombs! | I should find someone who will give me some incense in a trade.", 

    "amenken1": "Ah! Are you a beekeeper? Perhaps you can help me! | My master's boat has sprung a leak, and I need some beeswax to seal it up! | Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenkenNo": "I guess I'll have to find some beeswax elsewhere.",
    "amenkenLack": "Oh, it seems you don't have enough beeswax. That's okay, I'll check with the other beekeepers.",
    "amenkenGive": "Great! Thank you! This will help out a lot! | !In Ancient Egypt, beeswax was used for many things, like making candles, medicine, and sealants (things that keep water out)!",
    "amenken1b": "Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenken2": "Thanks for that beeswax! It will surely come in handy!"
};

const choices = {
    /*"?boat": [
        { 
            choice: "Board Ship", 
            action: function() { 
                // TODO
            }
        },
        { 
            choice: "View Stock", 
            action: function() {
                texts["inventory"] = "I have ";
                const things = [];
                for(const key in player.inventory) {
                    const count = player.inventory[key];
                    if(count > 0) {
                        things.push(count + " " + key);
                    }
                }
                if(player.honeys.length > 0) {
                    things.push(player.honeys.length + " honey");
                }
                if(things.length === 0) {
                    texts["inventory"] += "nothing."
                } else {
                    texts["inventory"] += things.join(", ") + ".";
                }
                textHandler.MoveToNewText("inventory");
            }
        }
    ],*/
    "?sail": [
        {
            choice: "Set Sail", 
            action: function() {
                // TODO
            }
        },
        {
            choice: "Nevermind", 
            action: textHandler.EndDialog
        }
    ],
    /*"?return": [
        {
            choice: "Return to land", 
            action: function() {
                // TODO
            }
        },
        {
            choice: "Nevermind", 
            action: textHandler.EndDialog
        }
    ],*/
    "?amenken1": [
        {
            choice: "Trade 10 beeswax.",
            action: function() {
                if(player.HasItem("beeswax", 10)) {
                    player.RemoveItem("beeswax", 10);
                    player.AddItem("gold", 2);
                    textHandler.MoveToNewText("amenkenGive");
                    land.target.text = "amenken2";
                } else {
                    land.target.text = "amenken1b";
                    textHandler.MoveToNewText("amenkenLack");
                }
            }
        },
        {
            choice: "Do not give beeswax.",
            action: function() {
                land.target.text = "amenken1b";
                textHandler.MoveToNewText("amenkenNo");
            }
        }
    ]
};