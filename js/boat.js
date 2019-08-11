const positions = [ // name, x, y, distance from previous
    ["Tanis", 505, 115], 
    ["Avaris", 515, 135, 1], 
    ["Leontopolis", 495, 155, 2], // Taremu (Land of Fish) near Heliopolis 
    ["Memphis", 475, 180, 1], 
    ["Crocodilopolis", 445, 214, 2], // Shedet
    ["Herakleopolis", 455, 245, 1], 
    ["Hermopolis", 475, 285, 2], 
    ["Abydos", 515, 325, 3], 
    ["Thebes", 535, 360, 3],
    ["Kom Ombo", 545, 410, 3], // Nubt, also near Syene
    ["Elephantine", 535, 440, 1], 
    ["Abu Simbel", 485, 490, 4], 
    ["Napata", 495, 650, 10]
];
const boat = {
    animIdx: 0, yPos: 650, btnPos: 444,//gameIdx: 0, 
    selectingLocation: true, currentPos: 8, nextPos: 8, 
    inDialogue: false, inChoice: false, 
    playerX: 555, playerDir: 1, 
    Setup: function() {
        boat.selectingLocation = false;
        boat.InitialDraw();
        boat.animIdx = setInterval(boat.Animate, 30);
    },
    InitialDraw: function() {
        gfx.clearAll();
        if(boat.selectingLocation) {
            gfx.DrawBG("map", 0);
        } else {
            gfx.DrawBG("boatOuter", 0);
            gfx.DrawBG("boatCover", 0, "menuB");
            const numFullBeehives = player.inventory["full beehive"];
            for(let i = 0; i < numFullBeehives; i++) {
                gfx.DrawSprite("hive", 0, 0, 700 + 45 * (i % 5), boat.yPos + 20 - Math.floor(i / 5) * 45, "background", 0.5);
            }
            const numTotalBeehives = numFullBeehives + player.inventory["empty beehive"];
            for(let i = numFullBeehives; i < numTotalBeehives; i++) {
                gfx.DrawSprite("hive", 1, 0, 700 + 45 * (i % 5), boat.yPos + 20 - Math.floor(i / 5) * 45, "background", 0.5);
            }
            gfx.DrawSprite("justabox", 0, 0, 350, boat.yPos + 20, "background");
            gfx.DrawSprite("ladder", 0, 0, 550, boat.yPos + 100, "menuB");
        }
    },
    Animate: function() {
        if(boat.inDialogue) { return; }
        if(boat.selectingLocation) {
            gfx.clearSome(["menuA", "menutext"]);
            for(let i = 0; i < positions.length; i++) {
                const pos = positions[i];
                gfx.DrawSprite("circle", 0, 0, pos[1], pos[2], "menuA");
            }
            const oldCursor = positions[boat.currentPos];
            gfx.DrawSprite("headico", 1, 0, oldCursor[1], oldCursor[2], "menuA");
            const cursor = positions[boat.nextPos];
            gfx.DrawSprite("headico", 0, 0, cursor[1], cursor[2], "menuA");
            gfx.DrawText(cursor[0], cursor[1] + 30, cursor[2] - textHandler.HUDfontSize * player.fontSize * 2.2, false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize * 1.5);
            let nextText = "Current Location";
            if(boat.currentPos !== boat.nextPos) { nextText = boat.GetDistance(boat.currentPos, boat.nextPos) + " days away"; }
            gfx.DrawText(nextText, cursor[1] + 30, cursor[2], false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize);
        } else {
            gfx.clearSome(["characters", "menuA", "menutext"]);
            gfx.DrawSprite("prot", boat.playerDir, 0, boat.playerX, boat.yPos, "characters");
            if(boat.playerX <= 265) {
                textHandler.DrawButton(true, "Set Sail", boat.playerX, boat.btnPos, 1);
            } else if(boat.playerX <= 470) {
                textHandler.DrawButton(true, "Check Storage", boat.playerX, boat.btnPos, 1);
            } else if(boat.playerX >= 620) {
                textHandler.DrawButton(true, "Smoke Bees", boat.playerX, boat.btnPos, 1);
            } else if(boat.playerX <= 580 && boat.playerX >= 550) {
                textHandler.DrawButton(true, "Leave Ship", boat.playerX, boat.btnPos, 1);
            }
        }
    },
    GetDistance: function(a, b) {
        const lower = Math.min(a, b), higher = Math.max(a, b);
        let distance = 0;
        for(let i = lower + 1; i <= higher; i++) {
            distance += positions[i][3];
        }
        return distance;//Math.ceil(distance / 1.5);
    },
    mouseMove: function() { },
    click: function() {
        if(boat.inDialogue) {
            if(boat.inChoice) {
                textHandler.MakeChoice(true);
            } else {
                textHandler.Advance();
            }
        } else if(boat.selectingLocation) {
            gfx.clearSome(["menuA", "menutext"]);
            if(boat.nextPos === boat.currentPos) {
                boat.selectingLocation = false;
                boat.InitialDraw();
            } else {
                textHandler.ShowText("", "goToPlace", boat.GetDistance(boat.currentPos, boat.nextPos), positions[boat.nextPos][0]);
            }
        } else {
            if(boat.playerX <= 265) { // Sail
                boat.selectingLocation = true;
                boat.InitialDraw();
            } else if(boat.playerX <= 470) { // Storage
                gfx.clearSome(["menuA", "menutext"]);
                texts["inventory"] = "I have ";
                const things = [];
                for(const key in player.inventory) {
                    const count = player.inventory[key];
                    if(count > 0) {
                        things.push(count + " " + key);
                    }
                }
                if(player.honeys.length > 0) {
                    things.push(player.honeys.length + " honey");
                }
                if(things.length === 0) {
                    texts["inventory"] += "nothing."
                } else {
                    texts["inventory"] += things.join(", ") + ".";
                }
                textHandler.ShowText("", "inventory");
            } else if(boat.playerX >= 620) { // Smoke
                if(player.HasItem("incense")) {
                    
                } else {
                    gfx.clearSome(["menuA", "menutext"]);
                    textHandler.ShowText("", "noIncense");
                }
            } else if(boat.playerX <= 580 && boat.playerX >= 550) { // Leave
                game.SwitchTo(land, positions[boat.currentPos][0]);
            }
        }
    },
    rightclick: function() {
        if(boat.inChoice) {
            textHandler.MakeChoice(false);
            return;
        }
    },
    keyPress: function(key, shift) { 
        if(key === player.controls.confirm) {
            boat.click();
            return;
        } else if(key === player.controls.cancel) {
            boat.rightclick();
            return;
        }
        if(boat.selectingLocation) {
            switch(key) {
                case player.controls.up: boat.nextPos = Math.max(0, boat.nextPos - 1); break;
                case player.controls.down: boat.nextPos = Math.min(positions.length - 1, boat.nextPos + 1); break;
            }
        } else {
            if(key === player.controls.right) {
                if(boat.playerDir === 1) { 
                    boat.playerX += 10;
                } else {
                    boat.playerDir = 1;
                }
                if(boat.playerX > 890) { boat.playerX = 890; }
            } else if (key === player.controls.left) {
                if(boat.playerDir === 0) {
                    boat.playerX -= 10;
                } else {
                    boat.playerDir = 0;
                }
                if(boat.playerX < 125) { boat.playerX = 125; }
            }
        }
    }
};