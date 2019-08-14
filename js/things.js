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
    "corn": { type: "observable" }, // not pollinated
    "wheat": { type: "observable" }, // not pollinated
    "barley": { type: "observable" }, // not pollinated
    "papyrus": { type: "observable" }, // not pollinated
    "fig": { type: "observable" }, // fig wasps
    "garlic": { type: "observable" }, // BAD FOR BEES!!!
    "pomegranate": { type: "beeable" },
    "melon": { type: "beeable" },
    "flax": { type: "beeable" },
    "date": { type: "beeable", sprite: "date", dir: 0, name: "Date Palm" },
    "bluelotus": { type: "beeable" }, // Nymphaea coerulea
    "whitelotus": { type: "beeable" }, // Nymphaea lotus
    "chrysanthemum": { type: "beeable" },
    "chamomile": { type: "beeable" },
    "cornflower": { type: "beeable" }, // Centaurea depressa, imported
    "redpoppy": { type: "beeable" }, // Papaver rhoeas, imported
    "acacia": { type: "beeable" },
    "onion": { type: "beeable" },
    /* --- PEOPLE --- */
    "biff": { type: "person", sprite: "pers2tiny", dir: 1, name: "Amenken", text: "amenken1" }
};