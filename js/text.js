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

    // Cats
    "cat0": "Mao.",
    "cat1": "Muwaaaoo.",
    "cat2": "Mew mew mew. Meaow.",
    "cat3": "Prrrrrr. Prrrrrr.",
    "cat4": "Mew? Mao!",
    "cat5": "Vrrrrrrrrrrrr...",
    "cat6": "Miu!",
    "cat7": "Mao mao mao!",
    "cat8": "Myaoooo!",
    "cat9": "Snff-chu! Chu! Chu! Chu! Chu! Chu! | @She keeps sneezing. Poor kitty. | Chu! Chu! Snff! Meu?",
    "dog": "Bark bark! | @Wait... bark? | Yeah, I barked. What're you gonna do about it? Nobody will believe you! | @Did you just TALK!? | Mew?",

    // Gods
    "bastet": "Bastet was a goddess originally celebrated as a lioness warrior of the sun, but eventually became the protector cat goddess. | Her parents were Ra the sun god and the goddess Isis, and with the craftsman god Ptah, she birthed Maahes the lion warrior.",
    "maahes": "Maahes was a lion-headed god of war and son of the god Ptah and either Bastet or Sekhmet, depending on the mythology. | It was said that as the sun god Ra went on his nightly voyages, Maahes would fight off Apep, the serpent god of chaos. | The duality of chaos against order was an important part of Ancient Egyptian beliefs; one could not exist without the other. | Chaos was called Isfet and order was called Ma'at. The dead needed to be purified of Isfet before they could be reborn in the afterlife.", 
    "sekhmet": "Sekhmet was a lioness goddess of healing. She was also the fiercest hunter in Ancient Egypt. | Some said that the desert was created from her breath, and other stories told that Ra created her when his eye looked upon the earth. | With her husband Ptah, the craftsmang god, she birthed Maahes the lion warrior.", 

    // Crops
    "corn0": ["Corn in Ancient Egypt? That doesn't sound right. | !Corn, or maize, was first domesticated in Mexico over 6000 years ago.", 
            "!Some early English texts mentioned \"corn\" in Egypt, but back then, the word \"corn\" was just a word to describe any grain, like wheat.",
            "!Once Europeans travelled to the Americas and discovered maize, the word started referring just to that specific crop.",
            "But, it could be possible... some mummies have been found to have traces of tobacco on them, another plant that only grew in the New World.",
            "There have been some arguments that Ancient Egyptians travelled to the Americas before the Europeans did, but they've yet to gain mainstream acceptance.",
            "So right now, the claim that corn grew in Ancient Egypt doesn't seem to have much evidence to support it, this is just a hallucination.",
            "But hey, kids, consider becoming a historian or archaeologist! Maybe YOU can be the one to discover something big like Ancient Egyptian corn, or Atlantis!",
            "!This game and its developers do not endorse any fringe historical theories and are not responsible for any of its players becoming historians and, thus, huge nerds."
    ].join(" | "),
    "wheat0": "Ancient Egyptians used wheat to make bread. | During the New Kingdom, loaves were grown in many different shapes and sizes in large cylinder-shaped clay ovens. | They even made breads shaped like animals and people. How fun!",
    "wheat1": "Most breads in Ancient Egypt were made with emmer wheat, which was a very difficult wheat to work with. | Usually the edible part of the wheat is separated from their outer casings through threshing - beating the grains with a flail on a flat surface. | The outer shells of emmer wheat don't come off through threshing, though, so more elaborate methods had to be used.",
    "barley0": "Ancient Egyptians used barley to create some breads, but it was mainly used to create beer. | Beer was a very important part of the Egyptian diet, and was consumed daily. | Ancient Egyptian beer had a texture like gruel and was an important source of protein and vitamins.",
    "papyrus0": "The Papyrus reed has been used to make a paper-like material in Egypt for over 5000 years. The plant's abundance across the Nile river made it a very good writing material. | Ancient Egyptians made ink by mixing powdered minerals with water, and wrote with reed brushes.", 
    "papyrus1": "Papyrus is very stable in dry climates like Egypt's, but Egyptians had to make sure they were kept out of humid conditions, or they might grow moldy.", 
    "papyrus2": "In addition to paper, papyrus reeds can be used to create baskets, shoes, and boats.", 
    "date0": "Ancient Egyptians used the fruits from the date tree as food and for making date wine. | Date fruits also contain a very sweet syrup called date honey, which is used extensively in North African and Middle Eastern cooking.", 
    "date1": "Date palms are considered very important in many Middle Eastern religions. | Palm trees are viewed as symbols of prosperity in Judaism and Christianity, and dates are recommended food for pregnant women in Islam.", 
    "flax0": "Flax is a very versatile crop, used for its oil, as a food, and primarily as a fiber. | Textiles made from flax fibers are called linen and are used for bed sheets, clothes, and towels, among other things. | In Ancient Egypt linen was used to wrap up mummies and was worn by priests, as flax was a symbol of purity.",
    "flax1": "Ancient Egyptian temples had flowering flax painted on their walls, and Egyptian linen was used heavily in trade with Phoenicians and Romans.", 
    "pomegranate0": "Pomegranates were first found in the New Kingdom of Ancient Egypt, with one discovered in the tomb of Pharoah Hatshepsut's butler. | Hatshepsut, who ruled from 1478 to 1458 BC, is the second known female pharoah, the first being Sobekneferu, whose short reign only lasted from 1806 to 1802 BC.",
    "pomegranate1": "The pomegranate shrub was one of the first trees to be domesticated in the eastern Mediterranean region, but its origin is in the region extending from Iran to northern India.", 
    "bluelotus0": "Tutankhamun's mummy was covered with blue lotus flowers. These flowers were frequently associated with dancing and spiritual rites. | It was important to Ancient Egyptian mythology, and it was believed that the sun god Ra emerged from a lotus flower in the primordial waters.",
    "bluelotus1": "The blue lotus has been used in perfumes and for medicinal purposes, as it has mild sedative properties when eaten.",
    "whitelotus0": "The white lotus, also known as the tiger lotus, was considered a symbol of creation in Ancient Egypt. | Even now, the white lotus is revered in Egypt, where it is the national flower.", 
    "whitelotus1": "White lotuses were grown in ponds and marshes in Ancient Egypt, and were even buried in the tomb of Ramesses II. | White lotus growing is one of the earliest examples of ornamental gardening.", 
    "whitelotus2": "The number 1,000 in Ancient Egyptian numerals was represented by the heiroglyph for the white lotus.", 

    // Travelling
    "goToPlace": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey. | ?sail",
    "goToPlaceNo": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey, but the plants there will not be flowering when you arrive. | ?sail",

    // Specific Place Fun Facts
    "factTaremu0": "Taremu got its Greek name (Leontopolis, the city of lions) due to its temples dedicated to the lion gods Bastet, Sekhmet, and Maahes.", 
    "factTaremu1": "During the twenty-third Dynasty, Taremu was a district capital of Lower Egypt.", 
    "factTaremu2": "A Jewish temple was built in Taremu by the priest Onias IV in the second century BC. This temple operated for three centuries, until it was eventually closed during after the Jewish War started.", 
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
    "smonk": "Bee-autiful! I collected enough honeycomb to get me @arg jars of honey and @arg2 beeswax!",

    // People
    "amenken1": "Ah! Are you a beekeeper? Perhaps you can help me! | My master's boat has sprung a leak, and I need some beeswax to seal it up! | Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenkenNo": "I guess I'll have to find some beeswax elsewhere.",
    "amenkenLack": "Oh, it seems you don't have enough beeswax. That's okay, I'll check with the other beekeepers.",
    "amenkenGive": "Great! Thank you! This will help out a lot! | !In Ancient Egypt, beeswax was used for many things, like making candles, medicine, and sealants (things that keep water out)!",
    "amenken1b": "Can you provide me with 10 beeswax? I can give you 2 gold for it! | ?amenken1",
    "amenken2": "Thanks for that beeswax! It will surely come in handy!",

    // People - Taremu
    "fishboy": "Taremu is the land of fish, but some foreigners call it the city of lions, because of our temples to the lion goddesses. | But why do you think the goddesses like this city in the first place? Because of all the fish we got here, ya dingdong! | The lions came to the fish, not the other way around, obviously!",
    "fishshop": "There are a lot of cats here - we even have lions in the temple sometimes - so fishing is popular here. | People will buy fish for themselves, or to give to the cats as gifts or offerings. | We consider cats very important - they kill dangerous snakes and protect our Pharaohs.",
    "fruitboy1": "Fruit! Get your fruit here! We got pomegranates, we got melons, we got dates, figs, grapes, olives, plums! | I even have apples - those fruits the Hyksos brought with them! | What, you don't know the Hyksos? Back in the day, they invaded and started the Fifteenth Dynasty! | We're still not entirely sure where they came from, though. | Eventually Ahmose I, the first ruler of the Eighteenth Dynasty, drove off the last Hyksos pharoah and brought Egypt back under Egyptian control! | Being conquered must have sucked, but the Hyksos left a lot of great stuff behind, like new bronze-working techniques, horses, stronger bows and battle axes, and, of course, apples! | Don't ask why a random fruit merchant knows all this, I'm just trying to sell these apples, lady!",
    "breadgirl": "You know what goes great with fish? Bread. You know what goes great with anything, actually? Bread. | Wait, are you a beekeeper? I can tell from how you look nothing like a beekeeper. | I'm trying to bake some more honey bread, but I'm fresh out of honey. Do you think you could spare a few jars? | ?breadLady",
    "breadgirlGive": "Great! This much honey will last me quite a while! | Thank you, here's some wheat and a few loaves of bread!", 
    "breadgirlDone": "Emmer wheat is especially hard to process into flour, but you can't argue with the end result of fresh-baked bread! | I've heard that the nobles put things like dates and coriander seeds in their breads to give them extra flavor.", 
    "breadgirlB": "Hello again, beekeeper. Can you spare a few jars of honey? | ?breadLady", 
    "breadgirlNo": "Darn. I guess I'll have to find some honey elsewhere.", 
    "breadgirlLack": "Your generosity is appreciated, but you can't give me honey you don't have. | If you get four jars of honey, come back later and I'll gladly take them off your hands!",
    "x": "" 
};

const choices = {
    "?sail": [
        { choice: "Set Sail", action: boat.SetSailForAdventure },
        { choice: "Nevermind", action: textHandler.EndDialog }
    ],
    "?breadLady": [
        {
            choice: "Give 4 jars of honey.",
            action: function() {
                if(player.HasItem("honey", 4)) {
                    player.RemoveHoney("any", 0, 4);
                    player.AddItem("wheat", 10);
                    player.AddItem("bread", 4);
                    textHandler.MoveToNewText("breadgirlGive");
                    land.target.text = "breadgirlDone";
                    player.ClearChievo("Taremu", "shop2");
                } else {
                    land.target.text = "breadgirlB";
                    textHandler.MoveToNewText("breadgirlLack");
                }
            }
        }, {
            choice: "Do not give honey.",
            action: function() {
                land.target.text = "breadgirlB";
                textHandler.MoveToNewText("breadgirlNo");
            }
        }
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