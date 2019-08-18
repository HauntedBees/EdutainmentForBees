const things = {
    /* --- OPENING --- */
    "prompt1": { type: "auto", speaker: "Protagonny", text: "intro1", sprite: "" },
    "prompt2": { type: "auto", speaker: "Protagonny", text: "intro2", sprite: "" },
    "coffin": { type: "observable", speaker: "Protagonny", sprite: "coffin", dir: 0, name: "Sarcophagus", text: "intro3" },
    "beejar": { type: "bg", sprite: "beejar", dir: 0 },
    "helpser": { type: "bg", sprite: "pers2tiny", anim: "helpser", dir: 1 },
    "amenhotep": { type: "bg", sprite: "amenhotep", dir: 0 },
    "amenhotepTalk": { type: "person", sprite: "", dir: 0, name: "Amenhotep III", text: "intro8" },
    "tutServant": { type: "person", sprite: "pers2tiny", anim: "helpser", dir: 1, name: "Setka", text: "intro9" },

    /* --- PLANTS --- */
    "corn": { type: "observable", sprite: "plants", sx: 2, rawsx: 0, name: "Corn", textRange: 1 },
    "wheat": { type: "observable", sprite: "plants", sx: 3, rawsx: 1, name: "Wheat", textRange: 2 },
    "barley": { type: "observable", sprite: "plants", sx: 4, rawsx: 0, name: "Barley", textRange: 1 },
    "papyrus": { type: "observable", sprite: "plants", sx: 5, rawsx: 1, name: "Papyrus", textRange: 3 },

    "flax": { type: "beeable", sprite: "plants", sx: 1, rawsx: 0, sy: 1, name: "Flax", textRange: 2, beeY: -120 },
    "date": { type: "beeable", sprite: "plantsBig", rawsx: 0, sx: 1, name: "Date Palm", textRange: 2, beeY: -280, beeRadius: 75 },
    "pomegranate": { type: "beeable", sprite: "plantsBig", rawsx: 2, sx: 3, name: "Pomegranate Shrub", textRange: 2, beeY: -200, beeRadius: 50 },
    "bluelotus": { type: "beeable", sprite: "plantsSmall", rawsx: 0, sx: 1, name: "Blue Lotus", textRange: 2, foreground: true },
    "whitelotus": { type: "beeable", sprite: "plantsSmall", rawsx: 0, sx: 2, name: "White Lotus", textRange: 3, foreground: true },
    
    "fig": { type: "observable" }, // fig wasps
    "garlic": { type: "observable" }, // BAD FOR BEES!!!
    "lettuce": { type: "observable" }, // to fuck good
    "melon": { type: "beeable" },
    "chrysanthemum": { type: "beeable" },
    "chamomile": { type: "beeable" },
    "cornflower": { type: "beeable" }, // Centaurea depressa, imported
    "redpoppy": { type: "beeable" }, // Papaver rhoeas, imported
    "acacia": { type: "beeable" },
    "onion": { type: "beeable" },

    /* --- MISC --- */
    "puddle": { type: "bg", sprite: "puddle", foreground: true, y: 15 },
    "templeL": { type: "bg", sprite: "templeStairL", background: true },
    "templeM": { type: "bg", sprite: "templeWall", background: true, isTemple: true },
    "templeR": { type: "bg", sprite: "templeStairR", background: true },

    /* --- CATS --- */
    "cat1": { type: "person", sprite: "cat1", anim: "cat", dir: 1, name: "Cat", text: "cat" },
    "cat2": { type: "bg", sprite: "cat3", anim: "cat", dir: 1, movement: "cat1" },
    "cat3": { type: "bg", sprite: "cat2", anim: "cat", dir: 1, movement: "cat2" },
    "cat4": { type: "person", sprite: "cat4", anim: "cat", dir: 1, movement: "cat3", name: "Cat", text: "cat" },
    "cat5": { type: "bg", sprite: "cat5", anim: "cat", dir: 1, movement: "cat4" },

    /* --- PEOPLE --- */
    "biff": { type: "person", sprite: "pers2tiny", dir: 1, name: "Amenken", text: "amenken1" },
    "boff": { type: "person", sprite: "farmboy", anim: "regular", dir: 0, name: "Parennefer", text: "amenken1" },
    // Taremu
    "fishboy": { type: "person", sprite: "peopleMisc", sx: 0, noDir: true, name: "Nenwef", text: "fishboy" },
    "shop1": { type: "person", sprite: "shopkeeps", sx: 0, dir: 0, name: "Maia", text: "fishshop" },
    "shop2": { type: "person", sprite: "shopkeeps", sx: 2, dir: 0, name: "Tener", text: "breadgirl", textAlt: "breadgirlDone" },
    "slappy1": { type: "person", sprite: "slappy", anim: "slappy", dir: 0, name: "Ahmose", text: "fruitboy1" },
    
    /* --- SHOP STUFF --- */
    "boxFish": { type: "bg", sprite: "justabox", sy: 1, background: true },
    "boxBread": { type: "bg", sprite: "justabox", sx: 1, background: true },
    "boxFruit": { type: "bg", sprite: "justabox", sx: 2, background: true },

    /* --- GODS --- */
    "bastet": { type: "bg", sprite: "peopleMisc", sx: 1, y: -400 },
    "bastetAltar": { type: "observable", sprite: "altar", name: "Bastet", text: "bastet", textAlt: "offeringPleased",
                        isGod: true, pronoun: "her", want: "beeswax", amount: 30, sxAlt: 1 },
    "sekhmet": { type: "bg", sprite: "peopleMisc", sx: 2, y: -400 },
    "sekhmetAltar": { type: "observable", sprite: "altar", name: "Sekhmet", text: "sekhmet", textAlt: "offeringPleased",
                        isGod: true, pronoun: "her", want: "beer", amount: 5, wantDisplay: "jugs of beer", sxAlt: 2 },
    "maahes": { type: "bg", sprite: "peopleMisc", sx: 3, y: -400 },
    "maahesAltar": { type: "observable", sprite: "altar", name: "Maahes", text: "maahes", textAlt: "offeringPleased",
                        isGod: true, pronoun: "his", want: "honey", honeyType: "whitelotus", amount: 10, wantDisplay: "combs of white lotus honey", sxAlt: 3 }
};

const movements = {
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