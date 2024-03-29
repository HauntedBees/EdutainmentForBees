const texts = {
    /* #region Opening */
    "intro0": "I can't believe I've discovered a new Ancient Egyptian tomb! | I should probably go tell the others, but it wouldn't hurt if I explored on my own a little bit first, right?",
    "intro1": "Judging from the condition of the tomb and the design, this seems like a tomb from the New Kingdom. | The New Kingdom lasted almost 500 years and spanned three dynasties. | The famous pharaoh Tutankhamun reigned during the 18th dynasty, and his tomb was rediscovered back in 1922!", 
    "intro2": "Oh! What's that up ahead?",
    "intro3": "A sarcophagus! Jackpot! | Maybe this is the tomb of a pharaoh or some other important historical figure! I can't lift this thing open on my own, so I'll have to go back and get some help. | Hm, what's this? | ~start1", 
    "intro4": "This jar has some hieroglyphs on it... some sort of insect... | Ah! | This is a jar full of honey! | That's right, Northern Africans were collecting honey from bees 9,000 years ago! | And Ancient Egyptians were domesticating them since before the 20th century BC! | This honey still looks as fresh as it must have been back then; due to its chemistry, honey can be preserved for tens to hundreds of years! | ...Maybe even thousands? | ~start2",
    "intro5": "Ugh... what happened? | ~start4",
    "intro6": "Where am I? | ~start5",
    "intro7": [
        "@Why does everything look so... painty? | @Who are you? | I am Intef. I found you here unconscious next to this jar of honey.",
        "@Honey...? That's right! I was in the tomb... you aren't with my excavation crew. Are you a villager? | You're not from around here, are you?",
        "@Where is here? | You're in Waset, and just a short walk away from our great pharaoh Amenhotep the Magnificent's throne! | @Amenhotep... this must be a bad dream. Amenhotep III ruled Egypt in the 14th century BC!",
        "I don't know what any of those words mean. Are you a beekeeper? That's a pretty big jar of honey for someone to be carrying around. | @Uh, sure. I'm a beekeeper, kid.",
        "Very strange! Usually the oil in hair attracts bees, so beekeepers shave their heads! | Female beekeepers aren't very common, either. You must be a very good beekeeper!",
        "@Yep, that's me. Very special beekeeper. That's why I was just collapsed on the ground with a jar of honey right by the Nile river.",
        "Oh! Oh no! Were you robbed?? Is that why you don't have any of your other beekeeping supplies? | @Uh... | Oh dear! For such a professional to be robbed in our kingdom's capital is a disgrace!",
        "Follow me, I'll explain the situation to Amenhotep and he'll know what to do! | @Wait I don't think that's necessary-- | ~start6"
    ].join(" | "),
    "intro8": ["Is this the beekeeper you were telling me about, Intef? | Intef: Yes, your highness. | Greetings, traveller. I have been told that you were robbed of your beekeeping tools, yes?",
        "@(It's probably easier to just say yes to that than to try explaining what actually happened.) | @Yup! Er, I mean, that is correct, your highness. | I tried some of the honey Intef brought; it seems like you know your way around a beehive!",
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
        "The plants aren't flowering here in Waset yet, but if you come back later I'm sure we'll have some nice plants ready for you. | When you pick a destination on the raft, you'll be able to see which areas are ready to be pollinated. | @Thank you very much for your help. | ~start8"
    ].join(" | "),
    "introThought1": "This is no dream... I can't believe I'm in Ancient Egypt! That honey must have had magic powers. | Are magic powers even real? I guess I can't argue otherwise now!",
    "introThought2": "This city is amazing... it's hard to believe that thousands of years ago, we had societies just as big and bustling as we do now!",
    /* #endregion */
    /* #region Closing */
    "amenhotepEnd": [
        "What business have you with the ph--oooooh, you're that one beekeeper! The one with the good honey! | @That's me, your highness. I come bearing more gifts.",
        "This is wonderful news! I was just getting low! But that look on your face tells me that you're not here just to give me a gift. | @Well, not exactly...",
        "Speak your mind, beekeeper! What do you need from your pharaoh? | @See, that's the thing. You aren't actually my pharaoh; I'm not Egyptian, but I can't find my way back home.",
        "This is sad news, you would make a wonderful Egyptian citizen, but I understand the desire to return to your homeland! | Where is the place you call home?",
        "@Well, it's less of a \"where\" and more of a \"when.\" | I'm not sure I understand, but I will do everything I can to help you.",
        "Khonsu is the god of the moon, and he watches over those who travel at night. His altar is just west of here, with Amun-Ra and Mut. | Go there and pray to him, and you will be shown the way home.",
        "@Thank you, your highness. | Don't thank me, thank the gods! | ~end1"
    ].join(" | "),
    "khonsuPray": "@Well, here's the altar. I guess it's prayer time. | @Khonsu, please bring me back home. To the future. Bring me Back to the-- | AAAAAAAAAA AAA AAAAAA AAAAA!!!! | @Uh, I agree. | ~end2",
    "wakeUp": "I'm back in the temple... the sarcophagus! | I need to tell the others about this!",
    "returnToSender": "Everyone's going to be amazed when they find out what happened to me down here! | ~end3",
    "archiBald1": [
        "So, you found an undiscovered sarcophagus in the tomb... | And instead of coming to get me, you ate the centuries-old honey next to it... | Then you passed out and hallucinated an Ancient Egypt adventure...",
        "And now you think that hallucination is real and want to share the discoveries you made in it with the world. | Did I get all of that right? | @It WAS real! Honey doesn't make you hallucinate!", 
        "Yes, well honey usually doesn't send you back in time, either, but here we are. | What you told me was indeed fascinating, but perhaps not for the reasons you'd want it to be.",
        "You? A beekeeper? You don't look anything like a beekeeper! | Besides, back in Ancient Egypt, beekeeping was a man's job. | Perhaps archaeology is a man's job, too. We're less hallucinatey. | @But--",
        "Get some sleep, darling, you've clearly had a very \"busy\" night. | If you still remember your daydreams in the morning, I'm sure the rest of the crew would love to have a laugh about them over breakfast. | ~end5"
    ].join(" | "),
    "archiBald2": "OUCH!!! | OUCH OUCH OUCH OUCH!! | What the devil was that?! | A bee sting?! How did a BEE get into this tent?! | At night time, even! Bees don't go out at night!! | ~end6",
    /* #endregion */
    /* #region Fun Facts */
    // Specific Place Fun Facts
    "factTaremu0": "Taremu got its Greek name (Leontopolis, the city of lions) due to its temples dedicated to the lion gods Bastet, Sekhmet, and Maahes.", 
    "factTaremu1": "During the twenty-third Dynasty, Taremu was a district capital of Lower Egypt.", 
    "factTaremu2": "A Jewish temple was built in Leontopolis by the priest Onias IV in the second century BC. This temple operated for three centuries, until it was eventually closed during after the Jewish War started.", 
    "factMemphis0": "Memphis was the capital of Egypt during the age of the Old Kingdom, but remained an important city throughout Egyptian history until Muslim rule began in the 7th century AD.",
    "factMemphis1": "Ptah, the god of architects and craftsmen, was honored in the Hut-ka-Ptah temple in Memphis. This temple's Greek name - Aigyptos - may be the orgin of the name \"Egypt.\"",
    "factMemphis2": "During the New Kingdom, Memphis was an education center for princes and other nobility.",
    "factShedet0": "The Greeks called Shedet \"Krokodilopolis\" due to the prominent cult of Sobek, the crocodile god.", 
    "factShedet1": "During the Roman occupation of Egypt, many mummy portraits were painted in Shedet. | These portraits were painted on boards attached to mummies, and depicted the faces of those who were mummified.", 
    "factShedet2": "Shedet is still a populated city today, now known as Faiyum. Many large bazaars, baths, and mosques can be found here.", 
    "factAbdju0": "Abdju, or Abydos as it was called by the Greeks, is one of Ancient Egypt's oldest cities.", 
    "factAbdju1": "The memorial temple of Menmaatre Seti I - a pharaoh of the 19th Dynasty - is located in Abdju. | In his temple is the famous Abydos King List, which lists 76 Ancient Egyptian kings in order of their reign.", 
    "factAbdju2": "The Temple of Seti I in Abdju is the source of a conspiracy theory about helicopter hieroglyphs. | Some of the markings on the wall resemble helicopters or spaceships, but the reality is far less exciting. | Carved stones were re-used - the written stones were filled with plaster and re-carved into - and over time some of this plaster faded away. | Because of this, two hieroglyphs appeared on top of each other, leading to unexpected shapes. | As cool as it is to imagine ancient aliens giving the Ancient Egyptians their technology, the reality is that sometimes ancient civilizations are smart and good at doing things. | It's very important to remember that brilliant people were coming up with great ideas all around the world since the beginning of humanity, and that calling any amazing innovations from the past \"alien technology\" dismisses the real ingenuity of our ancestors.", 
    "factWaset0": "Waset, now known as Thebes, was the capital of Ancient Egypt during the Middle Kingdom and New Kingdom.", 
    "factWaset1": "The Valley of the Gates of the Kings is a valley in western Waset where many pharaohs and nobles were buried. | Their tombs were carved into the valley walls for nearly 500 years. | Tutankhamun (King Tut)'s tomb was found here.", 
    "factWaset2": "In Thebes there was an annual festival called the Beautiful Feast of Opet that celebrated the cities three deities - Amun, Mut, and Khonsu. | Their statues were carried from their temple in Karnak to their temple in Luxor. | This festival celebrated rebirth, and was used to celebrate the pharaoh as well.", 
    "factYabu0": "Yabu is an island in the Nile, now known as Elephantine, possibly due to its shape resembling an elephant's tusk.", 
    "factYabu1": "While the Greeks called Shedet \"Krokodilopolis\" due to the worship of the crocodile god Sobek, and they called Taremu \"Leontopolis\" due to the worship of the lion goddesses, Elephantine did not get its name the same way. | In fact, the main god worshipped in Elephantine has the head of a ram.", 
    "factYabu2": "Temples dedicated to the pharaohs Thutmose III and Amenhotep III existed on the island of Yabu, but they were destroyed in the 1800s. | Muhammad Ali, a governor of Egypt, destroyed them while trying to conquer Sudan.", 
    "factNapata0": "Napata was a central city in the Nubian Kingdom. | The Nubians were one of the first civilizations in Africa, with a history going back to at least 2500 BC.", 
    "factNapata1": "While there were many wars fought between the Egyptians and Nubians in the past, nowadays the region of Nubia is split between Sudan and Egypt.", 
    "factNapata2": "Napata was destroyed in 23BC during the Governor of Roman Egypt's invasion on the Kingdom of Kush.", 
    // Misc Fun Facts
    "factMisc0": "Lettuce was first grown in Egypt as early as 2680 BC. It was the sacred plant of Min, a god of reproduction. Egyptians would carry lettuce at his festivals, as it was thought to give him reproductive energy.", 
    "factMisc1": "Honey bees perform 80% of all flower pollination in the world.", 
    "factMisc2": "Honey bee swarms look pretty intimidating, but usually bees in swarms aren't very aggressive at all. | If you see one, call a beekeeper to relocate it!", 
    "factMisc3": "In Egyptian mythology, it was said that bees grew from the tears of Ra, the sun god, when they landed on sand.", 
    "factMisc4": "Of the 100 crops that provide 90% of the world's food, over 70 are pollinated by bees. | Some crops pollinated by bees include cocoa, strawberries, and vanilla.", 
    "factMisc5": "The Ancient Egyptian empire lasted from 3150 BC to 30 BC. After that, the Romans took over and the reign of Roman Egypt began.", 
    "factMisc6": "Cleopatra was the last ruler of Egypt before Roman occupation began.", 
    "factMisc7": "Although their roles were often different, men and women mostly had equal rights in Ancient Egypt. | Both men and women could own property, receive inheritances, file for divorce, and take matters to court.", 
    "factMisc8": "Despite Ancient Egyptian hieroglyphs looking like symbols representing concepts, they actually form something more like an alphabet. | A word containing symbols resembling birds and water might have nothing to do with either of those things!", 
    "factMisc9": "Most Ancient Egyptians were farmers.", 
    "factMisc10": "Egypt is big.", 
    "factMisc11": "The Opening of the Mouth Ceremony involved opening a mummy's mouth so that it could speak and breathe. | It was believed that opening their mouth would allow their soul to eat and drink in the afterlife.", 
    "factMisc12": "Rick Astley has released over 100 songs in his over 30-year career. | What? No one said ALL the fun facts had to be about bees or Egypt.", 
    "factMisc13": "In Ancient Egypt, their country was known as \"Kemet,\" which meant \"Black Land.\"", 
    "factMisc14": "There were over 2,000 deities in Ancient Egyptian mythology.", 
    "factMisc15": "The Ancient Egyptians played many board games, like Senet, Mehen, and \"Dogs and Jackals.\"", 
    "factMisc16": "One of the first labor strikes in history was organized during Ramses III's reign. | After workers weren't paid for their work on a royal necropolis, they refused to leave nearby temples until their demands were heard.", 
    "factMisc17": "A common misconception is that slaves built the Egyptian pyramids, but the ancient workers were actually paid laborers.", 
    "factMisc18": "Ancient Egyptians kept many different kinds of pets. | Aside from the well known cats, they also kept hawks, dogs, and baboons.", 
    "factMisc19": "There are many different types of bees, including solitary bees like carpenter bees and leafcutter bees. | These bees don't live in colonies or make honey, but they still have an important role in pollinating flowers.", 
    /* #endregion */
    /* #region Pollination */
    "nobees": "I don't have any bees with me right now.",
    "nohives": "I don't have any empty beehives with me right now. I'll need to empty one of my full ones out, or trade for a new one.",
    "beelease": "I have released the bees on this @arg. I can come back later to collect them. The longer they're here, the more nectar they'll collect!",
    "beesTooSoon": "The bees are back in their hive, but they didn't have enough time to collect any nectar!",
    "beesCollected": "The bees are back in their hive, and they got some nectar, too!",
    /* #endregion */
    /* #region Cats */
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
    /* #endregion */
    /* #region Gods */
    "offering": "A feeling in my gut tells me to offer @arg to @arg2 altar. | ?offer", // arg = thing, arg2 = pronoun
    "offeringNotToday": "I can always offer some other time.",
    "offeringNotEnough": "I don't have enough to offer right now... I should come back later.",
    "offeringPleased": "@arg seems pleased with my offering.", 
    "bastet": "Bastet was a goddess originally celebrated as a lioness warrior of the sun, but eventually became the protector cat goddess. | Her parents were Ra the sun god and the goddess Isis, and with the craftsman god Ptah, she birthed Maahes the lion warrior.",
    "maahes": "Maahes was a lion-headed god of war and son of the god Ptah and either Bastet or Sekhmet, depending on the mythology. | It was said that as the sun god Ra went on his nightly voyages, Maahes would fight off Apep, the serpent god of chaos. | The duality of chaos against order was an important part of Ancient Egyptian beliefs; one could not exist without the other. | Chaos was called Isfet and order was called Ma'at. The dead needed to be purified of Isfet before they could be reborn in the afterlife.", 
    "sekhmet": "Sekhmet was a lioness goddess of healing. She was also the fiercest hunter in Ancient Egypt. | The sun god Ra sent her to punish mankind for failing to uphold order, but Sekhmet became overcome with bloodlust and took things too far. | Sekhmet refused to end her rampage, so the other gods spilled a mix of beer and pomegranate juice in Sekhmet's path. | Sekhmet, thinking it was blood, drank it up, and eventually passed out from the alcohol.", 
    "ptah": "Ptah was the guardian of Memphis, a creator god who created the universe by thinking it and giving it life with his words. | He is the god of craftsmen, carpentry, and builders. He is married to the lioness god Sekhmet, and with her he had his son, Nefertum, the a beautiful man made from a lotus flower.", 
    "sobek": "Sobek: the crocodile god of power and fertility. Like crocodiles, he was an aggressive deity. | At his temple in Shedet, priests kept and cared for a royal crocodile they dubbed the Petsuchos - the son of Sobek. | This Petsuchos was worshipped as a manifestation of Sobek, and when it died, it was mummified and a new son of Sobek was found.",
    "osiris": "Osiris was an important god in Ancient Egyptian mythology; a god of fertility and of the afterlife. | His brother Set killed him and cut him into pieces, and when his wife Isis found him, she wrapped up the pieces, hence his mummy wrap. | He then became the judge and ruler of the underworld, while is son Horus avenged him by fighting Set and becoming the new ruler of Egypt.",
    "isis": "Isis - the wife of the divine king Osiris, who helped the dead move on to the afterlife and was considered the divine mother of the Pharaoh. | Her magical powers exceeded those of all other gods, and she became one of the most widely worshipped dieties in the first millennium BC.",
    "amun": "Amun was the patron deity of Thebes, after replacing its former deity Montu - the falcon god of war. | In the 16th century BC he fused with the sun god Ra and became Amun-Ra. | As Amun-Ra he became the King of Gods and, with Osiris, became the most well known Egyptian god. | As a champion of the poor, he rose in prominence as Thebes became the capital of Egypt. | His Greek equivalent was Zeus, the Greek god of thunder and the king of gods on Mount Olympus.", 
    "mut": "The Ancient Egyptian word for mother was also the name of the mother goddess Mut. | Along with her husband Amun and her son Khonsu, they formed the triad of Thebes - or Waset as the city was known in Egyptian. | Prior to the rise of the New Kingdom, Amun's wives were the goddesses Amaunet and Wosret, but they were displaced by Mut. | The Pharaoh and priestesse would perform daily rituals to Mut, as she grew to be the most important goddess in Egypt.", 
    "khonsu": "Khonsu, son of Amun and Mut, was the god of the moon who watched over those who traveled at night. | In one of Ancient Egypt's creation myths, Khonsu was the great snake that fertilized the Cosmic Egg to create the world. | He was known as a great healer, a reputation that spread outside of Egypt.", 
    "khnum": "Khnum was the ram-headed god who was believed to be the source of the Nile River. | It was also believed that he created the bodies of human children out of clay at his pottery wheel, which he then inserted into mothers' wombs. | The \"Divine Potter\" had his cult centered on the island of Elephantine - or Yabu - which he shared with Anuket and Satis.",
    "anuket": "Anuket was the goddess of Lower Nubia and the cataracts of the Nile. | Cataracts are shallow parts of the Nile River with many small rocks and boulders sticking out of the water. | During the start of the flooding season, Egyptians would celebrate the Festival of Anuket. | During this festival, people would throw their gold and precious items into the Nile to thank Anuket for the water and the crops that resulted from the fresh soil.",
    "satis": "Satis was a protective deity of the southern Egyptian border and was associated with the Nile's annual flooding. | She killed the enemies of the Pharoah with her arrows, and granted wishes to lovers due to her role as a fertility goddess. | It was said that she purified the bodies of deceased pharoahs with jars of sacred water from Elephantine.",
    /* #endregion */
    /* #region Crops */
    "harvest": "@I harvested @arg.",
    "corn0": ["Corn in Ancient Egypt? That doesn't sound right. | !Corn, or maize, was first domesticated in Mexico over 6000 years ago.", 
            "!Some early English texts mentioned \"corn\" in Egypt, but back then, the word \"corn\" was just a word to describe any grain, like wheat.",
            "!Once Europeans travelled to the Americas and discovered maize, the word started referring just to that specific crop.",
            "But, it could be possible... some mummies have been found to have traces of tobacco on them, another plant that only grew in the New World.",
            "There have been some arguments that Ancient Egyptians travelled to the Americas before the Europeans did, but they've yet to gain mainstream acceptance.",
            "So right now, the claim that corn grew in Ancient Egypt doesn't seem to have much evidence to support it; this must be something else.",
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
    "whitelotus2": "The number 1,000 in Ancient Egyptian numerals was represented by the hieroglyph for the white lotus.", 
    "chrysanthemum0": "Flower collars were often made for mummies starting in the New Kingdom. Flowers like crysanthemums and acacias were used for these arrangements.", 
    "chamomile0": "During the 18th Dynasty, nobility wore large glazed ceramic collars, often styled into the shapes of flowers like chamomile and lotus flowers.",
    "lettuce0": "Ancient Egyptian lettuce bears its closest resemblance to modern day Romaine Lettuce.",
    "lettuce1": "Lettuce was offered to Min, the god of fertility. It was considered an aphrodisiac to help people reproduce.",  
    "melon0": "In Ancient Egypt, it was said that melons grew from the seeds of the chaos god Set, who spilled them while chasing Isis.", 
    "melon1": "Watermelons became popular in Ancient Egypt due to their water content. Melons can stay fresh for weeks or months if kept in a well shaded area.",
    /* #endregion */
    /* #region Travelling */
    "goToPlace": "It will take @arg to get to @arg2, giving your bees plenty of time to produce honey. | ?sail",
    "goToPlaceNo": "It will take @arg to get to @arg2, giving your bees plenty of time to produce honey, but the plants there will not be flowering when you arrive. | ?sail",
    /* #endregion */
    /* #region Beehives */
    "noIncense": "I don't have any incense. If I just reach into a beehive now, I'll get a lot of nasty stings! | But if I light some incense, the smoke will calm the bees enough for me to get the honeycombs! | I should find someone who will give me some incense in a trade.", 
    "noHoney": "The bees have not produced any honey yet. | Once bees have collected nectar from flowers by licking it up and storing it in a special stomach, they fly back to their hives and pass the nectar to another bee. | They will repeatedly pass the nectar from bee to bee until the partially digested nectar is ready to be stored in the honeycomb. After the nectar's chemical makeup has changed and it is stored in the honeycomb, bees will flap their wings like fans to help the water in the nectar evaporate. | After most of the water has evaporated, a bee will plug up the honeycomb with some liquid from their abdomen, which will harden into beeswax. | After that, the honeycomb can be opened to reveal the honey inside! | I should ride somewhere and give the bees some time to convert the nectar into honey.", 
    "noNectar": "The bees have not collected any nectar yet. | Bees help pollinate plants when they fly from flower to flower collecting nectar. As they're lapping up nectar, pollen from the flower sticks to them. | Flower pollen contains male gametes, which can fertilize other flowers when bees land on them. | Once a flower's ovule has been fertilized by a bee with pollen on it, seeds can be formed, so the plant can reproduce. | I should release some bees around some plants so they can collect some nectar.", 
    "smonk": "Bee-autiful! I collected enough honeycomb to get me @arg jars of honey and @arg2 beeswax!",
    /* #endregion */
    /* #region Taremu */
    "fishboy": "Taremu is the land of fish, but some foreigners call it the city of lions, because of our temples to the lion goddesses. | But why do you think the goddesses like this city in the first place? Because of all the fish we got here, ya dingdong! | The lions came to the fish, not the other way around, obviously!",
    "fruitboy1": "Fruit! Get your fruit here! We got pomegranates, we got melons, we got dates, figs, grapes, olives, plums! | I even have apples - those fruits the Hyksos brought with them! | What, you don't know the Hyksos? Back in the day, they invaded and started the Fifteenth Dynasty! | We're still not entirely sure where they came from, though. | Eventually Ahmose I, the first ruler of the Eighteenth Dynasty, drove off the last Hyksos pharoah and brought Egypt back under Egyptian control! | Being conquered must have sucked, but the Hyksos left a lot of great stuff behind, like new bronze-working techniques, horses, stronger bows and battle axes, and, of course, apples! | Don't ask why a random fruit merchant knows all this, I'm just trying to sell these apples, lady!",
    "breadgirl": "You know what goes great with fish? Bread. You know what goes great with anything, actually? Bread. | Wait, are you a beekeeper? I can tell from how you look nothing like a beekeeper. | I'm trying to bake some more honey bread, but I'm fresh out of honey. Do you think you could spare a few jars? | ?breadLady",
    "breadgirlGive": "Great! This much honey will last me quite a while! | Thank you, here's some wheat and a few loaves of bread!", 
    "breadgirlDone": "Emmer wheat is especially hard to process into flour, but you can't argue with the end result of fresh-baked bread! | I've heard that the nobles put things like dates and coriander seeds in their breads to give them extra flavor.", 
    "breadgirlB": "Hello again, beekeeper. Can you spare a few jars of honey? | ?breadLady", 
    "breadgirlNo": "Darn. I guess I'll have to find some honey elsewhere.", 
    "breadgirlLack": "Your generosity is appreciated, but you can't give me honey you don't have. | If you get four jars of honey, come back later and I'll gladly take them off your hands!",
    "fishshop": "There are a lot of cats here - we even have lions in the temple sometimes - so fishing is popular here. | People will buy fish for themselves, or to give to the cats as gifts or offerings. | We consider cats very important - they kill dangerous snakes and protect our Pharaohs. | Anyway, want some fish? Five gold for two! | ?fishshop",
    "fishshopb": "Want some fish? Two fish for five gold! | ?fishshop",
    "fishshopLack": "Sorry, looks like you don't have enough gold! | You're a beekeeper, right? I'm sure somebody in Egypt is willing to trade honey some from gold.",
    "fishshopNo": "No? Okay! Let me know if you change your mind!",
    "fishshopBuy": "Pleasure doing business with you! Enjoy your fish!",
    "vase": "Oops. | ~vase",
    /* #endregion */
    /* #region Memphis */
    "mummy": "Hey. | @Are you a mummy!? | I mean, I'm mummified, but I'm not dead or anything. | I was just testing out the mummification process to see how it feels. | This linen kind of gives me a bit of a wedgie. | @Great.",
    "student1": "I don't like writing - words are too long! Like the blessing \"ankh, wedja, seneb\" (life, prosperity, health) is three whole words! | We need to find some way to shorten things... maybe make that \"anwese.\" | Just one hieroglyph for all three! I think I'm on to something here. Maybe some day things like that will catch on.",
    "student2": "Noblemen and royalty like me need to go to fancy schools so we can be \"educated\" and \"worldly.\" What a load of junk! | I don't need to know things to be pharoah! The gods will just tell me what to do! | I hope some day the standards are lowered so that ANYONE can be a leader! Even people who hate reading and thinking like me!",
    "teacher": "This educational centre was set up for nobility and royal princes. | To be successful, the younger generation needs to know things like mathematics, history, ethics, medicine, and music! | Some boys are sent off to schools like this as young as eight years old! | Girls, however, get their educations at home, learning things like sewing and cooking from their mothers. | However, we're running low on parchment. If you can bring me 10 pieces, I can reward you with some very secret knowledge. | ?teacher",
    "teacherb": "Do you happen to have ten pieces of parchment to spare? | ?teacher", 
    "teacherNo": "Oh well. Some should be delivered soon, but it would be nice to have some more now.", 
    "teacherLack": "Thank you, but it seems that you don't have ten parchment to give.", 
    "teacherGive": "Wonderful, thank you! Now, as promised, here is some secret knowledge! | Are you ready? | ... | ...... | I sleep with my pants on because I'm afraid that Set - the god of chaos - will slap my butt while I'm asleep.", 
    "teacherc": "Thank you again for the parchment. It's important my students have all the resources they need to succeed.", 
    "amenken1": "Ah! Are you a beekeeper? Perhaps you can help me! | My master's boat has sprung a leak, and I need some beeswax to seal it up! | Can you provide me with 10 beeswax? I can give you 3 gold for it! | ?amenken1",
    "amenkenNo": "I guess I'll have to find some beeswax elsewhere.",
    "amenkenLack": "Oh, it seems you don't have enough beeswax. That's okay, I'll check with the other beekeepers.",
    "amenkenGive": "Great! Thank you! This will help out a lot! | !In Ancient Egypt, beeswax was used for many things, like making candles, medicine, and sealants (things that keep water out)!",
    "amenken1b": "Can you provide me with 10 beeswax? I can give you 3 gold for it! | ?amenken1",
    "amenken2": "Thanks for that beeswax! It will surely come in handy!",
    /* #endregion */
    /* #region Shedet */
    "sobekpriest": "Praise Sobek, the crocodile god who protects us from the dangers of the Nile! | You look like the Sobek-loving sort, given that you are a human, and all humans should love Sobek! | @Sobek's got quite the fanbase here, huh? | Of course, Shedet is home to Sobek's temple, and also a bunch of crocodiles! | You should obviously give something to Sobek himself at the altar over there, but if you're an EXTRA good person, you might be inclined to feed some of the local crocodiles, too! | Just toss those bad boys some fish, and maybe something good will happen if you do!",
    "crocodil": "aaAAaaAaaa | ~croc",
    "crocodil2": "@It looks like it wants some food. | ?croc",
    "crocodilB": "aaAAAaaaAaa | ?croc",
    "crocodilNo": "aaa! aaaAA! :(",
    "crocodilLack": "@I don't have that much fish. I should get some more fish and come back later.",
    "crocodilWon": "aaemmmmmmmmm | ~croc2",
    "incenseshop": "Oy oy! A beekeeper, you are! It's obvious from the way you walk. | @The way I walk? | Yes, you walk nothing like a beekeeper! But you must need some incense, yes? | Incense produces smoke, which can be used to calm bees down, allowing beekeepers to retrieve their honey without getting stung! I'll give you 5 sticks of incense for one piece of gold. What do you say? | ?incenseShop",
    "incenseshopNo": "Your loss! If you change your mind, come back later!", 
    "incenseshopb": "?incenseShop", 
    "incenseshopLack": "Hey hey! You don't have any gold! If you want free incense, become a god! Otherwise, pay up!", 
    "incenseshopBuy": "Pleasure doing business with you, ma'am! Come again whenever you need more incense!", 
    "obelisk": "This obelisk - a stone pillar - was set up by Senusret I during the 12th Dynasty to celebrate his 30th year as Pharaoh. | To this day, it still stands as the oldest standing obelisk in Egypt.", 
    /* #endregion */
    /* #region Abdju */
    "tombKhasekhem": "Khasekhemwy was the last pharoah of Egypt's Second Dynasty in the early 2600's BC. | Not much is known about him, but his tomb was excavated in 1901, revealing several chambers, a burial chamber made with limestone blocks, and an elaborate golden scepter. | He built a mudbrick fort known as Shunet El Zebib, which is actively being preserved and researched to this day.",
    "tombPeribsen": "Peribsen was a pharaoh of the Second Dynasty, some time in the 2700's BC. | Unlike other pharaohs, his patron deity was Set - a god of chaos who killed his brother Osiris. Usually pharaohs chose Horus - Osiris's son who avenged his father's death - as their patron deity. | In his tomb, archaeologists discovered a Mehen game board. | The game Mehen - named after a snake deity - was a game played on a board shaped like a coiled snake.",
    "tombQaa": "Qa'a reigned for 33 years at the end of the 30th century BC as the last pharaoh of the First Dynasty of Ancient Egypt. | It is believed that after he died, a war began between royal houses over who would take over the throne.",
    "tombSemerkhet": "Semerkhet was a pharoah of the First Dynasty. It was said by the historian and priest Manetho that some calamity occurred during his reign. | Historians have found mention of a \"Destruction of Egypt\" mentioned in the Palermo Stone, which documented his reign.",
    "tombKa": "Before the First Dynasty of Ancient Egypt, there was the Predynastic Period, which spanned from around 6000 BC to 3000 BC. | After the unification of Upper and Lower Egypt, the First Dynasty began. | One of the pharaohs of the Predynastic Period was a ruler whose name is not agreed upon yet. | Some read his name as \"Ka,\" and others read it as \"Sekhen.\" | Not much is known about his reign, but along with Narmer and Scorpion II, he is one of the more heavily documented Predynastic pharaohs.",
    "goldboy": "Hey hey, if you're going to make an offering to the goddess Isis, you better have some gold ready! | Isis protects the royal throne, and you know the pharaohs love their shiny gold! | Hey hey, you seem like you might have a lot of honey on you. I can tell from how you don't look like a beekeeper! | There's nothing sweeter than honey, except the woman I want to marry, so I need some honey to get that honey, if you know what I mean. | @I really don't. | Hey hey, honey isn't just for sweetening foods, lady! | Honey is used to stop infections, pay taxes, give tribute to the gods, embalm mummies, and, of course, it's used in marriage proposals! | I wrote up a marriage contract: \"I take thee to wife... and promise to deliver to thee yearly twelve jars of honey.\" | Pretty sweet deal, huh? Heh, good one, me! | But I think I bit off more than I could chew with that, so I can't propse to her until I actually HAVE some honey! | So, whattaya say? Honey for Gold? Twelve jars for twelve gold! | ?honeyGold",
    "goldboyB": "Hey hey, honey for gold. Deal of a lifetime. Twelve honey jars for twelve gold. Do it for love! | ?honeyGold",
    "goldboyNo": "Hey hey, that really stings. Buzz off if you're going to be like that!",
    "goldboyLack": "Hey hey, I'm loving the enthusiasm. The world needs more helpful people like you. | But it looks like you're just as lacking in honey as I am. | If you get 12 jars of honey, come back and talk to me!",
    "goldboyBuy": "Hey hey, you're a real hero, you know that? | Now I've got enough honey to offer my sweetie for @arg! | I want this marriage to last much longer than that, though, so if you get more honey, you know where to find me!",
    "goldboyBuy5": "Hey hey, you've given me five years worth of honey now! | I'm not set for life yet, but I'm definitely covered for the honeymoon stage of my marriage! | However, with that marriage contract, I guess it'll ALWAYS be a honeymoon stage... | Either way, I'll gladly accept any more honey you have, but for now I want to thank you again for your help! | Here's a few jugs of milk as Bonus Thanks! You know, milk and honey and all that. | Use it wisely! By drinking it, probably.",
    /* #endregion */
    /* #region Waset */
    "beerLady": "Hello! Want some beer? | @No thank you, it's too early in the day to be drinking. | What are you talking about? Beer is part of a balanced meal! It's very nutritious! | Some people even pay their workers in beer! And doctors recommend it, for your heart! | So whattaya say, one jug of beer for, hmm, one jug of date honey! | @Date honey? | Yeah, the syrup that comes from date fruits! Harvest some of the fruit from that tree over there to get some dates. | Once you have those, you'll have to find somewhere that can turn dates into date honey! | Not to spoil the fun, but I hear down south in Napata they've got some equipment for that. | I'd go myself, but, y'know, I'm running a beer stand here. | So, one beer for one date honey. | ?beerBuy",
    "beerLadyb": "Whattaya say? Get me a jug of date honey from the equipment down in Napata and I'll give you one jug of beer. | ?beerBuy",
    "beerLadyBuy": "Pleasure doing business with you!",
    "beerLadyNo": "No? Well, I'll be here if you change your mind!",
    "beerLadyLack": "You are lacking in date honey, ma'am. Please come back later when you have some. | Remember, I want date honey, not just dates, and not honey made from date nectar. The name's confusing, I know.",
    "farmboy": "Welcome to Waset, the capital of Egypt, as decreed by the former pharaoh Ahmose I! | Our current pharaoh Amenhotep III has been working hard to make this city great, even funding a vast new temple to Amun! | This city is also a training hub for scribes and archivists for the royal archives, since our leaders do so much good that someone needs to write it down! | I hope you enjoy your stay here!",
    "moneyman": "I love this great city, there are so many trading opportunities here! Would you like 4 gold? I'll give you it for just 5 gold! | @Uh, no thanks. | Your loss!",
    "hiveworks": "Ah, a fellow beekeeper! You don't look it, but I can tell! Us beekeepers know! | Anyway, I can craft you some more beehives if you need them, but I'll need some supplies first. | Bring me 3 clay slabs and I'll get you a beehive, deal? | ?beehive",
    "beehiveBuy": "Excellent! Enjoy your new beehive! | You can occasionally find some bees on flowering plants, so scoop 'em up when you see them!",
    "beehiveb": "Hello! If you have three clay slabs I can make you a beehive! | ?beehive",
    "beehiveLack": "Sorry, but I need clay to make you a beehive. | Beehives are long hollow cylinders made with reeds and branches and mud, but clay beehives are so much prettier!",
    "beehiveNo": "Alright, well if you change your mind, just bring me some clay! | If you don't have any clay, you can probably find some in Yabu; there's a construction site there near a clay deposit!",
    "theGoodBoy": "Hello! It's you again, the weird bee lady! | @Ah, you're the boy who found me by the river! Thank you again for your help! | Of course! It was the least I could do! Are you going to stay here long? | @I'm not sure... I don't exactly know how to get back home. | I'm sure the Pharaoh can help you! Give him some more of that honey and he'll probably take you home himself! | @Thanks for the tip.",
    "guardingPharaoh": "Halt! The pharaoh is not seeing visitors right now. | @But I've got some honey for him. I'm the beekeeper you-- | You? A beekeeper? You look nothing like a beekeeper, don't make me laugh! | If you wish to seek an audience with the pharaoh, you must prove that you are worthy. | @How can I do that? | I'll be listening to the gods for an answer. It might be wise to get on the good side of some of them if you want to see the pharaoh! | ~altarCheck", 
    "guardingPharaoh2": "If you wish to see the pharaoh, you must have the gods on your side. | @How do I get them to be on my side? | There are altars to the gods all over Egypt. Offer the right gifts to them and the gods will be pleased. | ~altarCheck",
    "guardingPharaoh3": "You may speak to Amenhotep III, but I still don't believe that you're a beekeeper.",
    "guardingPharaohYes": "Ah, you've earned the favor of many gods, I can sense it! | Very well, you may see the pharaoh.",
    "guardingPharaohNo": "You have not yet earned the favor of enough gods. Keep going to altars and offering gifts to them. | Only then may you speak to the pharaoh.",
    /* #endregion */
    /* #region Yabu */
    "nilometer": "Ah, a nilometer! These measure the water level of the Nile River. | Ancient Egyptians followed the three seasons - Akhet, Peret, and Shemu. | Akhet was the flooding season, where the Nile River would rise due to the annual monsoon in the Ethiopian Highlands. | Following that was Peret, the planting season, when farmers would plant their crops in the fertile land along the Nile. | Finally, Shemu was the harvesting season, when all the crops planted during Peret would be fully grown. | Nilometers were used to measure how much flooding occurred during Akhet, as the government would raise and lower taxes depending on the quality of the flood.",
    "milky": "Have milk? | @What? | Sorry, I was trying out a new marketing pitch. I'm selling milk, is what I meant. | Three bottles of milk for two bottles of honey. It's a steal, probably. | ?milky",
    "milkyb": "You got two honey jars? I got three milk jars. That's business, babe. Whattaya say? | ?milky",
    "milkyBuy": "Thanks much! Enjoy the milk!",
    "milkyLack": "Nice jugs! That's what I'd say if you actually had two jugs of honey, which you don't. | Come back when you have the honey and I'll give you some milk.",
    "milkyNo": "No milk? Your loss. It's good for you, probably. Depending on who you ask. And depending on who paid them.",
    "worker": "I'm in charge of building a temple to Amenhotep III, our pharaoh. | Temples are made of stone, and there's a quarry not far from here, so this is a good place to build one. | There's also a clay deposit in the water here, which people can use to make little statues for offerings.",
    "clay": "Looks like a nice amount of clay is building up here by the shore. | ~clayGrab",
    "gotClay": "I grabbed 5 pieces of clay.",
    "noClay": "I think I've grabbed enough for now.",
    "drunkworker": "Hey, I'm pretty hungry. And thirsty. At the same time. | You know what can fix that hunger thirst, or - as I call it - hurst? Or maybe thunger... hmm. | Well, either way, the answer was \"beer.\" Our Egyptian beer is thick and full of nutrients! | I've got a bunch of scented oils I don't need, so if you bring me some beer, I'll trade you for some oil. | ?oilbeer",
    "drunkworkerb": "Got any beer? I'll trade you scented oil for some. | ?oilbeer",
    "drunkworkerBuy": "Thanks, pal. | GLUG GLUG GLUG GLUG | That hit the spot. Nutritious AND alcoholic!",
    "drunkworkerLack": "Sorry, but I don't think trading zero beer for zero oil would be very beneficial to either of us. | Yeah, that's right, I understand the concept of zero. All of us Egyptians do. | A lot of cultures don't understand zero yet, but give em a few more years and they'll figure it out.",
    "drunkworkerNo": "Alright. Well, I ain't going anywhere, so if you change your mind, let me know.",
    /* #endregion */
    /* #region Napata */
    "merymose": "Greetings! I am Merymose, the Viceroy of Kush, serving under our pharaoh Amenhotep III! Welcome to Napata! | @What is Kush? | The Kingdom of Kush was a Nubian kingdom that conquered much of Egypt before the 18th Dynasty. | However, after Ahmose I reclaimed Egypt for the Egyptians and founded the 18th Dynasty, we conquered them right back! | Now this kingdom is a colony of Egypt that I'm in charge of, and I report directly to the pharaoh himself! | This city, Napata, was founded by Thutmose III around a hundred years ago, and is now the center of Kush! | I hope you enjoy your time here!", 
    "napataman": "Hello, welcome to Napata. You're free to use any of our equipment here. | We have an oven that can make bread from grains, and a juicer that can turn fruits into juice. | The spreader can turn flax and papyrus into linen and parchment, and the oil infuser can make scented oils with flowers. | I hope they're helpful to you!",
    "napatawoman": "Hello! You wouldn't by any chance happen to have any lettuce, would you? | @Lettuce? | It's, ahem, for my husband. It's said that lettuce is good for your, uh, stamina. | The god Min is said to eat lots of lettuce to give him energy. | @Isn't Min the god with the huge-- | The huge flail, yes, to emphasize his and the Pharaoh's authority. I want my husband to be more assertive like him. | So, do you have any lettuce? Ten heads would be great. | ?hornyWife",
    "napatawomanb": "So, do you have ten heads of lettuce to spare? | ?hornyWife",
    "napatawomanNo": "Well, if you change your mind, let me know.",
    "napatawomanLack": "Oh, it looks like you don't have enough lettuce right now. If you get some, come back as soon as you can!",
    "napatawomanGive": "Oh thank you! This will certainly help with my husband's stamina! So he can, uh, work harder. At his work job. | Here, take some gold as thanks! It's not much, but I need to show my appreciation somehow!",
    "napatawoman2": "Hello~! So good to see you~! | Why am I in such a good mood, you ask? Oh, no reason~!",
    "napatachild": "Woah, are you a beekeeper? You sure don't look like one, that's how I knew! | Bees are really important to the environment! | Sometimes when I'm out walking around, I look at flowers and see the bees flying around on them! | I don't understand it all yet, but it seems like those flowers really need bees to keep growing! | It sure would be unfortunate if bad things were to happen to bees in the future! | !It is indeed unfortunate. You should do what you can to help save the bees! | !You can donate to organizations dedicated to addressing bee population declines and climate change, or even start growing bee-friendly flowers in your yard to attract bees! | !Ask your parents if you can start your own flower garden, or talk to your teacher about having a local beekeeper come into class to show and tell! | !Maybe they'll even give the class some free honey!",
    "makerNeedMore": "I'll need at least @arg to make this.",
    "makerSuccess": "I just turned @arg into @arg2!",
    "makerWater": "I scooped up two jugs of water from the infuser's reservoir.",
    "melongirl": "We don't get many melons down here, but melons are good. | They last a long time in the shade and they're full of refreshing water. | Bring me as many melons as you can, you won't regret it. | ?melon",
    "melongirlb": "Got any melons? | ?melon", 
    "melongirlc": "Thanks for the melons.", 
    "melongirlNo": "You're a coward.", 
    "melongirlLack": "Sadly, you don't have any melons. We share a common problem. | You should fix your lack-of-melon problem so you can come back and fix my lack-of-melon problem.", 
    "melongirlBuy": "You're a blessing from the gods themselves. But I certainly won't turn down more melons.", 
    "melongirlWon": "I don't think I can hold any more melons. You truly are a hero among heroes. | As thanks for your kindness, you can have all of my gold. | @This is 1000 gold pieces! | I really like melons, okay?", 
    /* #endregion */
};

const choices = {
    "?sail": [
        { choice: "Set Sail", action: boat.SetSailForAdventure },
        { choice: "Nevermind", action: textHandler.EndDialog }
    ],
    "?offer": [
        { 
            choice: "Make Offering",
            action: function() {
                const targ = land.target;
                if(targ === undefined || targ.want === undefined) { land.inDialogue = false; return; } // this shouldn't happen lol
                if(targ.want === "honey") {
                    if(player.HasHoney(targ.honeyType, 0, 5)) {
                        player.RemoveHoney(targ.honeyType, 0, targ.amount);
                        textHandler.MoveToNewText("offeringPleased", targ.name);
                        player.ClearChievo(land.currentLocation, targ.id);
                        targ.text = "offeringPleased";
                        targ.hasValue = false;
                        if(targ.sxAlt !== undefined) { targ.sx = targ.sxAlt; }
                        if(targ.syAlt !== undefined) { targ.sy = targ.syAlt; }
                    } else {
                        textHandler.MoveToNewText("offeringNotEnough");
                    }
                } else {
                    if(player.HasItem(targ.want, targ.amount)) {
                        player.RemoveItem(targ.want, targ.amount);
                        textHandler.MoveToNewText("offeringPleased", targ.name);
                        player.ClearChievo(land.currentLocation, targ.id);
                        targ.text = "offeringPleased";
                        targ.hasValue = false;
                        if(targ.sxAlt !== undefined) { targ.sx = targ.sxAlt; }
                        if(targ.syAlt !== undefined) { targ.sy = targ.syAlt; }
                    } else {
                        textHandler.MoveToNewText("offeringNotEnough");
                    }
                }
            }
        }, {
            choice: "No Offering",
            action: function() { textHandler.MoveToNewText("offeringNotToday"); }
        }
    ],
    "?breadLady": [
        {
            choice: "Give 4 jars of honey.",
            action: function() {
                if(player.HasHoney("any", 0, 4)) {
                    player.RemoveHoney("any", 0, 4);
                    player.AddItem("wheat", 10);
                    player.AddItem("bread", 4);
                    textHandler.MoveToNewText("breadgirlGive");
                    land.target.text = "breadgirlDone";
                    land.target.hasValue = false;
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
    "?croc": [
        {
            choice: "Give 5 fish.",
            action: function() {
                if(player.HasItem("fish", 5)) {
                    player.RemoveItem("fish", 5);
                    textHandler.MoveToNewText("crocodilWon");
                    player.ClearChievo("Shedet", "crocodil");
                } else {
                    land.target.text = "crocodilB";
                    textHandler.MoveToNewText("crocodilLack");
                }
            }
        }, {
            choice: "Do not give fish.",
            action: function() {
                land.target.text = "crocodilB";
                textHandler.MoveToNewText("crocodilNo");
            }
        }
    ],
    "?amenken1": [
        {
            choice: "Trade 10 beeswax.",
            action: function() {
                if(player.HasItem("beeswax", 10)) {
                    player.RemoveItem("beeswax", 10);
                    player.AddItem("gold", 3);
                    textHandler.MoveToNewText("amenkenGive");
                    land.target.text = "amenken2";
                    player.ClearChievo("Memphis", "biff");
                    land.target.hasValue = false;
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
    ],
    "?incenseShop": [
        {
            choice: "Buy 5 incense for 1 gold.",
            action: function() {
                if(player.HasItem("gold", 1)) {
                    player.RemoveItem("gold", 1);
                    player.AddItem("incense", 5);
                    textHandler.MoveToNewText("incenseshopBuy");
                    land.target.text = "incenseshopb";
                } else {
                    land.target.text = "incenseshopb";
                    textHandler.MoveToNewText("incenseshopLack");
                }
            }
        },
        {
            choice: "Don't buy incense.",
            action: function() {
                land.target.text = "incenseshopb";
                textHandler.MoveToNewText("incenseshopNo");
            }
        }
    ],
    "?fishshop": [
        {
            choice: "Trade 2 fish for 5 gold.",
            action: function() {
                if(player.HasItem("gold", 5)) {
                    player.RemoveItem("gold", 5);
                    player.AddItem("fish", 2);
                    textHandler.MoveToNewText("fishshopBuy");
                    land.target.text = "fishshopb";
                } else {
                    land.target.text = "fishshopb";
                    textHandler.MoveToNewText("fishshopLack");
                }
            }
        },
        {
            choice: "Don't buy incense.",
            action: function() {
                land.target.text = "fishshopb";
                textHandler.MoveToNewText("fishshopNo");
            }
        }
    ],
    "?oilbeer": [
        {
            choice: "Trade a beer for a scented oil.",
            action: function() {
                if(player.HasItem("beer", 1)) {
                    player.RemoveItem("beer", 1);
                    player.AddItem("scented oil", 1);
                    textHandler.MoveToNewText("drunkworkerBuy");
                    land.target.text = "drunkworkerb";
                } else {
                    land.target.text = "drunkworkerb";
                    textHandler.MoveToNewText("drunkworkerLack");
                }
            }
        },
        {
            choice: "Don't trade.",
            action: function() {
                land.target.text = "drunkworkerb";
                textHandler.MoveToNewText("drunkworkerNo");
            }
        }
    ],
    "?beerBuy": [
        {
            choice: "Trade date honey for beer.",
            action: function() {
                if(player.HasItem("date honey", 1)) {
                    player.RemoveItem("date honey", 1);
                    player.AddItem("beer", 1);
                    textHandler.MoveToNewText("beerLadyBuy");
                    land.target.text = "beerLadyb";
                } else {
                    land.target.text = "beerLadyb";
                    textHandler.MoveToNewText("beerLadyLack");
                }
            }
        },
        {
            choice: "Don't trade.",
            action: function() {
                land.target.text = "beerLadyb";
                textHandler.MoveToNewText("beerLadyNo");
            }
        }
    ],
    "?milky": [
        {
            choice: "Trade 2 honey for 3 milk.",
            action: function() {
                if(player.HasHoney("any", 0, 2)) {
                    player.RemoveHoney("any", 0, 2);
                    player.AddItem("milk", 3);
                    textHandler.MoveToNewText("milkyBuy");
                    land.target.text = "milkyb";
                } else {
                    land.target.text = "milkyb";
                    textHandler.MoveToNewText("milkyLack");
                }
            }
        },
        {
            choice: "Don't buy milk.",
            action: function() {
                land.target.text = "milkyb";
                textHandler.MoveToNewText("milkyNo");
            }
        }
    ],
    "?beehive": [
        {
            choice: "Give him 3 clay for a beehive.",
            action: function() {
                if(player.HasItem("clay", 3)) {
                    player.RemoveItem("clay", 3);
                    player.AddItem("empty beehive", 1);
                    textHandler.MoveToNewText("beehiveBuy");
                    land.target.text = "beehiveb";
                } else {
                    land.target.text = "beehiveb";
                    textHandler.MoveToNewText("beehiveLack");
                }
            }
        },
        {
            choice: "Don't trade.",
            action: function() {
                land.target.text = "beehiveb";
                textHandler.MoveToNewText("beehiveNo");
            }
        }
    ],
    "?honeyGold": [
        {
            choice: "Trade 12 honey for 12 gold.",
            action: function() {
                if(player.HasHoney("any", 0, 12)) {
                    player.RemoveHoney("any", 0, 12);
                    player.AddItem("gold", 12);
                    player.easterEggs.honeyBoy += 1;
                    if(player.easterEggs.honeyBoy === 5) {
                        player.ClearChievo("Abdju", "slappy2");
                        player.AddItem("milk", 5);
                        textHandler.MoveToNewText("goldboyBuy5");
                    } else {
                        textHandler.MoveToNewText("goldboyBuy", player.easterEggs.honeyBoy + (player.easterEggs.honeyBoy === 1 ? " year" : " years"));
                    }
                    land.target.text = "goldboyB";
                } else {
                    land.target.text = "goldboyB";
                    textHandler.MoveToNewText("goldboyLack");
                }
            }
        },
        {
            choice: "Don't trade.",
            action: function() {
                land.target.text = "goldboyB";
                textHandler.MoveToNewText("goldboyNo");
            }
        }
    ],
    "?hornyWife": [
        {
            choice: "Give 10 lettuce.",
            action: function() {
                if(player.HasItem("lettuce", 10)) {
                    player.RemoveItem("lettuce", 10);
                    player.AddItem("gold", 5);
                    textHandler.MoveToNewText("napatawomanGive");
                    land.target.text = "napatawoman2";
                    player.ClearChievo("Napata", "napatawoman");
                    land.target.hasValue = false;
                } else {
                    land.target.text = "napatawomanb";
                    textHandler.MoveToNewText("napatawomanLack");
                }
            }
        },
        {
            choice: "Do not give lettuce.",
            action: function() {
                land.target.text = "napatawomanb";
                textHandler.MoveToNewText("napatawomanNo");
            }
        }
    ],
    "?melon": [
        {
            choice: "Give her a melon.",
            action: function() {
                if(player.HasItem("melon", 1)) {
                    player.RemoveItem("melon", 1);
                    player.easterEggs.melonCount += 1;
                    land.target.sx = player.easterEggs.melonCount % 4;
                    land.target.sy = Math.floor(player.easterEggs.melonCount / 4);
                    if(player.easterEggs.melonCount === 7) {
                        player.ClearChievo("Napata", "melongirl");
                        player.AddItem("gold", 1000);
                        textHandler.MoveToNewText("melongirlWon");
                        land.target.text = "melongirlc";
                        land.target.hasValue = false;
                    } else {
                        textHandler.MoveToNewText("melongirlBuy");
                        land.target.text = "melongirlb";
                    }
                } else {
                    land.target.text = "melongirlb";
                    textHandler.MoveToNewText("melongirlLack");
                }
            }
        },
        {
            choice: "Don't give her a melon.",
            action: function() {
                land.target.text = "melongirlb";
                textHandler.MoveToNewText("melongirlNo");
            }
        }
    ],
    "?teacher": [
        {
            choice: "Give 10 parchment.",
            action: function() {
                if(player.HasItem("parchment", 10)) {
                    player.RemoveItem("parchment", 10);
                    textHandler.MoveToNewText("teacherGive");
                    land.target.text = "teacherc";
                    player.ClearChievo("Memphis", "teacher");
                    land.target.hasValue = false;
                } else {
                    land.target.text = "teacherb";
                    textHandler.MoveToNewText("teacherLack");
                }
            }
        },
        {
            choice: "Do not give parchment.",
            action: function() {
                land.target.text = "teacherb";
                textHandler.MoveToNewText("teacherNo");
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
                    textHandler.ShowText("Cori", "intro4");
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
                    game.SwitchTo(land, "CutsceneWaset", false);
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
        textHandler.ShowText("Cori", "intro5");
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
        textHandler.ShowText("Cori", "intro6");
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
        land.entities.push({ type: "bg", sprite: "boatboat", dir: 0, x: 50, y: 75 });
        land.entities.push(GetCopy("introThought1", 4444));
        land.entities.push(GetCopy("introThought2", 2222));
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
    },
    "~croc": function() {
        land.inDialogue = false;
        const croc = land.entities.filter(e => e.id === "crocodil")[0];
        land.cutscene = {
            active: true, state: 0, iter: 0, keepPlayer: true, 
            Process: function() {
                if(this.state === 0) {
                    if(++this.iter === 5) {
                        croc.sy = 1;
                        this.iter = 0;
                        this.state = 1;
                    }
                } else if(this.state === 1) {
                    if(++this.iter === 5) {
                        croc.sy = 2;
                        this.iter = 0;
                        this.state = 2;
                    }
                } else if(this.state === 2) {
                    if(++this.iter === 5) {
                        this.active = false;
                        textHandler.ShowText("Crocodile", "crocodil2");
                    }
                }
            }
        };
    },
    "~croc2": function() {
        land.inDialogue = false;
        const croc = land.entities.filter(e => e.id === "crocodil")[0];
        land.cutscene = {
            active: true, state: 0, iter: 0, keepPlayer: true, 
            Process: function() {
                if(this.state === 0) {
                    if(++this.iter === 5) {
                        croc.sy = 1;
                        this.iter = 0;
                        this.state = 1;
                    }
                } else if(this.state === 1) {
                    if(++this.iter === 5) {
                        croc.sy = 0;
                        this.iter = 0;
                        this.state = 2;
                    }
                } else if(this.state === 2) {
                    if(++this.iter === 5) {
                        croc.anim = animHelpers.GetAnim("croc");
                        croc.anim.ForceMove();
                        croc.y = 0;
                        this.state = 3;
                        this.iter = 0;
                    }
                } else if(this.state === 3) {
                    croc.x += 2;
                    croc.y += (this.iter % 15 === 0) ? 1 : 0;
                    if(++this.iter > 200) {
                        this.active = false;
                        const meIndex = land.entities.findIndex(e => e.id === "crocodil");
                        land.entities.splice(meIndex, 1);
                        const meIndex2 = land.entities.findIndex(e => e.id === "crocodilI");
                        land.entities.splice(meIndex2, 1);
                        maxX["Shedet"] = 5000;
                        land.maxX = 5000;
                    }
                }
            }
        };
    },
    "~clayGrab": function() {
        if(land.target.claysGrabbed++ > 5) {
            textHandler.MoveToNewText("noClay");
        } else {
            player.AddItem("clay", 5);
            textHandler.MoveToNewText("gotClay");
        }
    },
    "~altarCheck": function() {
        land.target.text = "guardingPharaoh2";
        const altarsCleared = player.clearedChievos.filter(s=> s.indexOf("Altar") >= 0).length;
        if(altarsCleared >= 5) {
            textHandler.MoveToNewText("guardingPharaohYes");
            player.ClearChievo("Waset", "guard");
            maxX["Waset"] = 6140;
            land.maxX = 6140;
            land.target.type = "bg";
        } else {
            textHandler.MoveToNewText("guardingPharaohNo");
        }
    },
    "~end1": function() {
        land.inDialogue = false;
        land.target.type = "bg";
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(e.id === "khonsuAltar") {
                e.type = "endgame";
            } else {
                e.type = "bg"; 
            }
        }
    },
    "~end2" : function() {
        land.inDialogue = false;
        land.cutscene = {
            active: true, state: 0, iter: 0, keepPlayer: true, 
            Process: function() {
                gfx.ClearLayer("menuB");
                const ctx = gfx.ctx["menuB"];
                if(this.state === 0) {
                    const hex = this.iter.toString("16").toUpperCase();
                    if(hex.length === 1) {
                        ctx.fillStyle = "#FFFFFF0" + hex;
                    } else {
                        ctx.fillStyle = "#FFFFFF" + hex;
                    }
                    ctx.fillRect(0, 0, 1024, 896);
                    this.iter += 5;
                    if(this.iter >= 256) {
                        this.state = 1;
                        this.iter = 0;
                    }
                } else if(this.state === 1) {
                    ctx.fillStyle = "#FFFFFFFF";
                    ctx.fillRect(0, 0, 1024, 896);
                    if(++this.iter >= 60) {
                        this.state = 2;
                        this.iter = 0;
                    }                    
                } else if(this.state === 2) {
                    this.active = false;
                    game.SwitchTo(land, "ModernCoffin2");
                }
            }
        }
    },
    "~end3": function() {
        game.SwitchTo(land, "ModernTent");
    },
    "~end4": function() {
        textHandler.ShowText("Archibald", "archiBald1");
    },
    "~end5": function() {
        land.inDialogue = false;
        const britFuck = land.entities.filter(e => e.id === "archibald")[0];
        land.cutscene = {
            active: true, state: 0, iter: 0, 
            Process: function() {
                if(this.state === 0) {
                    if(++this.iter >= 20) {
                        this.state = 1;
                        this.iter = 0;
                    }
                } else if(this.state === 1) {
                    britFuck.sy = 1;
                    if(++this.iter >= 2) {
                        this.state = 2;
                        this.iter = 0;
                    }         
                } else if(this.state === 2) {
                    britFuck.sx = 1;
                    if(++this.iter >= 2) {
                        this.state = 3;
                        this.iter = 0;
                    }
                } else if(this.state === 3) {
                    this.active = false;
                    textHandler.MoveToNewText("archiBald2");
                }
            }
        }
    },
    "~end6": function() {
        land.inDialogue = false;
        const sitFriend = land.entities.filter(e => e.id === "sitProtag")[0];
        land.cutscene = {
            active: true, state: 0, iter: 0, 
            Process: function() {
                if(this.state === 0) {
                    if(++this.iter >= 30) {
                        this.state = 1;
                        this.iter = 0;
                    }
                    if(this.iter === 25) { game.endSound.play(); }
                } else if(this.state === 1) {
                    sitFriend.sx = 2;
                    if(++this.iter >= 40) {
                        this.state = 2;
                        this.iter = 0;
                    }         
                } else if(this.state === 2) {
                    sitFriend.sy = 1;
                    if(++this.iter >= 150) {
                        this.state = 3;
                        this.iter = 0;
                        this.active = false;
                        game.SwitchTo(credits);
                    }
                }
            }
        }
    },
    "~vase": function() {
        land.entities.filter(e => e.id === "vase")[0].sx = 1;
        land.inDialogue = false;
    }
};

const honeyDisplayNames = {
    "bluelotus": "blue lotus",
    "whitelotus": "white lotus"
};
const displayNames = {
    "honey": "comb of honey",
    "bluelotus": "blue lotus",
    "whitelotus": "white lotus",
    "bread": "loaf of bread",
    "pomegranate juice": "jug of pomegranate juice",
    "date honey": "jug of date honey",
    "linen": "sheet of linen",
    "parchment": "sheet of parchment",
    "water": "jug of water",
    "wheat": "bushel of wheat",
    "barley": "bushel of barley",
    "flax": "bushel of flax",
    "papyrus": "reed of papyrus",
    "lettuce": "head of lettuce",
    "gold": "piece of gold",
    "incense": "stick of incense",
    "beer": "jug of beer",
    "milk": "jug of milk",
    "clay": "slab of clay",
    "beeswax": "chunk of beeswax"
};
const pluralDisplayNames = {
    "honey": "combs of honey",
    "bluelotus": "blue lotuses",
    "whitelotus": "white lotuses",
    "bread": "loaves of bread",
    "pomegranate juice": "jugs of pomegranate juice",
    "date honey": "jugs of date honey",
    "linen": "sheets of linen",
    "parchment": "sheets of parchment",
    "water": "jugs of water",
    "wheat": "bushels of wheat",
    "barley": "bushels of barley",
    "flax": "bushels of flax",
    "papyrus": "reeds of papyrus",
    "lettuce": "heads of lettuce",
    "gold": "pieces of gold",
    "incense": "sticks of incense",
    "fish": "fishes",
    "beer": "jugs of beer",
    "milk": "jugs of milk",
    "clay": "slabs of clay",
    "beeswax": "chunks of beeswax"
};
function SetInventoryString() {
    texts["inventory"] = "I have ";
    const things = [];
    for(const key in player.inventory) {
        const count = player.inventory[key];
        if(count > 1) {
            things.push(count + " " + (pluralDisplayNames[key] || (key + "s")));
        } else if(count === 1) {
            things.push("1 " + (displayNames[key] || key));
        }
    }
    things.sort((a, b) => (parseInt(b.split(" ")[0]) - parseInt(a.split(" ")[0])));
    if(player.honeys.length > 0) { things.push("and " + player.honeys.length + " honey"); }
    if(things.length === 0) {
        texts["inventory"] += "nothing."
    } else {
        texts["inventory"] += things.join(", ") + ".";
        if(player.honeys.length > 0) {
            texts["inventory"] += " | Types of Honey: ";
            const honeys = {};
            for(let i = 0; i < player.honeys.length; i++) {
                const h = player.honeys[i];
                if(honeys[h.type] === undefined) {
                    honeys[h.type] = 1;
                } else {
                    honeys[h.type] += 1;
                }
            }
            const honeyStrs = [];
            for(const key in honeys) {
                honeyStrs.push((honeyDisplayNames[key] || key) + " (" + honeys[key] + ")");
            }
            texts["inventory"] += honeyStrs.join(", ") + ".";
        }
    }
}