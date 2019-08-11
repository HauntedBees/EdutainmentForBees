const texts = {
    // Pollinating plants
    "nobees": "I don't have any bees with me right now.",
    "nohives": "I don't have any empty beehives with me right now. I'll need to empty one of my full ones out, or trade for a new one.",
    "beelease": "I have released the bees on this @arg. I can come back later to collect them. The longer they're here, the more nectar they'll collect!",
    "beesTooSoon": "The bees are back in their hive, but they didn't have enough time to collect any nectar!",
    "beesCollected": "The bees are back in their hive, and they got some nectar, too!",

    // Travelling
    "goToPlace": "It will take @arg days to sail to @arg2, giving your bees plenty of time to produce honey. | ?sail",
    // Specific Place Fun Facts
    "factTanis0": "In 1866, the Decree of Canopus was discovered in the ruins of Tanis. This decree was a record of priests attending an assembly in 238 BC. | Its most notable feature is that it was written in Egyptian heiroglyphs, Demotic Egyptian, and Greek, making it one of the most important discoveries to help decipher ancient Egyptian, much like the Rosetta Stone.",
    "factTanis1": "The Finding of Moses is said to have happened near Tanis. This story from the Hebrew Bible tells how baby Moses was hidden in a papyrus basket by his mother in the Nile, then found by the Pharoah's daughter.", 
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