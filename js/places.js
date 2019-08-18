const GetPlaceEntities = function(place, modern) {
    const placeObj = places[place];
    const entities = (modern || place.indexOf("Cutscene") === 0) ? [] : [
        { type: "bg", sprite: "boatboat", dir: 0, x: 80, y: 35 },
        { type: "boat", sprite: "", x: 400 }
    ];
    for(let i = 0; i < placeObj.length; i++) {
        const obj = placeObj[i];
        const entity = GetCopy(obj.id, obj.x);
        if(player.clearedChievos.indexOf(obj.id) >= 0) {
            entity.text = entity.textAlt;
            if(entity.sxAlt !== undefined) { entity.sx = entity.sxAlt; }
            if(entity.syAlt !== undefined) { entity.sy = entity.syAlt; }
        }
        if(obj.x <= 600) {
            alert("object " + obj.id + " needs an X value higher than 600!");
        }
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
    "CutsceneThebes": 5800,
    "Taremu": 5565,
    "Memphis": 5180,
};
function AddTemple(arr, x, w) {
    arr.push({ x: x, id: "templeL" });
    x += 177;
    for(let i = 0; i < w; i++) {
        arr.push({ x: x, id: "templeM" });
        x += 288;
    }
    x -= 111;
    arr.push({ x: x, id: "templeR" });
}
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
    "Taremu": function() {
        const res = [
            { x: 2150, id: "cat1" },
            { x: 2950, id: "cat2" },
            { x: 3636, id: "cat3" },
            { x: 4696, id: "cat4" },
            { x: 5555, id: "cat5" },
            { x: 2450, id: "puddle" },
            { x: 2300, id: "fishboy" },
            { x: 3200, id: "bastet" }, { x: 3200, id: "bastetAltar" },
            { x: 3600, id: "maahes" }, { x: 3600, id: "maahesAltar" },
            { x: 4000, id: "sekhmet" }, { x: 4000, id: "sekhmetAltar" },
            { x: 4554, id: "shop1" },
            { x: 4444, id: "boxFish" },
            { x: 5000, id: "slappy1" },
            { x: 5090, id: "boxFruit" },
            { x: 5500, id: "boxBread" },
            { x: 5600, id: "shop2" }
        ];
        AddTemple(res, 3000, 4);
        for(let x = 0; x < 6; x++) { res.push({ x: 700 + x * (65 + x), id: "whitelotus" }); }
        for(let x = 0; x < 9; x++) { res.push({ x: 1220 + x * (80 + Math.round(15 * Math.random())), id: "wheat" }); }
        return res;
    }(),  
    "Memphis": function() {
        const res = [
            { x: 2200, id: "student1" },
            { x: 2500, id: "student2" },
            { x: 2800, id: "teacher" },
            { x: 3250, id: "pomegranate" },
            { x: 3650, id: "date" },
            { x: 4050, id: "pomegranate" },
            { x: 3900, id: "biff" },
            { x: 4800, id: "cat3" },
            { x: 4900, id: "cat5" },
            { x: 5200, id: "cat2" },
            { x: 5600, id: "cat4" },
            { x: 6000, id: "cat6" },
            { x: 5500, id: "ptah" }, { x: 5500, id: "ptahAltar" },
        ];
        AddTemple(res, 2000, 3);
        AddTemple(res, 4500, 5);
        for(let x = 0; x < 8; x++) { res.push({ x: 690 + x * (90 + x), id: "bluelotus" }); }
        return res;
    }(),  
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
    "Testbench": [
        { x: 700, id: "bluelotus" },
        { x: 800, id: "whitelotus" },
        { x: 900, id: "corn" },
        { x: 1000, id: "wheat" },
        { x: 1100, id: "barley" },
        { x: 1200, id: "papyrus" },
        { x: 1300, id: "date" },
        { x: 1400, id: "flax" },
        { x: 1500, id: "pomegranate" },
        { x: 1600, id: "boff" }
    ]
};