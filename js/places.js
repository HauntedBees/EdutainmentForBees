const GetPlaceEntities = function(place, modern) {
    const placeObj = places[place];
    const entities = (modern || place.indexOf("Cutscene") === 0) ? [] : [
        { type: "bg", sprite: "boatboat", dir: 0, x: -80, y: 35 },
        { type: "boat", sprite: "", x: 400 }
    ];
    for(let i = 0; i < placeObj.length; i++) {
        const obj = placeObj[i];
        const entity = GetCopy(obj.id, obj.x);
        entities.push(entity);
    }
    return entities;
};
const autoPlays = {
    "ModernCoffin": function() { textHandler.ShowText("Protagonny", "intro0"); },
    "CutsceneThebes": function() { cutscenes["~start3"](); }
};
const maxX = {
    "ModernCoffin": 2290,
    "CutsceneThebes": 5800
};
const places = {
    "ModernCoffin": [
        { x: 1500, id: "prompt1" },
        { x: 2400, id: "prompt2"},
        { x: 2800, id: "coffin"},
        { x: 2670, id: "beejar"}
    ],
    "CutsceneThebes": [
        { x: 350, id: "beejar"},
        { x: 250, id: "helpser" },
        { x: 6500, id: "amenhotep" },
        { x: 6400, id: "amenhotepTalk" }
    ],
    "Tanis": [],  
    "Leontopolis": [],  
    "Memphis": [],  
    "Crocodilopolis": [],  
    "Herakleopolis": [],  
    "Hermopolis": [],  
    "Abydos": [],  
    "Thebes": [
        { x: 1100, id: "date" },
        { x: 1400, id: "biff" }
    ],
    "Kom Ombo": [],  
    "Elephantine": [],  
    "Abu Simbel": [],  
    "Napata": [],  
};