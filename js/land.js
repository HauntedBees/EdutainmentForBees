const land = {
    animIdx: 0, gameIdx: 0, modernTimes: false, freeMovement: true, cutscene: { active: false }, 
    yPos: 780, btnY: 444, xOffset: 500, maxX: 7678, currentLocation: "", 
    playerX: 0, playerDir: 1, playerAnim: animHelpers.GetPlayerAnim(), 
    entities: [], target: null, flowering: false, 
    inDialogue: false, inChoice: false,
    sawDropoff: false, sawGet: false, 
    bgMoved: true, templeRanges: [], // max x ~= 7678
    Setup: function(location, inSeason) {
        land.currentLocation = location;
        land.flowering = inSeason || false;
        land.modernTimes = location.indexOf("Modern") === 0;
        land.animIdx = setInterval(land.Animate, 30);
        land.gameIdx = setInterval(land.RunGame, 100);
        land.entities = GetPlaceEntities(location, land.modernTimes);
        land.templeRanges = [];
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(!e.isTemple) { continue; }
            const tRlen = land.templeRanges.length - 1;
            const left = e.x - 144, right = e.x + 144;
            if(land.templeRanges.length > 0 && land.templeRanges[tRlen][1] === left) {
                land.templeRanges[tRlen][1] = right;
            } else {
                land.templeRanges.push([left, right]);
            }
        }
        land.bgMoved = true;
        land.target = null;
        land.inDialogue = false;
        land.inChoice = false;
        land.playerX = location === "ModernCoffin2" ? 2150 : 0;
        land.playerDir = location === "ModernCoffin2" ? 0 : 1;
        land.sawDropoff = false;
        land.sawGet = false;
        land.cutscene = { active: false };
        land.maxX = maxX[location] || 6140;
        if(autoPlays[location] !== undefined) {
            land.Animate();
            autoPlays[location]();
        }
        if(!land.modernTimes) { gfx.DrawSprite("paint", 0, 0, 0, 0, "paintbaby", 1, true); }
    },
    PartialSetup: function() {
        land.animIdx = setInterval(land.Animate, 30);
        land.gameIdx = setInterval(land.RunGame, 100);
        land.bgMoved = true;
        land.target = null;
    },
    RunGame: function() {
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(e.hasBees) { e.beeTime += 0.1; }
            if(e.movement && !land.inDialogue) { movements[e.movement](e); }
        }
    },
    Animate: function() {
        if(land.inDialogue) { return; }
        if(land.bgMoved) {
            land.bgMoved = false;
            gfx.ClearLayer("background");
            if(land.currentLocation === "ModernTent") {
                gfx.DrawBG("tent", 0);
            } else if(land.modernTimes) {
                for(let i = 0; i <= 3; i++) {
                    gfx.DrawBG("bgM" + i, -land.playerX / (1 + 0.5 * (3 - i)));
                }
            } else {
                for(let i = 0; i <= 4; i++) {
                    gfx.DrawBG("bg" + i, -land.playerX / (1 + 3 * (4 - i)));
                }
                gfx.DrawBG("bg4", -land.playerX + sheetInfo["bg4"].w);
            }
        }
        land.target = null;
        gfx.ClearLayers(["menuA", "menuC", "menutext"]);
        land.waterIdx = (land.waterIdx + 0.5) % 1920;
        if(!land.modernTimes) {
            gfx.DrawSprite("water", 0, 0, -250 - land.playerX, 735, "menuC", 1, true);
            gfx.DrawSprite("shore2", 0, 0, 205 - land.playerX, 775, "menuC", 1, true);
        }
        land.target = land.DrawEntitiesAndGetTarget();
        if(land.target !== null && !land.cutscene.active) {
            const dy = textHandler.HUDfontSize * player.fontSize * 2.5;
            switch(land.target.type) {
                case "endgame":
                    textHandler.DrawButton(true, "Pray", 525, land.btnY, 1, false, true);
                    break;
                case "auto":
                    textHandler.ShowText(land.target.speaker, land.target.text);
                    land.target.type = "bg";
                    break;
                case "maker":
                    textHandler.DrawButton(true, land.target.primary, 525, land.btnY, 1, false, true);
                    textHandler.DrawButton(false, land.target.secondary, 555, land.btnY + dy, 1, false, true);
                    break;
                case "beeable":
                    if(!land.flowering || land.target.harvested === true) {
                        textHandler.DrawButton(true, "Look (" + land.target.name + ")", 525, land.btnY, 1);
                    } else if(land.target.hasBees) {
                        textHandler.DrawButton(true, "Collect Bees (" + textHandler.GetTimeString(Math.floor(land.target.beeTime)) + ")", 525, land.btnY, 1, false, land.target.beeTime >= 15);
                    } else {
                        textHandler.DrawButton(true, "Release Bees (" + land.target.name + ")", 525, land.btnY, 1, false, true);
                        textHandler.DrawButton(false, "Harvest (" + land.target.name + ")", 555, land.btnY + dy, 1, false, true);
                    }
                    break;
                case "observable":
                    textHandler.DrawButton(true, "Look (" + land.target.name + ")", 525, land.btnY, 1, false, land.target.hasValue);
                    if(land.flowering && land.target.harvested !== true && land.target.harvestable === true) {
                        textHandler.DrawButton(false, "Harvest (" + land.target.name + ")", 555, land.btnY + dy, 1, false, true);
                    }
                    break;
                case "person":
                    textHandler.DrawButton(true, "Talk (" + land.target.name + ")", 525, land.btnY, 1, false, land.target.hasValue);
                    break;
                case "boat":
                    textHandler.DrawButton(true, "Board Ship", 525, land.btnY, 1, false, land.target.hasValue);
                    break;
            }
        }
    },
    DrawEntitiesAndGetTarget: function() {
        let potentialTarget = null, closestPos = 150;
        gfx.ClearLayers(["characters", "background2"]);
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(e.anim !== undefined) {
                gfx.DrawSprite2(e.sprite, e.anim.GetFrame(e.dir), e.x - land.playerX, land.GetYPos(e.x, e.y), "characters");
            } else if(e.sprite !== "") {
                const sx = ((!land.flowering || e.harvested === true) && e.rawsx !== undefined) ? e.rawsx : ((e.sx !== undefined ? e.sx : 0) + (e.noDir === true ? 0 : (e.dir || 0)));
                const sy = ((!land.flowering || e.harvested === true) && e.rawsy !== undefined) ? e.rawsy : (e.sy !== undefined ? e.sy : 0);
                let layer = "characters";
                if(e.foreground === true) { layer = "menuC" }
                else if(e.background === true) { layer = "background2"; }
                gfx.DrawSprite(e.sprite, sx, sy, e.x - land.playerX, land.GetYPos(e.x, e.y, e), layer);
                if(e.hasBees && e.bees !== undefined) {
                    for(let i = 0; i < e.bees.length; i++) {
                        const b = e.bees[i];
                        gfx.DrawSprite("bee", 0, 0, e.x + b.x - land.playerX, land.GetYPos(e.x, e.y) + b.y, e.foreground === true ? "menuC" : "characters", 0.5);
                        switch(b.i) {
                            case 0: b.y--; break;
                            case 1: b.x++; break;
                            case 2: b.y++; break;
                            case 3: b.x--; break;
                        }
                        b.i = (b.i + 1) % 4;
                    }
                }
            }
            const dist = Math.abs(e.x - land.playerX - land.xOffset);
            if(dist <= closestPos && e.type !== "bg") { // if something's in range, make it interactable
                potentialTarget = e;
                closestPos = dist;
            }
        }
        if(land.cutscene.active) {
            land.cutscene.Process();
            if(land.cutscene.keepPlayer === true) {
                gfx.DrawSprite2(land.modernTimes ? "playerModern" : "player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.GetYPos(land.playerX + land.xOffset), "characters");
            }
        } else if(land.currentLocation !== "ModernTent") {
            gfx.DrawSprite2(land.modernTimes ? "playerModern" : "player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.GetYPos(land.playerX + land.xOffset), "characters");
        }
        return potentialTarget;
    },
    GetYPos: function(x, yOffset, e) {
        if(e !== undefined && e.isTemple === true) { return land.yPos; }
        yOffset = yOffset || 0;
        for(let i = 0; i < land.templeRanges.length; i++) {
            const tr = land.templeRanges[i];
            if(x >= tr[0] && x <= tr[1]) {
                return land.yPos - 20 + yOffset;
            }
        }
        return land.yPos + yOffset;
    },
    mouseMove: function() { player.usingMouse = true; },
    click: function(fromKeyboard) {
        if(!fromKeyboard) { player.usingMouse = true; }
        if(land.inDialogue) {
            if(land.inChoice) {
                textHandler.MakeChoice(true);
            } else {
                textHandler.Advance();
            }
            return;
        }
        if(land.cutscene.active || land.target === null) { return; }
        if(land.target.type === "beeable") {
            if(!land.flowering || land.target.harvested === true) {
                gfx.ClearLayers(["menuA", "menutext"]);
                land.DrawEntitiesAndGetTarget();
                if(land.target.textRange) {
                    const id = land.target.id + Math.floor(Math.random() * land.target.textRange);
                    textHandler.ShowText("Protagonny", id);
                } else {
                    textHandler.ShowText(land.target.speaker, land.target.text);
                }
            } else if(land.target.hasBees) {
                if(player.HasItem("empty beehive")) {
                    player.RemoveItem("empty beehive");
                    player.AddItem("full beehive");
                    if(land.target.beeTime >= 15) {
                        const bt = Math.floor(land.target.beeTime);
                        const nectar = Math.ceil(0.75 * bt + 0.35 * bt * Math.random()); // 0.75 - 1.10x of the time
                        const plantType = land.target.id;
                        if(player.beedFlowers.indexOf(plantType) < 0) { player.beedFlowers.push(plantType); }
                        if(player.nectarCache[plantType] === undefined) {
                            player.nectarCache[plantType] = nectar;
                        } else {
                            player.nectarCache[plantType] += nectar;
                        }
                        if(!land.sawGet) {
                            textHandler.ShowText("", "beesCollected");
                            land.sawGet = true;
                        }
                    } else {
                        textHandler.ShowText("", "beesTooSoon");
                    }
                    land.target.hasBees = false;
                    land.target.beeTime = 0;
                } else {
                    textHandler.ShowText("", "nohives");
                }
            } else if(!land.target.harvested) {
                if(player.HasItem("full beehive")) {
                    player.RemoveItem("full beehive");
                    player.AddItem("empty beehive");
                    land.target.hasBees = true;
                    land.InitializeBees(land.target);
                    land.target.beeTime = 0;
                    if(!land.sawDropoff) {
                        textHandler.ShowText("", "beelease", land.target.name);
                        land.sawDropoff = true;
                    }
                } else {
                    textHandler.ShowText("", "nobees");
                }
            }
        } else if(land.target.type === "person") {
            gfx.ClearLayers(["menuA", "menutext"]);
            if((land.target.x - land.playerX - land.xOffset) < 0) {
                land.target.dir = 1;
            } else {
                land.target.dir = 0;
            }
            land.DrawEntitiesAndGetTarget();
            textHandler.ShowText(land.target.name, land.target.text);
        } else if(land.target.type === "observable") {
            gfx.ClearLayers(["menuA", "menutext"]);
            land.DrawEntitiesAndGetTarget();
            if(land.target.text === "offeringPleased") {
                textHandler.ShowText(land.target.name, land.target.text, land.target.name);
            } else if(land.target.textRange) {
                const id = land.target.id + Math.floor(Math.random() * land.target.textRange);
                textHandler.ShowText("Protagonny", id);
            } else {
                textHandler.ShowText("Protagonny", land.target.text);
            }
        } else if(land.target.type === "boat") {
            game.SwitchTo(boat);
        } else if(land.target.type === "maker") {
            land.ProcessMaker(true);
        } else if(land.target.type === "endgame") {
            textHandler.ShowText("???", "khonsuPray");
        }
    },
    InitializeBees: function(target) {
        const beeY = target.beeY || 0;
        const beeRadius = target.beeRadius || 25;
        const beeDiameter = beeRadius * 2;
        const numBees = Math.ceil(5 + Math.random() * beeRadius / 6);
        target.bees = [];
        for(let i = 0; i < numBees; i++) {
            target.bees.push({
                i: 0,
                x: Math.round(beeRadius - beeDiameter * Math.random()),
                y: beeY + Math.round(beeRadius - beeDiameter * Math.random())
            });
        }
    },
    rightclick: function(fromKeyboard) {
        if(!fromKeyboard) { player.usingMouse = true; }
        if(land.cutscene.active) { return; }
        if(land.target === null) { return; }
        if(land.inChoice) {
            textHandler.MakeChoice(false);
            return;
        }
        if(land.inDialogue) { return; }
        if(land.flowering && !land.target.hasBees && !land.target.harvested && land.target.harvestable && (land.target.type === "observable" || land.target.type === "beeable")) {
            player.AddItem(land.target.id);
            land.target.harvested = true;
            textHandler.ShowText("", "harvest", land.target.name);
        } else if(land.target.type === "maker") {
            land.ProcessMaker(false);
        }
    },
    keyPress: function(key) {
        if(key === player.controls.pause && !land.inDialogue) {
            optionsMenu.Show();
            return;
        }
        if(key === player.controls.confirm) {
            player.usingMouse = false;
            land.click(true);
            return;
        } else if(key === player.controls.cancel) {
            player.usingMouse = false;
            land.rightclick(true);
            return;
        }
        if(land.cutscene.active || land.inDialogue) { return; }
        if(key === player.controls.right) {
            if(land.playerDir === 1) { 
                land.playerX += land.modernTimes ? 3 : 5;
                land.playerAnim.SetMoving();
            } else {
                land.playerDir = 1;
            }
            if(land.playerX > land.maxX) { land.playerX = land.maxX; }
        } else if (key === player.controls.left) {
            if(land.playerDir === 0) {
                land.playerX -= land.modernTimes ? 3 : 5;
                land.playerAnim.SetMoving();
            } else {
                land.playerDir = 0;
            }
            if(land.playerX < 0) { land.playerX = 0; }
        } else { player.usingMouse = false; }
        land.bgMoved = true;
    },
    ProcessMaker: function(primary) {
        const option = primary ? land.target.primary : land.target.secondary;
        switch(option) {
            case "Make Wheat Bread":
                if(player.HasItem("wheat", 5)) {
                    player.RemoveItem("wheat", 5);
                    player.AddItem("bread", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "5 wheat", "a loaf of bread");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "5 wheat"); }
                break;
            case "Make Barley Bread":
                if(player.HasItem("barley", 5)) {
                    player.RemoveItem("barley", 5);
                    player.AddItem("bread", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "5 barley", "a loaf of bread");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "5 barley"); }
                break;
            case "Make Pomegranate Juice":
                if(player.HasItem("pomegranate", 2)) {
                    player.RemoveItem("pomegranate", 2);
                    player.AddItem("pomegranate juice", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "2 pomegranates", "a jug of pomegranate juice");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "2 pomegranates"); }
                break;
            case "Make Date Honey":
                if(player.HasItem("date", 2)) {
                    player.RemoveItem("date", 2);
                    player.AddItem("date honey", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "2 dates", "a jug of date honey");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "2 dates"); }
                break;
            case "Make Linen":
                if(player.HasItem("flax", 3)) {
                    player.RemoveItem("flax", 3);
                    player.AddItem("linen", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "3 flax", "a sheet of linen");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "3 flax"); }
                break;
            case "Make Parchment":
                if(player.HasItem("papyrus", 3)) {
                    player.RemoveItem("papyrus", 3);
                    player.AddItem("parchment", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "3 papyrus", "a sheet of parchment");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "3 papyrus"); }
                break;
            case "Make Scented Oil":
                if(player.HasItem("chamomile", 1) && player.HasItem("chrysanthemum", 1)) {
                    player.RemoveItem("chamomile", 1);
                    player.RemoveItem("chrysanthemum", 1);
                    player.AddItem("scented oil", 1);
                    textHandler.ShowText("Protagonny", "makerSuccess", "a Crown Daisy and a Chamomile Flower", "a bottle of scented oil");
                } else { textHandler.ShowText("Protagonny", "makerNeedMore", "a Crown Daisy and a Chamomile Flower"); }
                break;
            case "Collect Water":
                player.AddItem("water", 2);
                textHandler.ShowText("Protagonny", "makerWater");
                break;
        }
    }
};