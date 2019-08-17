const textHandler = {
    fontSize: 50, HUDfontSize: 25, 
    currentText: [], remainder: 0, speaker: "",
    currentChoice: null, 
    ShowText: function(speaker, key, arg, secondArg) {
        gfx.DrawBG("pappy", 0, "menuA");
        gfx.tempSpeaker = "";
        this.speaker = speaker;
        if(key === "cat") { key += Math.floor(Math.random() * 10) }
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
    MoveToNewText: function(text) {
        gfx.ClearLayers(["menuA", "menutext"]);
        game.currentInputHandler.inChoice = false;
        textHandler.ShowText(textHandler.speaker, text);
    },
    EndDialog: function() { 
        gfx.ClearLayers(["menuA", "menutext"]);
        game.currentInputHandler.inChoice = false;
        game.currentInputHandler.inDialogue = false;
    },
    Advance: function() {
        gfx.ClearLayer("menutext");
        if(this.remainder < 0) {
            gfx.ClearLayer("menuA");
            game.currentInputHandler.inDialogue = false;
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
        gfx.DrawSprite("buttons", 0, 0, x, myY, "menuA", player.fontSize, true);
        gfx.DrawText((primary ? player.controls.confirm: player.controls.cancel).toUpperCase(), x + (25 * player.fontSize), myY, true, "#FFFFFF", "menutext", textHandler.HUDfontSize * player.fontSize);
        gfx.DrawText(text, x + (55 * player.fontSize), myY, false, "#000000", "menutext", textHandler.HUDfontSize * player.fontSize);
    },
    GetTimeString: function(seconds) {
        if(seconds < 60) {
            return seconds + "s";
        } else {
            return Math.floor(seconds / 60) + "m" + (seconds % 60) + "s";
        }
    }
};