const positions = [ // name, x, y, distance from previous
    ["Taremu", 495, 155, 2], // Taremu (Land of Fish) near Heliopolis  Leontopolis
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
    animIdx: 0, freeMovement: true, yPos: 650, btnY: 350,//gameIdx: 0, 
    selectingLocation: true, currentPos: 6, nextPos: 6, waterIdx: 0, 
    inDialogue: false, inChoice: false, isRowing: false, 
    isSmoking: false, smonkAnim: null, honeyCache: [], daysTravelled: 0, 
    playerX: 500, playerDir: 0, bees: [], 
    playerAnim: animHelpers.GetPlayerAnim(), rowAnim: animHelpers.GetAnim("row"), 
    Setup: function(justSailed) {
        boat.selectingLocation = false;
        if(justSailed === true) {
            boat.playerX = 450;
            boat.playerDir = 1;
            boat.Beeify(boat.daysTravelled);
            player.currentDay += boat.daysTravelled;
        } else {
            boat.playerX = 500;
            boat.playerDir = 0;
        }
        boat.bees = [];
        boat.isSmoking = false;
        boat.daysTravelled = 0;
        boat.smonkAnim = null;
        boat.InitialDraw();
        boat.animIdx = setInterval(boat.Animate, 30);
    },
    PartialSetup: function() {
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
                const x = 700 + 52 * (i % 5), y = boat.yPos + 30 - Math.floor(i / 5) * 52;
                gfx.DrawSprite("hive", 0, 0, x, y, "background", 0.5);
                boat.InitializeBees(x, y);
            }
            const numTotalBeehives = numFullBeehives + player.inventory["empty beehive"];
            for(let i = numFullBeehives; i < numTotalBeehives; i++) {
                gfx.DrawSprite("hive", 1, 0, 700 + 52 * (i % 5), boat.yPos + 30 - Math.floor(i / 5) * 52, "background", 0.5);
            }
            gfx.DrawSprite("justabox", 0, 0, 400, boat.yPos - 20, "background");
            if(boat.isRowing) {
                boat.playerX = 0;
            } else {
                gfx.DrawSprite("oar", 0, 0, 200, boat.yPos + 50, "menuB");
                gfx.DrawSprite("ladder", 0, 0, 550, boat.yPos + 100, "menuB");
            }
        }
    },
    InitializeBees: function(x, y) {
        const beeRadius = 20;
        const beeDiameter = beeRadius * 2;
        const numBees = Math.floor(5 + Math.random() * beeRadius / 6);
        for(let i = 0; i < numBees; i++) {
            boat.bees.push({
                i: 0,
                x: x - 25 + Math.round(beeRadius - beeDiameter * Math.random()),
                y: y - 60 + Math.round(beeRadius - beeDiameter * Math.random())
            });
        }
    },
    Animate: function() {
        if(boat.inDialogue && !(boat.isRowing || boat.isSmoking)) { return; }
        if(boat.selectingLocation) {
            gfx.ClearLayers(["menuA", "menutext"]);
            for(let i = 0; i < positions.length; i++) {
                const pos = positions[i];
                const sx = (player.chievos[pos[0]] || ["TODO: remove me sean"]).length === 0 ? 1 : 0;
                gfx.DrawSprite("circle", sx, 0, pos[1], pos[2], "menuA");
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
                    // THIS IS WHAT HAPPENS WHEN YOU FINISH BOATING
                    game.SwitchTo(boat, true);
                }
                gfx.ClearLayers(["characters", "menuC"]);
                boat.rowAnim.SetMoving();
                boat.playerX -= 30;
                boat.AnimateBees();
                gfx.DrawSprite("water", 0, 0, (boat.waterIdx + boat.playerX) % 1920, 650, "menuC", 1, true);
                gfx.DrawSprite("water", 0, 0, (boat.waterIdx + boat.playerX) % 1920 + 1920, 650, "menuC", 1, true);
                gfx.DrawSprite2("row", boat.rowAnim.GetFrame(0), 333, 799, "menuC");
                gfx.DrawSprite("shore", 0, 0, boat.playerX, 680, "menuC", 1, true);
            } else if(boat.isSmoking) {
                if(!boat.inDialogue) { // im a rebel
                    // THIS IS WHAT HAPPENS WHEN YOU FINISH SMOKING
                    boat.isSmoking = false;
                    boat.smonkAnim = null;
                } else {
                    gfx.ClearLayers(["characters", "menuC"]);
                    boat.AnimateBees();
                    gfx.DrawSprite("player", 3, 4, boat.playerX, boat.yPos, "characters");
                    const honeyAmount = Math.round(2 * Math.random());
                    for(let i = 0; i < honeyAmount; i++) {
                        gfx.DrawSprite("honeycomb", 0, 0, 810 - Math.floor(80 * Math.random()), boat.yPos - 90 + Math.floor(80 * Math.random()), "characters", 0.5);
                    }
                    boat.smonkAnim.SetMoving();
                    gfx.DrawSprite2("smoke", boat.smonkAnim.GetFrame(0), 760, boat.yPos - 10, "menuC");
                    boat.waterIdx = (boat.waterIdx + 0.5) % 1920;
                    gfx.DrawSprite("water", 0, 0, boat.waterIdx, 650, "menuC", 1, true);
                    gfx.DrawSprite("water", 0, 0, boat.waterIdx - 1920, 650, "menuC", 1, true);
                    gfx.DrawSprite("shore", 0, 0, 0, 680, "menuC", 1, true);
                }
            } else {
                gfx.ClearLayers(["characters", "menuA", "menuC", "menutext"]);
                if(boat.playerX <= 320) {
                    textHandler.DrawButton(true, "Set Sail", boat.playerX, boat.btnY, 1);
                } else if(boat.playerX <= 470) {
                    textHandler.DrawButton(true, "Check Storage", boat.playerX, boat.btnY, 1);
                } else if(boat.playerX >= 620) {
                    textHandler.DrawButton(true, "Smoke Hive", boat.playerX, boat.btnY, 1);
                } else if(boat.playerX <= 590 && boat.playerX >= 520) {
                    textHandler.DrawButton(true, "Leave Ship", boat.playerX, boat.btnY, 1);
                }
                boat.waterIdx = (boat.waterIdx + 0.5) % 1920;
                boat.AnimateBees();
                gfx.DrawSprite("water", 0, 0, boat.waterIdx, 650, "menuC", 1, true);
                gfx.DrawSprite("water", 0, 0, boat.waterIdx - 1920, 650, "menuC", 1, true);
                gfx.DrawSprite2("player", boat.playerAnim.GetFrame(boat.playerDir), boat.playerX, boat.yPos, "characters");
                gfx.DrawSprite("shore", 0, 0, 0, 680, "menuC", 1, true);
            }
        }
    },
    AnimateBees: function() {
        for(let i = 0; i < boat.bees.length; i++) {
            const b = boat.bees[i];
            gfx.DrawSprite("bee", 0, 0, b.x, b.y, "characters", 0.5);
            switch(b.i) {
                case 0: b.y--; break;
                case 1: b.x++; break;
                case 2: b.y++; break;
                case 3: b.x--; break;
            }
            b.i = (b.i + 1) % 4;
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
    Beeify: function(daysTravelled) {
        let beeswaxCount = 0;
        for(const nectar in player.nectarCache) {
            let maxHoneys = daysTravelled / 3;
            if(player.nectarCache[nectar] > 5) {
                beeswaxCount++;
                while(player.nectarCache[nectar] > 0 && maxHoneys > 0) {
                    const amount = 5 + Math.ceil(15 * Math.random());
                    if(player.nectarCache[nectar] >= 200 && Math.random() > 0.8) {
                        player.nectarCache[nectar] -= 200;
                        boat.honeyCache.push({ type: nectar, grade: 6 });
                        maxHoneys -= 2;
                        beeswaxCount += Math.ceil(5 * Math.random());
                    } else if(player.nectarCache[nectar] >= amount) {
                        player.nectarCache[nectar] -= amount;
                        boat.honeyCache.push({ type: nectar, grade: 3 + Math.round(amount / 10) });
                        maxHoneys--;
                        beeswaxCount += Math.ceil(3 * Math.random());
                    } else {
                        if(player.nectarCache[nectar] >= 15) {
                            boat.honeyCache.push({ type: nectar, grade: 3 });
                        } else {
                            boat.honeyCache.push({ type: nectar, grade: 2 });
                        }
                        player.nectarCache[nectar] = 0;
                        beeswaxCount += Math.floor(2 * Math.random());
                    }
                }
            } else {
                player.nectarCache[nectar] = 0;
                boat.honeyCache.push({ type: nectar, grade: 1 });
            }
        }
        boat.honeyCache.push({ beeswax: true, amount: beeswaxCount });
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
                boat.daysTravelled = dist;
                if(seasonHandler.IsInSeason(dist, boat.nextPos)) {
                    textHandler.ShowText("", "goToPlace", dist, positions[boat.nextPos][0]);
                } else {
                    textHandler.ShowText("", "goToPlaceNo", dist, positions[boat.nextPos][0]);
                }
            }
        } else {
            if(boat.playerX <= 320) { // Sail
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
                    if(boat.honeyCache.length > 0) {
                        player.RemoveItem("incense");
                        boat.isSmoking = true;
                        boat.smokeIdx = 0;
                        boat.smonkAnim = animHelpers.GetAnim("smonk");
                        let honeyCount = 0, waxCount = 0;
                        for(let i = 0; i < boat.honeyCache.length; i++) {
                            const honey = boat.honeyCache[i];
                            if(honey.beeswax === true) {
                                waxCount += honey.amount;
                                player.AddItem("beeswax", honey.amount);
                            } else {
                                honeyCount += 1;
                                player.AddHoney(honey);
                            }
                        }
                        textHandler.ShowText("", "smonk", honeyCount, waxCount);
                        boat.honeyCache = [];
                    } else {
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
    keyPress: function(key) {
        if(key === player.controls.pause && !boat.selectingLocation && !boat.inDialogue) {
            optionsMenu.Show();
            return;
        }
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
        } else if(!boat.isSmoking && !boat.inDialogue) {
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