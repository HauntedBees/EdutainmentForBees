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
            entity.hasValue = false;
            if(entity.sxAlt !== undefined) { entity.sx = entity.sxAlt; }
            if(entity.syAlt !== undefined) { entity.sy = entity.syAlt; }
        }
        if(obj.y !== undefined) {
            entity.y = (entity.y || 0) + obj.y;
        }
        if(entity.mustBee || (land.flowering === true && entity.type === "beeable" && Math.random() <= 0.05)) {
            entity.hasBees = true;
            entity.beeTime = Math.floor(Math.random() * 30);
            land.InitializeBees(entity);
        }
        /*if(obj.x <= 600) { // TODO: remove me eventually
            alert("object " + obj.id + " needs an X value higher than 600!");
        }*/
        entities.push(entity);
    }
    return entities;
};
const autoPlays = {
    "ModernCoffin": function() { textHandler.ShowText("Protagonny", "intro0"); },
    "CutsceneWaset": function() { cutscenes["~start3"](); }
};
const maxX = {
    "ModernCoffin": 2290,
    "CutsceneWaset": 5800,
    "Taremu": 5565,
    "Memphis": 5180,
    "Shedet": 3735,
    "Abdju": 6130,
    "Waset": 5790, // 6140
    "Yabu": 5170,
    "Napata": 3800
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
    "CutsceneWaset": [
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
            { x: 5500, id: "ptah" }, { x: 5500, id: "ptahAltar" }
        ];
        AddTemple(res, 2000, 3);
        AddTemple(res, 4500, 5);
        for(let x = 0; x < 8; x++) { res.push({ x: 690 + x * (90 + x), id: "bluelotus" }); }
        for(let x = 0; x < 4; x++) { res.push({ x: 1000 + x * (42 + x), id: "flax" }); }
        return res;
    }(),  
    "Shedet": function() {
        const res = [
            { x: 3500, id: "sobek" }, { x: 3500, id: "sobekAltar" },
            { x: 3900, id: "sobekpriest"},
            { x: 4500, id: "crocodil"},
            { x: 4300, id: "crocodilI"},
            { x: 2885, id: "boxIncense" },
            { x: 2958, id: "incenseVendor" },
            { x: 2000, id: "obelisk" },
            { x: 2450, id: "puddle" },
            { x: 2550, id: "puddle" },
            { x: 4500, id: "puddle" },
            { x: 4600, id: "puddle" },
            { x: 4800, id: "puddle" },
            { x: 4650, id: "puddle" },
            { x: 4550, id: "puddle" },
            { x: 4700, id: "puddle" },
            { x: 4750, id: "puddle" },
            { x: 4850, id: "puddle" },

        ];
        AddTemple(res, 3000, 4);
        for(let x = 0; x < 8; x++) { res.push({ x: 800 + x * (40 + x), y: Math.floor(30 * Math.random()), id: "chamomile" }); }
        for(let x = 0; x < 6; x++) { res.push({ x: 1220 + x * (50 + x), id: "barley" }); }
        for(let x = 0; x < 8; x++) { res.push({ x: 5000 + x * (62 + x), y: Math.floor(5 * Math.random()), id: "chrysanthemum" }); }
        return res;
    }(),
    "Abdju": function() {
        const res = [
            { x: 3800, id: "tomb" },
            { x: 3810, id: "tombKhasekhem" },
            { x: 4500, id: "tomb" },
            { x: 4510, id: "tombPeribsen" },
            { x: 5200, id: "tomb" },
            { x: 5210, id: "tombQaa" },
            { x: 5900, id: "tomb" },
            { x: 5910, id: "tombSemerkhet" },
            { x: 6600, id: "tomb" },
            { x: 6610, id: "tombKa" },
            { x: 1790, id: "boxGold" },
            { x: 1900, id: "slappy2" },
            { x: 2400, id: "isis" }, { x: 2400, id: "isisAltar" },
            { x: 2700, id: "osiris" }, { x: 2700, id: "osirisAltar" },
            { x: 4150, id: "papyrus" },
            { x: 4855, id: "papyrus" },
            { x: 5555, id: "papyrus" },
            { x: 6255, id: "papyrus" }
        ];
        AddTemple(res, 2050, 3);
        for(let x = 0; x < 5; x++) { res.push({ x: 3090 + x * (90 + x), y: Math.floor(5 * Math.random()), id: "flax" }); }
        for(let x = 0; x < 4; x++) { res.push({ x: 1200 + x * (96 + x), y: Math.floor(5 * Math.random()), id: "melon" }); }
        return res;
    }(),  
    "Waset": function() {
        const res = [
            { x: 700, id: "bluelotus" },
            { x: 800, id: "whitelotus" },
            { x: 900, id: "bluelotus" },
            { x: 1100, id: "date" },
            { x: 1400, id: "date" },
            { x: 3500, id: "amun" }, { x: 3500, id: "amunAltar" },
            { x: 3800, id: "khonsu" }, { x: 3800, id: "khonsuAltar" },
            { x: 4100, id: "mut" }, { x: 4100, id: "mutAltar" },
            { x: 6400, id: "guard" },
            // TODO: all the amenhotep hijinks
            { x: 6800, id: "amenhotep" },
            { x: 1800, id: "boxBeer" },
            { x: 1900, id: "shop3" },
            { x: 2200, id: "lettuce" },
            { x: 2400, id: "lettuce" },
            { x: 2600, id: "lettuce" },
            { x: 2800, id: "lettuce" },
            { x: 2900, id: "farmboy" },
            { x: 5200, id: "boxBees" },
            { x: 5300, id: "hiveman" },
            { x: 5800, id: "boxGold" },
            { x: 5900, id: "shop4" },
            { x: 5000, id: "theGoodBoy" },
            { x: 2000, id: "cat2" },
            { x: 2500, id: "cat3" },
            { x: 4500, id: "cat5" },
            { x: 6000, id: "cat6" },
            { x: 4300, id: "cat1" },
            { x: 1500, id: "cat4" }
        ];
        AddTemple(res, 3000, 5);
        AddTemple(res, 6400, 3);
        return res;
    }(),
    "Yabu": function() {
        const res = [
            { x: 1000, id: "nilometer" },
            { x: 2100, id: "cow" },
            { x: 2250, id: "shop5" },
            { x: 2350, id: "boxMilk" },
            { x: 3220, id: "satis" }, { x: 3220, id: "satisAltar" },
            { x: 3620, id: "khnum" }, { x: 3620, id: "khnumAltar" },
            { x: 4020, id: "anuket" }, { x: 4020, id: "anuketAltar" },
            { x: 5000, id: "templeL" },
            { x: 5177, id: "templeBR" },
            { x: 5200, id: "worker" },
            { x: 5600, id: "clay" },
            { x: 5900, id: "puddle" },
            { x: 6000, id: "puddle" },
            { x: 5800, id: "puddle" },
            { x: 6050, id: "puddle" },
            { x: 5950, id: "puddle" },
            { x: 5700, id: "puddle" },
            { x: 5750, id: "puddle" },
            { x: 6100, id: "puddle" },
            { x: 6150, id: "puddle" },
            { x: 5850, id: "puddle" }
        ];
        AddTemple(res, 3000, 4);
        for(let x = 0; x < 8; x++) { res.push({ x: 1200 + x * (80 + x), y: Math.floor(5 * Math.random()), id: "lettuce" }); }
        return res;
    }(), // Elephantine 
    "Napata": function() {
        const res = [
            { x: 1700, id: "napataguard" },
            { x: 1900, id: "date" },
            { x: 2100, id: "pomegranate" },
            { x: 2300, id: "napataman" },
            { x: 2650, id: "oven" },
            { x: 2850, id: "juicer" },
            { x: 3050, id: "spreader" },
            { x: 3250, id: "infuser" },
            { x: 3500, id: "napatawoman" },
            { x: 4200, id: "napatachild" }
        ];
        AddTemple(res, 2500, 3);
        for(let x = 0; x < 8; x++) { res.push({ x: 700 + x * (96 + x), y: Math.floor(5 * Math.random()), id: x % 2 === 0 ? "chamomile" : "chrysanthemum" }); }
        for(let x = 0; x < 6; x++) { res.push({ x: 3800 + x * (90 + x), y: Math.floor(5 * Math.random()), id: "papyrus" }); }
        return res;
    }(),
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
        { x: 1600, id: "biff" }
    ]
};