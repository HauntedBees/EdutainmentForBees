const texts = {
    // Opening Cutscene
    "intro0": "I can't believe I've discovered a new Ancient Egyptian tomb! | I should probably go tell the others, but it wouldn't hurt if I explored on my own a little bit first, right?",
    "intro1": "Judging from the condition of the tomb and the design, this seems like a tomb from the New Kingdom. | The New Kingdom lasted almost 500 years and spanned three dynasties. | The famous pharaoh Tutankhamun reigned during the 18th dynasty, and his tomb was rediscovered back in 1922!", 
    "intro2": "Oh! What's that up ahead?",
    "intro3": "A sarcophagus! Jackpot! | Maybe this is the tomb of a pharaoh or some other important historical figure! I can't lift this thing open on my own, so I'll have to go back and get some help. | Hm, what's this? | ~start1", 
    "intro4": "This is jar has some heiroglyphs on it... some sort of insect... | Ah! | This is a jar full of honey! | That's right, Northern Africans were collecting honey from bees 9,000 years ago! | And Ancient Egyptians were domesticating them since before the 20th century BC! | This honey still looks as fresh as it must have been back then; due to its chemistry, honey can be preserved for tens to hundreds of years! | ...Maybe even thousands? | ~start2",
    "intro5": "Ugh... what happened? | ~start4",
    "intro6": "Where am I? | ~start5",
    "intro7": [
        "@Why does everything look so... painty? | @Who are you? | I am Intef. I found you here unconscious next to this jar of honey.",
        "@Honey...? That's right! I was in the tomb... you aren't with my excavation crew. Are you a villager? | You're not from around here, are you?",
        "@Where is here? | You're in Thebes, and just a short walk away from our great pharaoh Amenhotep the Magnificent's throne! | @Amenhotep... this must be a bad dream. Amenhotep III ruled Egypt in the 14th century BC!",
        "I don't know what any of those words mean. Are you a beekeeper? That's a pretty big jar of honey for someone to be carrying around. | @Uh, sure. I'm a beekeeper, kid.",
        "Very strange! Usually the oil in hair attracts bees, so beekeepers shave their heads! | Female beekeepers aren't very common, either. You must be a very good beekeeper!",
        "@Yep, that's me. Very special beekeeper. That's why I was just collapsed on the ground with a jar of honey right by the Nile river.",
        "Oh! Oh no! Were you robbed?? Is that why you don't have any of your other beekeeping supplies? | @Uh... | Oh dear! For such a professional to be robbed in our kingdom's capital is a disgrace!",
        "Follow me, I'll explain the situation to Amenhotep and he'll know what to do! | @Wait I don't think that's necessary-- | ~start6"
    ].join(" | "),
    "intro8": ["Is this the beekeeper you were telling me about, Intef? | Intef: Yes, your highness. | Greetings, traveller. I have been told that you were robbed of your beekeeping tools, yes?",
        "@(It's probably easier to just say yes to that than to try explaining what actually happened.) | Yup! Er, I mean, that is correct, your highness. | I tried some of the honey Intef brought; it seems like you know your way around a beehive!",
        "I've sent one of my servants to gather what he could to help you. | It may not be much, but it will certainly be enough to get you back on your feet. | @You have my eternal gratitude, your highness.",
        "No need for that! This is the least I can do after you were attacked inside my very city. | However, I certainly will not turn down any offerings of honey the next time you're in the area, ha ha!",
        "Head back to the Nile, my servant will be waiting for you there. | ~start7"
    ].join(" | "),
    "intro9": ["You must be the beekeeper. I can tell from how you look nothing like a beekeeper and have no beekeeping supplies! | @Yep, that's me. The real beekeeper of Ancient Egypt. | \"Ancient?\"",
        "@I mean, uh, Current Egypt. The real beekeeper of Right Now Egypt. | Excellent. As requested by our wonderful leader Amenhotep, I have some supplies here for you, such as this raft! | @A whole raft??",
        "Yes, of course. How else would you do your job? | As I'm sure you know, beekeepers ride special rafts loaded up with beehives down the Nile river. | By arriving in different parts of Egypt, beekeepers can catch the native plants there in their flowering stage so their bees can pollinate them.",
        "Then, when those flowers have been pollinated, they ride off to the next area that needs pollinating. | @Yes, of course. That is a thing I knew. | The raft is equipped with 5 beehives, already full of bees, and a supply crate.",
        "Inside the supply crate is a smoker and some sticks of incense. | @That sounds lovely! I love the smell of incense! | The incense isn't for you! After putting the incense in the smoker and lighting it, you can aim the smoke at the beehives. | Beekeepers use smoke to calm bees before removing the honeycomb from their hives. | If the bees aren't calmed first, trying to remove the honey will result in a lot of nasty stings.",
        "But, you're a real beekeeper, so you knew all of that, of course. Right? | @Absolutely. One hundred percent. | What is a \"percent?\" | @Uh, it's a beekeeper thing. You wouldn't understand. | Ah, of course! Well, everything is ready here for you now, so I'll be off.",
        "The plants aren't flowering here in Thebes yet, but if you come back later I'm sure we'll have some nice plants ready for you. | When you pick a destination on the raft, you'll be able to see which areas are ready to be pollinated. | @Thank you very for your help. | ~start8"
    ].join(" | "),

    // Pollinating plants
    "nobees": "I don't have any bees with me right now.",
    "nohives": "I don't have any empty beehives with me right now. I'll need to empty one of my full ones out, or trade for a new one.",
    "beelease": "I have released the bees on this @arg. I can come back later to collect them. The longer they're here, the more nectar they'll collect!",
    "beesTooSoon": "The bees are back in their hive, but they didn't have enough time to collect any nectar!",
    "beesCollected": "The bees are back in their hive, and they got some nectar, too!",

    // Travelling
    "goToPlace": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey. | ?sail",
    "goToPlaceNo": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey, but the plants there will not be flowering when you arrive. | ?sail",

    // Specific Place Fun Facts
    "factTanis0": "In 1866, the Decree of Canopus was discovered in the ruins of Tanis. This decree was a record of priests attending an assembly in 238 BC. | Its most notable feature is that it was written in Egyptian heiroglyphs, Demotic Egyptian, and Greek, making it one of the most important discoveries to help decipher ancient Egyptian, much like the Rosetta Stone.",
    "factTanis1": "The Finding of Moses is said to have happened near Tanis. This story from the Hebrew Bible tells how baby Moses was hidden in a papyrus basket by his mother in the Nile, then found by the pharaoh's daughter.", 
    "factTanis2": "Tanis had three chief dieties. Amun, the god of sun and air, his consort Mut, a goddess whose name meant \"mother\", and their child Khonsu, a god associated with the moon.", 
    "factLeontopolis0": "Leontopolis got its Greek name (the city of lions) due to its temples dedicated to the lion gods Bastet, Sekhmet, and Maahes.", 
    "factLeontopolis1": "During the twenty-third Dynasty, Leontopolis was a district capital of Lower Egypt.", 
    "factLeontopolis2": "A Jewish temple was built in Leontopolis by the priest Onias IV in the second century BC. This temple operated for three centuries, until it was eventually closed during after the Jewish War started.", 
    "factMemphis0": "Memphis was the capital of Egypt during the age of the Old Kingdom, but remained an important city throughout Egyptian history until Muslim rule began in the 7th century AD.",
    "factMemphis1": "Ptah, the god of architects and craftsmen, was honored in the Hut-ka-Ptah temple in Memphis. This temple's Greek name - Aigyptos - may be the orgin of the name \"Egypt.\"",
    "factMemphis2": "During the New Kingdom, Memphis was an education center for princes and other nobility.",
    "factCrocodilopolis0": "Crocodilopolis", 
    "factCrocodilopolis1": "", 
    "factCrocodilopolis2": "", 
    "factHerakleopolis0": "Herakleopolis", 
    "factHerakleopolis1": "", 
    "factHerakleopolis2": "", 
    "factHermopolis0": "Hermopolis", 
    "factHermopolis1": "", 
    "factHermopolis2": "", 
    "factAbydos0": "Abydos", 
    "factAbydos1": "", 
    "factAbydos2": "", 
    "factThebes0": "Thebes", 
    "factThebes1": "", 
    "factThebes2": "", 
    "factKom Ombo0": "Kom Ombo", 
    "factKom Ombo1": "", 
    "factKom Ombo2": "", 
    "factElephantine0": "Elephantine", 
    "factElephantine1": "", 
    "factElephantine2": "", 
    "factAbu Simbel0": "Abu Simbel", 
    "factAbu Simbel1": "", 
    "factAbu Simbel2": "", 
    "factNapata0": "Napata", 
    "factNapata1": "", 
    "factNapata2": "", 
    // Misc Fun Facts
    "factMisc0": "Lettuce was first grown in Egypt as early as 2680 BC. It was the sacred plant of Min, a god of reproduction. Egyptians would carry lettuce at his festivals, as it was thought to give him reproductive energy.", 
    "factMisc1": "", 
    "factMisc2": "", 
    "factMisc3": "", 
    "factMisc4": "", 
    "factMisc5": "", 
    "factMisc6": "", 
    "factMisc7": "", 
    "factMisc8": "", 
    "factMisc9": "", 
    "factMisc10": "", 
    "factMisc11": "", 
    "factMisc12": "", 
    "factMisc13": "", 
    "factMisc14": "", 
    "factMisc15": "", 
    "factMisc16": "", 
    "factMisc17": "", 
    "factMisc18": "", 
    "factMisc19": "", 
    "factMisc20": "", 
    "factMisc21": "", 
    "factMisc22": "", 
    "factMisc23": "", 
    "factMisc24": "", 
    "factMisc25": "", 
    "factMisc26": "", 
    "factMisc27": "", 
    "factMisc28": "", 
    "factMisc29": "", 

    // Beehives
    "noIncense": "I don't have any incense. If I just reach into a beehive now, I'll get a lot of nasty stings! | But if I light some incense, the smoke will calm the bees enough for me to get the honeycombs! | I should find someone who will give me some incense in a trade.", 
    "noHoney": "The bees have not produced any honey yet. | Once bees have collected nectar from flowers by licking it up and storing it in a special stomach, they fly back to their hives and pass the nectar to another bee. | They will repeatedly pass the nectar from bee to bee until the partially digested nectar is ready to be stored in the honeycomb. After the nectar's chemical makeup has changed and it is stored in the honeycomb, bees will flap their wings like fans to help the water in the nectar evaporate. | After most of the water has evaporated, a bee will plug up the honeycomb with some liquid from their abdomen, which will harden into beeswax. | After that, the honeycomb can be opened to reveal the honey inside! | I should sail somewhere and give the bees some time to convert the nectar into honey.", 
    "noNectar": "The bees have not collected any nectar yet. | Bees help pollinate plants when they fly from flower to flower collecting nectar. As they're lapping up nectar, pollen from the flower sticks to them. | Flower pollen contains male gametes, which can fertilize other flowers when bees land on them. | Once a flower's ovule has been fertilized by a bee with pollen on it, seeds can be formed, so the plant can reproduce. | I should release some bees around some plants so they can collect some nectar.", 

    // People
    "amenken1": "Ah! Are you a beekeeper? Perhaps you can help me! | My master's boat has sprung a leak, and I need some beeswax to seal it up! | Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenkenNo": "I guess I'll have to find some beeswax elsewhere.",
    "amenkenLack": "Oh, it seems you don't have enough beeswax. That's okay, I'll check with the other beekeepers.",
    "amenkenGive": "Great! Thank you! This will help out a lot! | !In Ancient Egypt, beeswax was used for many things, like making candles, medicine, and sealants (things that keep water out)!",
    "amenken1b": "Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenken2": "Thanks for that beeswax! It will surely come in handy!"
};

const choices = {
    "?sail": [
        { choice: "Set Sail", action: boat.SetSailForAdventure },
        { choice: "Nevermind", action: textHandler.EndDialog }
    ],
    
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

const cutscenes = {
    "~start1": function() {
        land.inDialogue = false;
        land.cutscene = { 
            active: true, state: 0, frame: 0, iter: 0, frames: [ [0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1] ],
            Process: function() {
                if(this.state === 0) {
                    land.playerX -= 2;
                    land.bgMoved = true;
                    land.playerAnim.SetMoving();
                    gfx.DrawSprite2("playerModern", land.playerAnim.GetFrame(0), land.xOffset, land.yPos, "characters");
                    if(land.playerX <= 2220) {
                        land.playerX = 2220;
                        this.state = 1;
                    }
                } else if(this.state === 1) {
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                    if(++this.iter >= 3) {
                        this.iter = 0;
                        this.frame++;
                        if(this.frame === 3) {
                            const beeIndex = land.entities.findIndex(e => e.sprite === "beejar");
                            land.entities.splice(beeIndex, 1);
                        }
                    }
                    if(this.frame === this.frames.length) {
                        this.frame--;
                        this.state = 2;
                    }
                } else if(this.state === 2) {
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                    textHandler.ShowText("Protagonny", "intro4");
                    this.state = 3;
                } else {
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                }
            }
        }
    },
    "~start2": function() {
        land.inDialogue = false;
        land.cutscene = {
            active: true, state: 0, frame: 1, iter: 0, frames: [ [1, 1], [2, 1], [3, 1], [0, 2] ],
            Process: function() {
                if(this.state === 0) {
                    if(++this.iter > 10) {
                        this.state = 1;
                        this.iter = 0;
                    }
                    gfx.DrawSprite2("playerScene1", this.frames[0], land.xOffset, land.yPos, "characters");
                } else if(this.state === 1) {
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                    if(++this.iter >= 2) {
                        this.iter = 0;
                        this.frame++;
                    }
                    if(this.frame === this.frames.length) {
                        this.frame--;
                        this.state = 2;
                    }
                } else if(this.state === 2) {
                    if(++this.iter > 40) {
                        this.state = 3;
                        this.iter = 0;
                    }
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                } else if(this.state === 3) {
                    if(++this.iter > 70) {
                        this.state = 4;
                        this.iter = 0;
                    }
                    gfx.DrawSprite2("playerScene1", [1, 2], land.xOffset - 100, land.yPos, "characters");
                    gfx.DrawSprite2("playerScene1", [2, 2], land.xOffset + 100, land.yPos, "characters");
                } else {
                    game.SwitchTo(land, "CutsceneThebes");
                }
            }
        };
    },
    "~start3": function() {
        land.cutscene = {
            active: true, Process: function() {
                gfx.DrawSprite2("playerScene1", [1, 3], land.xOffset - 100, land.yPos, "characters");
                gfx.DrawSprite2("playerScene1", [2, 3], land.xOffset + 100, land.yPos, "characters");
            }
        };
        land.Animate();
        textHandler.ShowText("Protagonny", "intro5");
    },
    "~start4": function() {
        land.inDialogue = false;
        land.cutscene = {
            active: true, Process: function() {
                gfx.DrawSprite2("playerScene1", [1, 4], land.xOffset - 100, land.yPos, "characters");
                gfx.DrawSprite2("playerScene1", [2, 4], land.xOffset + 100, land.yPos, "characters");
            }
        };
        land.Animate();
        textHandler.ShowText("Protagonny", "intro6");
    },
    "~start5": function() {
        land.inDialogue = false;
        land.cutscene = {
            active: true, state: 0, frame: 0, iter: 0, frames: [ [3, 2], [3, 3], [3, 4], [0, 3] ],
            Process: function() {
                if(this.state === 0) {
                    gfx.DrawSprite2("playerScene1", this.frames[this.frame], land.xOffset, land.yPos, "characters");
                    if(++this.iter >= 3) {
                        this.iter = 0;
                        this.frame++;
                    }
                    if(this.frame === this.frames.length) {
                        this.state = 1;
                    }
                } else if(this.state === 1) {
                    land.cutscene = { active: false };
                    land.playerDir = -1;
                    land.Animate();
                    textHandler.ShowText("Intef", "intro7");
                }
            }
        };
    },
    "~start6": function() {
        land.inDialogue = false;
        const intef = land.entities.filter(e => e.id === "helpser")[0];
        land.cutscene = {
            active: true, state: 0, iter: 0,  
            Process: function() {
                if(this.state === 0) {
                    gfx.DrawSprite2("player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.yPos, "characters");
                    intef.x += 7;
                    intef.anim.SetMoving();
                    if(intef.x >= 350) {
                        const beeIndex = land.entities.findIndex(e => e.sprite === "beejar");
                        land.entities.splice(beeIndex, 1);
                        this.state = 1;
                    }
                } else if(this.state === 1) {
                    gfx.DrawSprite2("player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.yPos, "characters");
                    intef.x += 7;
                    intef.anim.SetMoving();
                    if(intef.x >= 550) {
                        land.playerDir = 1;
                        this.state = 2;
                    }
                } else if(this.state === 2) {
                    gfx.DrawSprite2("player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.yPos, "characters");
                    intef.x += 7;
                    intef.anim.SetMoving();
                    if(intef.x >= 1100) {
                        this.active = false;
                        intef.x = 6200;
                    }
                }
            }
        };
    },
    "~start7": function() {
        land.inDialogue = false;
        land.target.type = "bg";
        land.entities.push({ type: "bg", sprite: "boat", dir: 0, x: 50, y: 75 });
        // TODO: push the mid-walk thought processese
        land.entities.push(GetCopy("tutServant", 450));
    },
    "~start8": function() {
        land.inDialogue = false;
        const servant = land.entities.filter(e => e.id === "tutServant")[0];
        land.cutscene = {
            active: true, 
            Process: function() {
                gfx.DrawSprite2("player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.yPos, "characters");
                servant.x += 6;
                servant.anim.SetMoving();
                if(servant.x >= 1200) {
                    this.active = false;
                    const meIndex = land.entities.findIndex(e => e.id === "tutServant");
                    land.entities.splice(meIndex, 1);
                    land.entities.push({ type: "boat", sprite: "", x: 400 });
                }
            }
        };
    }
};