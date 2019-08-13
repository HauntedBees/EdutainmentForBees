const land = {
    animIdx: 0, gameIdx: 0, modernTimes: false, freeMovement: true, cutscene: { active: false }, 
    yPos: 780, btnPos: 444, xOffset: 500, maxX: 7678, 
    playerX: 0, playerDir: 1, playerAnim: animHelpers.GetPlayerAnim(), 
    entities: [], target: null,
    inDialogue: false, inChoice: false, 
    bgMoved: true, // max x ~= 7678
    Setup: function(location) {
        land.modernTimes = location.indexOf("Modern") === 0;
        land.animIdx = setInterval(land.Animate, 30);
        land.gameIdx = setInterval(land.RunGame, 1000);
        land.entities = GetPlaceEntities(location, land.modernTimes);
        land.bgMoved = true;
        land.target = null;
        land.inDialogue = false;
        land.inChoice = false;
        land.playerX = land.modernTimes ? 2240 : 0;
        land.playerDir = 1;
        land.cutscene = { active: false };
        land.maxX = maxX[location] || 7678;
        if(autoPlays[location] !== undefined) {
            land.Animate();
            autoPlays[location]();
        }
    },
    RunGame: function() {
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(e.hasBees) {
                e.beeTime++;
            }
        }
    },
    Animate: function() {
        if(land.inDialogue) { return; }
        if(land.bgMoved) {
            land.bgMoved = false;
            gfx.clearLayer("background");
            if(land.modernTimes) {
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
        gfx.clearSome(["menuA", "menutext"]);
        land.target = land.DrawEntitiesAndGetTarget();
        if(land.target !== null && !land.cutscene.active) {
            switch(land.target.type) {
                case "auto":
                    textHandler.ShowText(land.target.speaker, land.target.text);
                    land.target.type = "bg";
                    break;
                case "beeable":
                    if(land.target.hasBees) {
                        textHandler.DrawButton(true, "Collect Bees (" + textHandler.GetTimeString(land.target.beeTime) + ")", 525, land.btnPos, 1);
                    } else {
                        textHandler.DrawButton(true, "Release Bees (" + land.target.name + ")", 525, land.btnPos, 1);
                    }
                    break;
                case "observable":
                    textHandler.DrawButton(true, "Look (" + land.target.name + ")", 525, land.btnPos, 1);
                    break;
                case "person":
                    textHandler.DrawButton(true, "Talk (" + land.target.name + ")", 525, land.btnPos, 1);
                    break;
                case "boat":
                    textHandler.DrawButton(true, "Board Ship", 525, land.btnPos, 1);
                    break;
            }
        }
    },
    DrawEntitiesAndGetTarget: function() {
        let potentialTarget = null, closestPos = 150;
        gfx.clearLayer("characters");
        for(let i = 0; i < land.entities.length; i++) {
            const e = land.entities[i];
            if(e.anim !== undefined) {
                gfx.DrawSprite2(e.sprite, e.anim.GetFrame(e.dir), e.x - land.playerX, land.yPos + (e.y ? e.y : 0), "characters");
            } else if(e.sprite !== "") {
                gfx.DrawSprite(e.sprite, e.dir, 0, e.x - land.playerX, land.yPos + (e.y ? e.y : 0), "characters");
                // TODO: draw bees if they have bees on them
            }
            const dist = Math.abs(e.x - land.playerX - land.xOffset);
            if(dist <= closestPos) { // if something's in range, make it interactable
                potentialTarget = e;
                closestPos = dist;
            }
        }
        if(land.cutscene.active) {
            land.cutscene.Process();
        } else {
            gfx.DrawSprite2(land.modernTimes ? "playerModern" : "player", land.playerAnim.GetFrame(land.playerDir), land.xOffset, land.yPos, "characters");
        }
        return potentialTarget;
    },
    mouseMove: function() { },
    click: function() {
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
            if(land.target.hasBees) {
                if(player.HasItem("empty beehive")) {
                    player.RemoveItem("empty beehive");
                    player.AddItem("full beehive");
                    if(land.target.beeTime >= 15) {
                        const nectar = Math.ceil(0.75 * land.target.beeTime + 0.35 * land.target.beeTime * Math.random()); // 0.75 - 1.10x of the time
                        const plantType = land.target.id;
                        if(player.nectarCache[plantType] === undefined) {
                            player.nectarCache[plantType] = nectar;
                        } else {
                            player.nectarCache[plantType] += nectar;
                        }
                        textHandler.ShowText("", "beesCollected");
                    } else {
                        textHandler.ShowText("", "beesTooSoon");
                    }
                    land.target.hasBees = false;
                    land.target.beeTime = 0;
                } else {
                    textHandler.ShowText("", "nohives");
                }
            } else {
                if(player.HasItem("full beehive")) {
                    player.RemoveItem("full beehive");
                    player.AddItem("empty beehive");
                    land.target.hasBees = true;
                    land.target.beeTime = 0;
                    textHandler.ShowText("", "beelease", land.target.name);
                } else {
                    textHandler.ShowText("", "nobees");
                }
            }
        } else if(land.target.type === "person") {
            gfx.clearSome(["menuA", "menutext"]);
            if((land.target.x - land.playerX - land.xOffset) < 0) {
                land.target.dir = 1;
            } else {
                land.target.dir = 0;
            }
            land.DrawEntitiesAndGetTarget();
            textHandler.ShowText(land.target.name, land.target.text);
        } else if(land.target.type === "observable") {
            gfx.clearSome(["menuA", "menutext"]);
            land.DrawEntitiesAndGetTarget();
            textHandler.ShowText(land.target.speaker, land.target.text);
        } else if(land.target.type === "boat") {
            game.SwitchTo(boat);
        }
    },
    rightclick: function() {
        if(land.cutscene.active) { return; }
        if(land.target === null) { return; }
        if(land.inChoice) {
            textHandler.MakeChoice(false);
            return;
        }
    },
    keyPress: function(key) {
        if(key === player.controls.confirm) {
            land.click();
            return;
        } else if(key === player.controls.cancel) {
            land.rightclick();
            return;
        }
        if(land.cutscene.active) { return; }
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
        }
        land.bgMoved = true;
    }
};