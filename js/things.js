const things = {
    /* #region OPENING and ENDING */
    "prompt1": { type: "auto", speaker: "Cori", text: "intro1", sprite: "" },
    "prompt2": { type: "auto", speaker: "Cori", text: "intro2", sprite: "" },
    "coffin": { type: "observable", speaker: "Cori", sprite: "coffin", dir: 0, name: "Sarcophagus", text: "intro3" },
    "beejar": { type: "bg", sprite: "beejar", dir: 0 },
    "helpser": { type: "bg", sprite: "pers2tiny", anim: "helpser", dir: 1 },
    "introThought1": { type: "auto", speaker: "Cori", text: "introThought1", sprite: "" },
    "introThought2": { type: "auto", speaker: "Cori", text: "introThought2", sprite: "" },
    "amenhotep": { type: "bg", sprite: "amenhotep", dir: 0 },
    "amenhotepTalk": { type: "person", sprite: "", dir: 0, name: "Amenhotep III", text: "intro8" },
    "tutServant": { type: "person", sprite: "pers2", anim: "helpser", dir: 1, name: "Setka", text: "intro9" },
    "bluelotusbg": { type: "bg", sprite: "plantsSmall", rawsx: 0, sx: 1, foreground: true },
    "whitelotusbg": { type: "bg", sprite: "plantsSmall", rawsx: 0, sx: 2, foreground: true },
    "datebg": { type: "bg", sprite: "plantsBig", rawsx: 0, sx: 1 },
    "altarbg": { type: "bg", sprite: "altar" },
    "lettucebg": { type: "bg", sprite: "plantsSmall", rawsx: 0, rawsy: 0, sx: 0, sy: 1 },
    "hivemanbg": { type: "bg", sprite: "peopleMisc", sy: 4, dir: 0 },
    "shop3bg": { type: "bg", sprite: "shopkeeps", dir: 0 },
    "farmboybg": { type: "bg", sprite: "farmboy", anim: "regular", dir: 1, movement: "hume1" },
    "shop4bg": { type: "bg", sprite: "shopkeeps", sx: 0, sy: 2, dir: 0 },
    "coffinEnd": { type: "bg", sprite: "coffin", dir: 0 },
    "returnToSender": { type: "auto", speaker: "Cori", text: "returnToSender", sprite: "" },
    "archibald": { type: "bg", sprite: "sitBuddies", dir: 0 },
    "sitProtag": { type: "bg", sprite: "sitBuddies", sx: 1, dir: 0 },
    /* #endregion */
    /* #region PLANTS */
    "wheat": { type: "observable", sprite: "plants", sx: 3, rawsx: 1, name: "Wheat", textRange: 2, harvestable: true },
    "barley": { type: "observable", sprite: "plants", sx: 4, rawsx: 0, name: "Barley", textRange: 1, harvestable: true },
    "papyrus": { type: "observable", sprite: "plants", sx: 5, rawsx: 1, name: "Papyrus", textRange: 3, harvestable: true },
    "lettuce": { type: "observable", sprite: "plantsSmall", rawsx: 0, rawsy: 0, sx: 0, sy: 1, name: "Lettuce", textRange: 2, harvestable: true },
    "corn": { type: "observable", sprite: "plants", sx: 2, rawsx: 0, name: "Corn", textRange: 1, harvestable: true },

    "flax": { type: "beeable", sprite: "plants", sx: 1, rawsx: 0, sy: 1, name: "Flax", textRange: 2, beeY: -120, harvestable: true },
    "date": { type: "beeable", sprite: "plantsBig", rawsx: 0, sx: 1, name: "Date Palm", textRange: 2, beeY: -280, beeRadius: 75, harvestable: true },
    "pomegranate": { type: "beeable", sprite: "plantsBig", rawsx: 2, sx: 3, name: "Pomegranate Shrub", textRange: 2, beeY: -200, beeRadius: 50, harvestable: true },
    "bluelotus": { type: "beeable", sprite: "plantsSmall", rawsx: 0, sx: 1, name: "Blue Lotus", textRange: 2, foreground: true, harvestable: true },
    "whitelotus": { type: "beeable", sprite: "plantsSmall", rawsx: 0, sx: 2, name: "White Lotus", textRange: 3, foreground: true, harvestable: true },
    "chamomile": { type: "beeable", sprite: "plantsSmall", rawsx: 3, sx: 5, name: "Chamomile", textRange: 1, beeY: -60, harvestable: true },
    "chrysanthemum": { type: "beeable", sprite: "plantsSmall", rawsx: 3, sx: 4, name: "Crown Daisy", textRange: 1, beeY: -55, foreground: true, harvestable: true },
    "melon": { type: "beeable", sprite: "plantsSmall", rawsx: 1, rawsy: 1, sx: 2, sy: 1, name: "Melon", textRange: 2, foreground: true, harvestable: true },
    /* #endregion */
    /* #region MISC */
    "puddle": { type: "bg", sprite: "puddle", foreground: true, y: 15 },
    "templeL": { type: "bg", sprite: "templeStairL", background: true },
    "templeM": { type: "bg", sprite: "templeWall", background: true, isTemple: true },
    "templeBR": { type: "bg", sprite: "templeIncomplete", background: true, isTemple: true },
    "templeR": { type: "bg", sprite: "templeStairR", background: true },
    /* #endregion */
    /* #region CATS */
    "cat1": { type: "person", sprite: "cat1", anim: "cat", dir: 1, name: "Cat", text: "cat" },
    "cat2": { type: "bg", sprite: "cat3", anim: "cat", dir: 1, movement: "cat1" },
    "cat3": { type: "bg", sprite: "cat2", anim: "cat", dir: 1, movement: "cat2" },
    "cat4": { type: "person", sprite: "cat4", anim: "cat", dir: 1, movement: "cat3", name: "Cat", text: "cat" },
    "cat5": { type: "bg", sprite: "cat5", anim: "cat", dir: 1, movement: "cat4" },
    "cat6": { type: "bg", sprite: "cat6", anim: "cat", dir: 1, movement: "cat1" },
    /* #endregion */
    /* #region REGIONAL */
    // Taremu
    "fishboy": { type: "person", sprite: "peopleMisc", sx: 0, noDir: true, name: "Nenwef", text: "fishboy" },
    "shop1": { type: "person", sprite: "shopkeeps", sx: 2, sy: 1, dir: 0, name: "Dedu", text: "fishshop", hasValue: true },
    "shop2": { type: "person", sprite: "shopkeeps", sx: 2, dir: 0, name: "Tener", text: "breadgirl", textAlt: "breadgirlDone", hasValue: true },
    "slappy1": { type: "person", sprite: "slappy", anim: "slappy", dir: 0, name: "Ahmose", text: "fruitboy1" },
    "vase": { type: "bg", sprite: "vase" },
    "vaseBreak": { type: "auto", sprite: "", speaker: "Cori", text: "vase" },
    // Memphis
    "student1": { type: "person", sprite: "peopleMisc", sx: 1, sy: 1, noDir: true, name: "Kawab", text: "student1" },
    "student2": { type: "person", sprite: "peopleMisc", sx: 2, sy: 1, noDir: true, name: "Neferhotep", text: "student2" },
    "mummy": { type: "person", sprite: "mummy", dir: 0, name: "Mummy", text: "mummy", anim: "regular", movement: "hume1" },
    "teacher": { type: "person", sprite: "peopleMisc", sx: 0, sy: 2, dir: 0, name: "Bebi", text: "teacher", textAlt: "teacherc", hasValue: true },
    "biff": { type: "person", sprite: "pers2tiny", anim: "regular", dir: 1, name: "Amenken", text: "amenken1", textAlt: "amenken2", movement: "hume1", hasValue: true },
    // Shedet
    "sobekpriest": { type: "person", sprite: "peopleMisc", sx: 2, sy: 2, dir: 0, name: "Huy", text: "sobekpriest" },
    "crocodil": { type: "bg", sprite: "crocodil", dir: 0 },
    "crocodilI": { type: "person", sprite: "", name: "Crocodile", text: "crocodil", hasValue: true },
    "incenseVendor": { type: "person", sprite: "shopkeeps", sy: 1, dir: 0, name: "Senisonbe", text: "incenseshop", hasValue: true },
    "obelisk": { type: "observable", sprite: "obelisk", name: "Obelisk", text: "obelisk" }, 
    // Abdju
    "tomb": { type: "bg", sprite: "tomb", dir: 0 },
    "tombKhasekhem": { type: "observable", sprite: "tombGlyph", sx: 0, name: "Khasekhemwy's Tomb", text: "tombKhasekhem", y: -290 },
    "tombPeribsen": { type: "observable", sprite: "tombGlyph", sx: 1, name: "Peribsen's Tomb", text: "tombPeribsen", y: -290 },
    "tombQaa": { type: "observable", sprite: "tombGlyph", sx: 2, name: "Qa'a's Tomb", text: "tombQaa", y: -290 },
    "tombSemerkhet": { type: "observable", sprite: "tombGlyph", sx: 3, name: "Semerkhet's Tomb", text: "tombSemerkhet", y: -290 },
    "tombKa": { type: "observable", sprite: "tombGlyph", sx: 4, name: "Ka's Tomb", text: "tombKa", y: -290 },
    "slappy2": { type: "person", sprite: "slappy2", anim: "slappy", dir: 0, name: "Ipy", text: "goldboy", hasValue: true },
    // Waset
    "hiveman": { type: "person", sprite: "peopleMisc", sy: 4, dir: 0, name: "Haremhab", text: "hiveworks", hasValue: true },
    "shop3": { type: "person", sprite: "shopkeeps", dir: 0, name: "Maia", text: "beerLady", hasValue: true },
    "farmboy": { type: "person", sprite: "farmboy", anim: "regular", dir: 1, name: "Kheruef", text: "farmboy", movement: "hume1" },
    "shop4": { type: "person", sprite: "shopkeeps", sx: 0, sy: 2, dir: 0, name: "Parennefer", text: "moneyman" },
    "theGoodBoy": { type: "person", sprite: "pers2tiny", anim: "helpser", dir: 1, name: "Intef", movement: "cat3", text: "theGoodBoy" },
    "guard": { type: "person", sprite: "pers2", anim: "helpser", dir: 0, name: "Setka", text: "guardingPharaoh", textAlt: "guardingPharaoh3" },
    "amenhotepEnd": { type: "person", sprite: "", dir: 0, name: "Amenhotep III", text: "amenhotepEnd" },
    // Yabu
    "nilometer": { type: "observable", sprite: "nilometer", name: "Nilometer", text: "nilometer" },
    "cow": { type: "bg", sprite: "cow" },
    "shop5": { type: "person", sprite: "shopkeeps", sx: 2, sy: 2, dir: 0, name: "Hentmereb", text: "milky", hasValue: true },
    "worker": { type: "person", sprite: "worker", noDir: true, name: "Kenamon", text: "worker" },
    "worker2": { type: "person", sprite: "rummer", dir: 0, name: "Anen", text: "drunkworker", hasValue: true },
    "clay": { type: "observable", sprite: "", name: "Clay Deposit", text: "clay", claysGrabbed: 0, hasValue: true }, 
    // Napata
    "napataguard": { type: "person", sprite: "pers2", anim: "regular", dir: 0, name: "Merymose", text: "merymose" },
    "napataman": { type: "person", sprite: "peopleMisc", sx: 0, sy: 3, dir: 0, name: "Har", text: "napataman" },
    "napatawoman": { type: "person", sprite: "peopleMisc", sx: 2, sy: 3, dir: 0, name: "Tabiry", text: "napatawoman", textAlt: "napatawoman2", hasValue: true },
    "napatachild": { type: "person", sprite: "littlelad", anim: "regular", dir: 1, name: "Khaliut", text: "napatachild", movement: "hume1" },
    "melongirl": { type: "person", sprite: "melongirl", noDir: 0, name: "Kasmut", text: "melongirl", textAlt: "melongirlc", hasValue: true },
    "oven": { type: "maker", sprite: "altar", name: "Oven", sx: 0, sy: 1, text: "oven", hasValue: true, 
        primary: "Make Wheat Bread", secondary: "Make Barley Bread" },
    "juicer": { type: "maker", sprite: "altar", name: "Juicer", sx: 1, sy: 1, text: "juicer", hasValue: true, 
        primary: "Make Pomegranate Juice", secondary: "Make Date Honey" },
    "spreader": { type: "maker", sprite: "justabox", sx: 2, sy: 2, name: "Spreader", text: "spreader", hasValue: true, 
        primary: "Make Linen", secondary: "Make Parchment" },
    "infuser": { type: "maker", sprite: "altar", name: "Infuser", sx: 2, sy: 1, text: "infuser", hasValue: true, 
        primary: "Make Scented Oil", secondary: "Collect Water" },
    /* #endregion */
    /* #region SHOP STUFF */
    "boxBees": { type: "bg", sprite: "justabox", background: true, mustBee: true, beeY: -20, beeRadius: 50 },
    "boxFish": { type: "bg", sprite: "justabox", sy: 1, background: true },
    "boxBread": { type: "bg", sprite: "justabox", sx: 1, background: true },
    "boxFruit": { type: "bg", sprite: "justabox", sx: 2, background: true },
    "boxIncense": { type: "bg", sprite: "justabox", sx: 1, sy: 1, background: true },
    "boxGold": { type: "bg", sprite: "justabox", sx: 2, sy: 1, background: true },
    "boxBeer": { type: "bg", sprite: "justabox", sx: 0, sy: 2, background: true },
    "boxMilk": { type: "bg", sprite: "justabox", sx: 1, sy: 2, background: true },
    "boxLinen": { type: "bg", sprite: "justabox", sx: 2, sy: 2, background: true },
    /* #endregion */
    /* #region GODS */
    "bastet": { type: "bg", sprite: "peopleMisc", sx: 1, y: -300 },
    "bastetAltar": { type: "observable", sprite: "altar", name: "Bastet", text: "bastet", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "her", want: "beeswax", amount: 30, sxAlt: 1 },
    "sekhmet": { type: "bg", sprite: "peopleMisc", sx: 2, y: -300 },
    "sekhmetAltar": { type: "observable", sprite: "altar", name: "Sekhmet", text: "sekhmet", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "her", want: "pomegranate juice", amount: 5, wantDisplay: "jugs of pomegranate juice", sxAlt: 2 },
    "maahes": { type: "bg", sprite: "peopleMisc", sx: 3, y: -300 },
    "maahesAltar": { type: "observable", sprite: "altar", name: "Maahes", text: "maahes", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "honey", honeyType: "whitelotus", amount: 10, wantDisplay: "combs of white lotus honey", sxAlt: 3 },
    "ptah": { type: "bg", sprite: "peopleMisc", sy: 1, y: -300 },
    "ptahAltar": { type: "observable", sprite: "altar", name: "Ptah", text: "ptah", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "honey", honeyType: "bluelotus", amount: 30, wantDisplay: "combs of blue lotus honey", sxAlt: 3 },
    "sobek": { type: "bg", sprite: "peopleMiscBig", y: -200 },
    "sobekAltar": { type: "observable", sprite: "altar", name: "Sobek", text: "sobek", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "milk", amount: 10, wantDisplay: "jugs of milk", sxAlt: 2 },
    "osiris": { type: "bg", sprite: "peopleMiscBig", sx: 2, y: -200 },
    "osirisAltar": { type: "observable", sprite: "altar", name: "Osiris", text: "osiris", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "linen", amount: 10, wantDisplay: "sheets of linen", sxAlt: 4 },
    "isis": { type: "bg", sprite: "peopleMiscBig", sx: 1, y: -200 },
    "isisAltar": { type: "observable", sprite: "altar", name: "Isis", text: "isis", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "her", want: "gold", amount: 30, sxAlt: 5 },
    "amun": { type: "bg", sprite: "peopleMiscBig", sx: 3, y: -200 },
    "amunAltar": { type: "observable", sprite: "altar", name: "Amun-Ra", text: "amun", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "scented oil", amount: 10, wantDisplay: "jars of scented oil", sxAlt: 2 },
    "mut": { type: "bg", sprite: "peopleMiscBig", sy: 1, y: -200 },
    "mutAltar": { type: "observable", sprite: "altar", name: "Mut", text: "mut", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "her", want: "bread", amount: 10, wantDisplay: "loaves of bread", sxAlt: 1 },
    "khonsu": { type: "bg", sprite: "peopleMiscBig", sx: 1, sy: 1, y: -200 },
    "khonsuAltar": { type: "observable", sprite: "altar", name: "Khonsu", text: "khonsu", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "honey", honeyType: "any", wantDisplay: "combs of honey", amount: 20, sxAlt: 3 },
    "khnum": { type: "bg", sprite: "peopleMiscBig", sx: 2, sy: 1, y: -200 },
    "khnumAltar": { type: "observable", sprite: "altar", name: "Khnum", text: "khnum", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "his", want: "clay", amount: 5, wantDisplay: "slabs of clay", sxAlt: 1 },
    "anuket": { type: "bg", sprite: "peopleMiscBig", sx: 3, sy: 1, y: -200 },
    "anuketAltar": { type: "observable", sprite: "altar", name: "Anuket", text: "anuket", textAlt: "offeringPleased", hasValue: true,
                        isGod: true, pronoun: "her", want: "gold", amount: 10, sxAlt: 5 },
    "satis": { type: "bg", sprite: "peopleMiscBig", sx: 0, sy: 2, y: -200 },
    "satisAltar": { type: "observable", sprite: "altar", name: "Satis", text: "satis", textAlt: "offeringPleased", hasValue: true, 
                        isGod: true, pronoun: "her", want: "water", wantDisplay: "jugs of water", amount: 10, sxAlt: 2 }
    /* #endregion */
};

const movements = {
    "hume1": function(me) { commonMovements.cat(me, 15, 30, 50, 0); },
    "cat1": function(me) { commonMovements.cat(me, 7, 20, 50, 0); },
    "cat2": function(me) { commonMovements.cat(me, 6, 45, 30, 2); },
    "cat3": function(me) { commonMovements.cat(me, 7, 30, 65, 0); },
    "cat4": function(me) { commonMovements.cat(me, 8, 100, 10, 2); },
};
const commonMovements = {
    "cat": function(me, speed, pausetime, walktime, initialState) {
        if(me.moveData === undefined) { me.moveData = { state: initialState, idx: 0 }; }
        const mD = me.moveData;
        if(mD.state === 0) {
            if(++mD.idx > pausetime) { me.dir = 0; me.anim.ForceMove(); mD.state++; mD.idx = 0; }
        } else if(mD.state === 1) {
            me.x -= speed;
            me.dir = 0;
            if(++mD.idx > walktime) { mD.state++; me.anim.ForceStop(); mD.idx = 0; }
        } else if(mD.state === 2) {
            if(++mD.idx > pausetime) { me.dir = 1; me.anim.ForceMove(); mD.state++; mD.idx = 0; }
        } else if(mD.state === 3) {
            me.x += speed;
            me.dir = 1;
            if(++mD.idx > walktime) { mD.state = 0; me.anim.ForceStop(); mD.idx = 0; }
        }
    }
};