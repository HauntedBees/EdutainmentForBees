const textHandler = {
    fontSize: 50, HUDfontSize: 25, 
    currentText: [], remainder: 0, speaker: "",
    currentChoice: null, currentKey: "", 
    ShowText: function(speaker, key, arg, secondArg) {
        gfx.DrawBG("pappy", 0, "menuA");
        gfx.tempSpeaker = "";
        this.currentKey = key;
        this.speaker = speaker;
        if(key === "cat") {
            if(!player.easterEggs.catDog && Math.random() < 0.02) {
                player.easterEggs.catDog = true;
                key = "dog";
            } else {
                key += Math.floor(Math.random() * 10);
            }
        }
        if(arg !== undefined) {
            if(secondArg !== undefined) {
                this.currentText = texts[key].replace("@arg", arg).replace("@arg2", secondArg).split(" ");
            } else {
                this.currentText = texts[key].replace("@arg", arg).split(" ");
            }
        } else {
            this.currentText = texts[key].split(" ");
        }
        this.remainder = 0;
        game.currentInputHandler.inDialogue = true;
        if(this.currentText[0][0] === "?") {
            textHandler.currentChoice = choices[this.currentText[0]];
            textHandler.DrawButton(true, textHandler.currentChoice[0].choice, 0, 0, -0.25, true);
            textHandler.DrawButton(false, textHandler.currentChoice[1].choice, 0, textHandler.HUDfontSize * player.fontSize, -1, true);
            game.currentInputHandler.inChoice = true;
        } else {
            this.remainder = gfx.DrawWrappedText(this.speaker, this.currentText, 0, 20, 0, 984, "#000000", "menutext", this.fontSize * player.fontSize, 200);
        }
    },
    MakeChoice: function(primary) {
        const choiceMade = textHandler.currentChoice[primary ? 0 : 1];
        choiceMade.action();
    },
    MoveToNewText: function(text, arg, secondArg) {
        gfx.ClearLayers(["menuA", "menutext"]);
        game.currentInputHandler.inChoice = false;
        textHandler.ShowText(textHandler.speaker, text, arg, secondArg);
    },
    EndDialog: function() { 
        gfx.ClearLayers(["menuA", "menutext"]);
        game.currentInputHandler.inChoice = false;
        game.currentInputHandler.inDialogue = false;
    },
    Advance: function() {
        gfx.ClearLayer("menutext");
        if(this.remainder < 0) {
            if((game.currentInputHandler.target !== null && game.currentInputHandler.target.isGod === true) && this.currentKey.indexOf("offering") !== 0) {
                const targ = game.currentInputHandler.target;
                textHandler.MoveToNewText("offering", targ.amount + " " + (targ.wantDisplay || targ.want), targ.pronoun);
            } else {
                gfx.ClearLayer("menuA");
                game.currentInputHandler.inDialogue = false;
            }
        } else {
            const prefix = this.currentText[this.remainder][0];
            if(prefix === "~") {
                cutscenes[this.currentText[this.remainder]]();
            } else if(prefix === "?") {
                textHandler.currentChoice = choices[this.currentText[this.remainder]];
                textHandler.DrawButton(true, textHandler.currentChoice[0].choice, 0, 0, -0.25, true);
                textHandler.DrawButton(false, textHandler.currentChoice[1].choice, 0, textHandler.HUDfontSize * player.fontSize, -1, true);
                game.currentInputHandler.inChoice = true;
            } else {
                this.remainder = gfx.DrawWrappedText(this.speaker, this.currentText, this.remainder, 20, 0, 984, "#000000", "menutext", this.fontSize * player.fontSize, 200);
            }
        }
    },
    DrawButton: function(primary, text, x, y, yShift, forceLeft) {
        yShift = yShift || 0;

        if(forceLeft !== true) {
            const ctx = gfx.ctx["menutext"];
            ctx.font = gfx.GetFontSize(textHandler.HUDfontSize * player.fontSize, true) + "px " + gfx.GetFont();
            const xCenter = x - (50 * player.fontSize + ctx.measureText(text).width) / 2.5;
            x = xCenter;
        }

        const myY = y - 20 * yShift - yShift * 50 * player.fontSize;
        const info = textHandler.GetDisplayInfo(primary ? player.controls.confirm: player.controls.cancel);
        gfx.DrawSprite("buttons", info.sx, info.sy, x, myY, "menuA", player.fontSize, true);
        gfx.DrawText(info.text, x + (25 * player.fontSize), myY, true, "#FFFFFF", "menutext", textHandler.HUDfontSize * player.fontSize);
        gfx.DrawText(text, x + (55 * player.fontSize), myY, false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize, true);
    },
    GetDisplayInfo: function(btn, full, forceGamepad) {
        btn = btn.toUpperCase();
        const res = { sx: 0, sy: 0, text: btn };
        if(forceGamepad === undefined ? player.usingGamepad : forceGamepad) {
            switch(btn) {
                case "GAMEPAD0": res.text = "A"; break;
                case "GAMEPAD1": res.text = "B"; break;
                case "GAMEPAD2": res.text = "X"; break;
                case "GAMEPAD3": res.text = "Y"; break;
                case "GAMEPAD4": res.text = "L"; res.sy = 1; break;
                case "GAMEPAD5": res.text = "R"; res.sx = 1; res.sy = 1; break;
                case "GAMEPAD6": res.text = "L2"; res.sy = 1; break;
                case "GAMEPAD7": res.text = "R2"; res.sx = 1; res.sy = 1; break;
                case "GAMEPAD8": res.text = "<"; break;
                case "GAMEPAD9": res.text = ">"; break;
                case "GAMEPAD10": res.text = "L"; res.sx = 1; res.sy = 2; break;
                case "GAMEPAD11": res.text = "R"; res.sx = 1; res.sy = 2; break;
                case "GAMEPAD12": res.text = "^"; res.sy = 2; break;
                case "GAMEPAD13": res.text = "v"; res.sy = 2; break;
                case "GAMEPAD14": res.text = "<"; res.sy = 2; break;
                case "GAMEPAD15": res.text = ">"; res.sy = 2; break;
                case "GAMEPADA0": res.text = "L<"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA1": res.text = "L^"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA2": res.text = "R<"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA3": res.text = "R^"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA4": res.text = "L>"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA5": res.text = "Lv"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA6": res.text = "R>"; res.sx = 1; res.sy = 2; break;
                case "GAMEPADA7": res.text = "Rv"; res.sx = 1; res.sy = 2; break;
            }
        } else if(player.usingMouse && (btn === player.controls.confirm.toUpperCase() || btn === player.controls.cancel.toUpperCase())) {
            res.text = "";
            res.sx = 2;
            if(btn === player.controls.confirm.toUpperCase()) {
                res.sy = player.swapMouseClicks ? 1 : 2;
            } else {
                res.sy = player.swapMouseClicks ? 2 : 1;
            }
        } else {
            res.sx = 1;
            if(btn === " ") { res.text = full ? "Space Bar" : "spc"; }
            if(btn === "ENTER") { res.text = full ? "Enter" : "rtn"; }
        }
        return res;
    },
    GetTimeString: function(seconds) {
        if(seconds < 60) {
            return seconds + "s";
        } else {
            return Math.floor(seconds / 60) + "m" + (seconds % 60) + "s";
        }
    }
};