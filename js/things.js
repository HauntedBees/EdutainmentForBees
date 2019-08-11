/*
Seasons:
Akhet: JUN-SEP: no crops, flooding
Peret: OCT-FEB: planting crops
Shemu: MAR-MAY: harvesting crops
*/
const things = {
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
    "biff": { type: "person", sprite: "pers", dir: 0, name: "Amenken", text: "amenken1" }
};