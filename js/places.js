const GetPlaceEntities = function(place) {
    const placeObj = places[place];
    const entities = [
        { type: "bg", sprite: "boat", dir: 0, x: 50, y: 75 },
        { type: "boat", sprite: "", x: 400 }
    ];
    for(let i = 0; i < placeObj.length; i++) { // TODO: logic for Random
        const obj = placeObj[i];
        const entity = GetCopy(obj.id, obj.x);
        entities.push(entity);
    }
    return entities;
};
const places = {
    "Thebes": [
        { x: 1100, id: "date" },
        { x: 1400, id: "biff" }
    ],
    "Random": [

    ]
};