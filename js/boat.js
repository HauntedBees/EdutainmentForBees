const positions = [ // name, x, y, distance from previous
    ["Tanis", 505, 115], 
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
    animIdx: 0, freeMovement: true, yPos: 650, btnPos: 444,//gameIdx: 0, 
    selectingLocation: true, currentPos: 7, nextPos: 7, waterIdx: 0, 
    inDialogue: false, inChoice: false, isRowing: false, 
    playerX: 500, playerDir: 0, honeyCache: [], 
    playerAnim: animHelpers.GetPlayerAnim(), rowAnim: animHelpers.GetAnim("row"), 
    Setup: function() {
        boat.selectingLocation = false;
        boat.playerX = 500;
        boat.playerDir = 0;
        boat.InitialDraw();
        boat.animIdx = setInterval(boat.Animate, 30);
    },
    InitialDraw: function(isRowing) {
        gfx.ClearAllLayers();
        gfx.DrawSprite("paint", 0, 0, 0, 0, "paintbaby", 1, true);
        boat.waterIdx = 0;
        boat.isRowing = isRowing || false;
        if(boat.selectingLocation) {
            boat.freeMovement = false;
            gfx.DrawBG("map", 0);
        } else {
            boat.freeMovement = true;
            for(let i = 0; i < 4; i++) {
                gfx.DrawBG("bg" + i, 0);
            }
            gfx.DrawSprite("boatboat", 0, 0, 0, 400, "background", 1, true);
            gfx.DrawSprite("boatboat", 0, 1, 0, 400, "menuB", 1, true);
            const numFullBeehives = player.inventory["full beehive"];
            for(let i = 0; i < numFullBeehives; i++) {
                gfx.DrawSprite("hive", 0, 0, 700 + 45 * (i % 5), boat.yPos + 20 - Math.floor(i / 5) * 45, "background", 0.5);
            }
            const numTotalBeehives = numFullBeehives + player.inventory["empty beehive"];
            for(let i = numFullBeehives; i < numTotalBeehives; i++) {
                gfx.DrawSprite("hive", 1, 0, 700 + 45 * (i % 5), boat.yPos + 20 - Math.floor(i / 5) * 45, "background", 0.5);
            }
            gfx.DrawSprite("justabox", 0, 0, 360, boat.yPos + 20, "background");
            if(boat.isRowing) {
                boat.playerX = 0;
            } else {
                gfx.DrawSprite("oar", 0, 0, 200, boat.yPos + 50, "menuB");
                gfx.DrawSprite("ladder", 0, 0, 550, boat.yPos + 100, "menuB");
            }
        }
    },
    Animate: function() {
        if(boat.inDialogue && !boat.isRowing) { return; }
        if(boat.selectingLocation) {
            gfx.ClearLayers(["menuA", "menutext"]);
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
            const dist = boat.GetDistance(boat.currentPos, boat.nextPos);
            if(boat.currentPos !== boat.nextPos) { nextText = dist + " days away"; }
            seasonHandler.DrawSeasons(dist);
            gfx.DrawText(nextText, cursor[1] + 30, cursor[2], false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize);
            if(seasonHandler.IsInSeason(dist, boat.nextPos)) {
                gfx.DrawText("Flowering Season", cursor[1] + 30, cursor[2] + textHandler.HUDfontSize * player.fontSize * 1.5, false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize);
            }
        } else {
            if(boat.isRowing) {
                if(!boat.inDialogue) { // this shouldn't be in an animation handler but ehhhhhhhhh
                    game.SwitchTo(land, positions[boat.nextPos][0]);
                }
                gfx.ClearLayers(["characters", "menuC"]);
                boat.rowAnim.SetMoving();
                boat.playerX -= 30;
                gfx.DrawSprite("water", 0, 0, (boat.waterIdx + boat.playerX) % 1920, 650, "menuC", 1, true);
                gfx.DrawSprite("water", 0, 0, (boat.waterIdx + boat.playerX) % 1920 + 1920, 650, "menuC", 1, true);
                gfx.DrawSprite2("row", boat.rowAnim.GetFrame(0), 333, 799, "menuC");
                gfx.DrawSprite("shore", 0, 0, boat.playerX, 680, "menuC", 1, true);
            } else {
                gfx.ClearLayers(["characters", "menuA", "menuC", "menutext"]);
                if(boat.playerX <= 265) {
                    textHandler.DrawButton(true, "Set Sail", boat.playerX, boat.btnPos, 1);
                } else if(boat.playerX <= 470) {
                    textHandler.DrawButton(true, "Check Storage", boat.playerX, boat.btnPos, 1);
                } else if(boat.playerX >= 620) {
                    textHandler.DrawButton(true, "Smoke Bees", boat.playerX, boat.btnPos, 1);
                } else if(boat.playerX <= 590 && boat.playerX >= 520) {
                    textHandler.DrawButton(true, "Leave Ship", boat.playerX, boat.btnPos, 1);
                }
                boat.waterIdx = (boat.waterIdx + 0.5) % 1920;
                gfx.DrawSprite("water", 0, 0, boat.waterIdx, 650, "menuC", 1, true);
                gfx.DrawSprite("water", 0, 0, boat.waterIdx - 1920, 650, "menuC", 1, true);
                gfx.DrawSprite2("player", boat.playerAnim.GetFrame(boat.playerDir), boat.playerX, boat.yPos, "characters");
                gfx.DrawSprite("shore", 0, 0, 0, 680, "menuC", 1, true);
            }
        }
    },
    GetDistance: function(a, b) {
        if(a === b) { return 0; }
        const lower = Math.min(a, b), higher = Math.max(a, b);
        let distance = 0;
        for(let i = lower + 1; i <= higher; i++) {
            distance += positions[i][3];
        }
        return distance;
    },
    SetSailForAdventure: function() {
        boat.inDialogue = false;
        boat.inChoice = false;
        boat.selectingLocation = false;
        boat.currentPos = boat.nextPos;
        const potentialFunFacts = [];
        const nextPosName = positions[boat.nextPos][0];
        for(let i = 0; i < 2; i++) {
            const entryName = "fact" + nextPosName + i;
            if(player.revealedFunFacts.indexOf(entryName) < 0) {
                potentialFunFacts.push(entryName); // local fun facts are weighted
                potentialFunFacts.push(entryName);
                potentialFunFacts.push(entryName);
                potentialFunFacts.push(entryName);
                potentialFunFacts.push(entryName);
            }
        }
        for(let i = 0; i < 30; i++) {
            const entryName = "factMisc" + i;
            if(player.revealedFunFacts.indexOf(entryName) < 0) { potentialFunFacts.push(entryName); }
        }
        if(potentialFunFacts.length === 0) {
            player.revealedFunFacts = [];
            boat.SetSailForAdventure();
            return;
        }
        const funFactIdx = Math.floor(Math.random() * potentialFunFacts.length);
        const funFact = potentialFunFacts[funFactIdx];
        player.revealedFunFacts.push(funFact);
        boat.InitialDraw(true);
        textHandler.ShowText("FUN FACT", funFact);
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
            gfx.ClearLayers(["menuA", "menutext"]);
            if(boat.nextPos === boat.currentPos) {
                boat.selectingLocation = false;
                boat.InitialDraw();
            } else {
                const dist = boat.GetDistance(boat.currentPos, boat.nextPos);
                if(seasonHandler.IsInSeason(dist, boat.nextPos)) {
                    textHandler.ShowText("", "goToPlace", dist, positions[boat.nextPos][0]);
                } else {
                    textHandler.ShowText("", "goToPlaceNo", dist, positions[boat.nextPos][0]);
                }
            }
        } else {
            if(boat.playerX <= 275) { // Sail
                boat.selectingLocation = true;
                boat.InitialDraw();
            } else if(boat.playerX <= 480) { // Storage
                gfx.ClearLayers(["menuA", "menutext"]);
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
                    if(boat.honeyCache.length === 0) {
                        let nectarCount = 0;
                        for(const key in player.nectarCache) {
                            nectarCount += player.nectarCache[key];
                        }
                        gfx.ClearLayers(["menuA", "menutext"]);
                        if(nectarCount === 0) {
                            textHandler.ShowText("", "noNectar");
                        } else {
                            textHandler.ShowText("", "noHoney");
                        }
                        return;
                    }
                } else {
                    gfx.ClearLayers(["menuA", "menutext"]);
                    textHandler.ShowText("", "noIncense");
                }
            } else if(boat.playerX <= 590 && boat.playerX >= 520) { // Leave
                game.SwitchTo(land, positions[boat.currentPos][0]);
            }
        }
    },
    rightclick: function() {
        if(boat.inChoice) {
            textHandler.MakeChoice(false);
            return;
        } else if(boat.selectingLocation && !boat.inDialogue) {
            boat.selectingLocation = false;
            boat.nextPos = boat.currentPos;
            boat.InitialDraw();
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
                    boat.playerX += 2;
                    boat.playerAnim.SetMoving();
                } else {
                    boat.playerDir = 1;
                }
                if(boat.playerX > 835) { boat.playerX = 835; }
            } else if (key === player.controls.left) {
                if(boat.playerDir === 0) {
                    boat.playerX -= 2;
                    boat.playerAnim.SetMoving();
                } else {
                    boat.playerDir = 0;
                }
                if(boat.playerX < 240) { boat.playerX = 240; }
            }
        }
    }
};