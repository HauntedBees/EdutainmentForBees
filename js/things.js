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
    /* --- PEOPLE --- */
    "biff": { type: "person", sprite: "pers2tiny", dir: 1, name: "Amenken", text: "amenken1" }
};