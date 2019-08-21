const optionsMenu = {
    lastHandler: null, selY: 0, animIdx: 0, horusFrame: 0, 
    changingControls: false, controlY: false, remappingState: -1, 
    offStates: ["Off", "Off", "Off", "Off", "Still Off", "Still Off", "Still Off", "No, Seriously", "Cut It Out", "Off", "On - Just Kidding", "Off"], offIdx: 0, 
    Show: function() {
        optionsMenu.lastHandler = game.currentInputHandler;
        optionsMenu.animIdx = setInterval(optionsMenu.Animate, 60);
        optionsMenu.selY = 0;
        optionsMenu.offIdx = 0;
        optionsMenu.controlY = false;
        optionsMenu.changingControls = false;
        optionsMenu.remappingState = -1;
        game.SwitchTo(optionsMenu);
    },
    Setup: function() {
        gfx.DrawBG("bg0", 0);
        gfx.DrawSprite("paint", 0, 0, 0, 0, "paintbaby", 1, true);
        optionsMenu.Draw();
    },
    Animate: function() {
        gfx.ClearLayer("menuA");
        if(optionsMenu.remappingState >= 0) { return; }
        optionsMenu.horusFrame = (optionsMenu.horusFrame + 1) % 20;
        let sx = 0, sy = 0;
        switch(optionsMenu.horusFrame) {
            case 0: sx = 0; sy = 0; break;
            case 1: sx = 1; sy = 0; break;
            case 2: sx = 2; sy = 0; break;
            case 3: sx = 3; sy = 0; break;
            case 4: sx = 4; sy = 0; break;
            case 5: sx = 5; sy = 0; break;
            case 6: sx = 0; sy = 1; break;
            case 7: sx = 1; sy = 1; break;
            case 8: sx = 2; sy = 1; break;
            case 9: sx = 3; sy = 1; break;
            case 10: sx = 4; sy = 1; break;
            case 11: sx = 3; sy = 1; break;
            case 12: sx = 2; sy = 1; break;
            case 13: sx = 1; sy = 1; break;
            case 14: sx = 0; sy = 1; break;
            case 15: sx = 5; sy = 0; break;
            case 16: sx = 4; sy = 0; break;
            case 17: sx = 3; sy = 0; break;
            case 18: sx = 2; sy = 0; break;
            case 19: sx = 1; sy = 0; break;
        }
        if(optionsMenu.changingControls) {
            const y = optionsMenu.controlY ? 280 : 180;
            gfx.DrawSprite("horus", sx, sy, 150, y, "menuA", 1);
            gfx.DrawSprite("horus", sx, sy, 874, y, "menuA", 1);
            if(player.usingGamepad) {
                gfx.DrawSprite("horus", sx, sy, 542, 360, "menuA", 0.5);
            } else {
                gfx.DrawSprite("horus", sx, sy, 222, 360, "menuA", 0.5);
                gfx.DrawSprite("horus", sx, sy, 862, 360, "menuA", 0.5);
            }
        } else {
            let y = 230;
            switch(optionsMenu.selY) {
                case 1: y = 370; break;
                case 2: y = 550; break;
                case 3: y = 650; break;
                case 4: y = 800; break;
            }
            gfx.DrawSprite("horus", sx, sy, 150, y, "menuA", 1);
            gfx.DrawSprite("horus", sx, sy, 874, y, "menuA", 1);
        }
    },
    Draw: function() {
        gfx.ClearLayers(["menutext"]);
        if(optionsMenu.remappingState >= 0) {
            optionsMenu.RemapDraw();
        } else if(optionsMenu.changingControls) {
            gfx.DrawText("Controls", 512, -20 * (player.fontSize * player.fontSize / 2), true, "#000000", "menutext", 60 * player.fontSize);
            const optionFontSize = 40 * player.fontSize;
            const smallerFontSize = 30 * player.fontSize;
            const smallestFontSize = 25 * player.fontSize;
            gfx.DrawText("Go Back", 512, 100, true, "#000000", "menutext", optionFontSize);
            gfx.DrawText("Remap Controls", 512, 200, true, "#000000", "menutext", optionFontSize);
            const x = [192, 512, 832];
            const types = ["Keyboard", "Gamepad", "Mouse"];
            for(let i = 0; i < 3; i++) {
                gfx.DrawText(types[i], x[i], 320, true, "#000000", "menutext", smallerFontSize);
                gfx.DrawText("Movement", x[i], 380, true, "#000000", "menutext", smallestFontSize);
                if(i === 0) {
                    if(player.keyboardcontrols.up === "ArrowUp" && player.keyboardcontrols.down === "ArrowDown" &&
                        player.keyboardcontrols.left === "ArrowLeft" && player.keyboardcontrols.right === "ArrowRight") {
                            gfx.DrawText("Arrow Keys", x[i], 430, true, "#000000", "menutext", smallestFontSize);
                    } else {
                        gfx.DrawText(player.keyboardcontrols.up, 120, 430, true, "#000000", "menutext", smallestFontSize);
                        gfx.DrawText(player.keyboardcontrols.left, 170, 430, true, "#000000", "menutext", smallestFontSize);
                        gfx.DrawText(player.keyboardcontrols.down, 220, 430, true, "#000000", "menutext", smallestFontSize);
                        gfx.DrawText(player.keyboardcontrols.right, 270, 430, true, "#000000", "menutext", smallestFontSize);
                    }
                } else if(i === 1) {
                    if(player.gamepadcontrols.defaultMovement) {
                        gfx.DrawSprite("buttons", 0, 2, 482, 470, "menutext", 1);
                        gfx.DrawSprite("buttons", 1, 2, 542, 470, "menutext", 1);
                    } else {
                        const uButton = textHandler.GetDisplayInfo(player.gamepadcontrols.up, true, true);
                        const lButton = textHandler.GetDisplayInfo(player.gamepadcontrols.left, true, true);
                        const dButton = textHandler.GetDisplayInfo(player.gamepadcontrols.down, true, true);
                        const rButton = textHandler.GetDisplayInfo(player.gamepadcontrols.right, true, true);
                        gfx.DrawSprite("buttons", uButton.sx, uButton.sy, 422, 470, "menutext", 1);
                        gfx.DrawSprite("buttons", lButton.sx, lButton.sy, 482, 470, "menutext", 1);
                        gfx.DrawSprite("buttons", dButton.sx, dButton.sy, 542, 470, "menutext", 1);
                        gfx.DrawSprite("buttons", rButton.sx, rButton.sy, 602, 470, "menutext", 1);
                        gfx.DrawText(uButton.text, 422, 420, true, "#FFFFFF", "menutext", smallestFontSize);
                        gfx.DrawText(lButton.text, 482, 420, true, "#FFFFFF", "menutext", smallestFontSize);
                        gfx.DrawText(dButton.text, 542, 420, true, "#FFFFFF", "menutext", smallestFontSize);
                        gfx.DrawText(rButton.text, 602, 420, true, "#FFFFFF", "menutext", smallestFontSize);
                    }
                } else {
                    gfx.DrawText("N/A", x[i], 430, true, "#000000", "menutext", smallestFontSize);
                }
                gfx.DrawText("Action", x[i], 480, true, "#000000", "menutext", smallestFontSize);
                if(i === 0) {
                    const val = textHandler.GetDisplayInfo(player.keyboardcontrols.confirm, true, false);
                    gfx.DrawText(val.text, x[i], 530, true, "#000000", "menutext", smallestFontSize);
                } else if(i === 1) {
                    const val = textHandler.GetDisplayInfo(player.gamepadcontrols.confirm, true, true);
                    gfx.DrawSprite("buttons", val.sx, val.sy, x[i], 570, "menutext", 1);
                    gfx.DrawText(val.text, x[i], 520, true, "#FFFFFF", "menutext", 25);
                } else if(i === 2) {
                    gfx.DrawSprite("buttons", 2, player.swapMouseClicks ? 1 : 2, x[i], 570, "menutext", 1);
                }
                gfx.DrawText("Cancel", x[i], 580, true, "#000000", "menutext", smallestFontSize);
                if(i === 0) {
                    const val = textHandler.GetDisplayInfo(player.keyboardcontrols.cancel, true, false);
                    gfx.DrawText(val.text, x[i], 630, true, "#000000", "menutext", smallestFontSize);
                } else if(i === 1) {
                    const val = textHandler.GetDisplayInfo(player.gamepadcontrols.cancel, true, true);
                    gfx.DrawSprite("buttons", val.sx, val.sy, x[i], 670, "menutext", 1);
                    gfx.DrawText(val.text, x[i], 620, true, "#FFFFFF", "menutext", 25);
                } else if(i === 2) {
                    gfx.DrawSprite("buttons", 2, player.swapMouseClicks ? 2 : 1, x[i], 670, "menutext", 1);
                }
                gfx.DrawText("Options", x[i], 680, true, "#000000", "menutext", smallestFontSize);
                if(i === 0) {
                    const val = textHandler.GetDisplayInfo(player.keyboardcontrols.pause, true, false);
                    gfx.DrawText(val.text, x[i], 730, true, "#000000", "menutext", smallestFontSize);
                } else if(i === 1) {
                    const val = textHandler.GetDisplayInfo(player.gamepadcontrols.pause, true, true);
                    gfx.DrawSprite("buttons", val.sx, val.sy, x[i], 770, "menutext", 1);
                    gfx.DrawText(val.text, x[i], 720, true, "#FFFFFF", "menutext", 25);
                } else if(i === 2) {
                    gfx.DrawText("N/A", x[i], 730, true, "#000000", "menutext", smallestFontSize);
                }
            }
        } else {
            const headerFontSize = 40 * player.fontSize;
            const optionFontSize = 30 * player.fontSize;
            gfx.DrawText("Options", 512, -20 * (player.fontSize * player.fontSize / 2), true, "#000000", "menutext", 60 * player.fontSize);
            gfx.DrawText("Font", 512, 100, true, "#000000", "menutext", headerFontSize);
            gfx.DrawText(gfx.GetFont(), 512, 175, true, "#000000", "menutext", optionFontSize);
            gfx.DrawText("Font Size", 512, 250, true, "#000000", "menutext", headerFontSize);
            gfx.DrawText(player.fontSize + "x", 512, 325, true, "#000000", "menutext", optionFontSize);
            gfx.DrawText("Colorblind", 512, 400, true, "#000000", "menutext", headerFontSize);
            gfx.DrawText(player.colorblind ? "Yes" : "No", 512, 475, true, "#000000", "menutext", optionFontSize);
            gfx.DrawText("Gameplay", 512, 550, true, "#000000", "menutext", headerFontSize);
            gfx.DrawText(optionsMenu.offStates[optionsMenu.offIdx], 512, 625, true, "#000000", "menutext", optionFontSize);
            gfx.DrawText("Change Controls", 512, 700, true, "#000000", "menutext", headerFontSize);
        }
    },
    RemapDraw: function() {
        // 0 ->  7  keyboard up, left, down, right, confirm, cancel, options, click confirm, click cancel
        // 8 -> 15  gamepad up, left, down, right, confirm, cancel, options
        let text = "";
        switch(optionsMenu.remappingState) {
            case 0: text = "Press the UP key."; break;
            case 1: text = "Press the LEFT key."; break;
            case 2: text = "Press the DOWN key."; break;
            case 3: text = "Press the RIGHT key."; break;
            case 4: text = "Press the CONFIRM/ACTION key."; break;
            case 5: text = "Press the CANCEL key."; break;
            case 6: text = "Press the OPTIONS MENU key."; break;
            case 7: text = "Swap left and right click? (Click with the mouse button you want to be the primary button, or press any key to skip this)"; break;
            case 8: text = "Press the UP button."; break;
            case 9: text = "Press the LEFT button."; break;
            case 10: text = "Press the DOWN button."; break;
            case 11: text = "Press the RIGHT button."; break;
            case 12: text = "Press the CONFIRM/ACTION button."; break;
            case 13: text = "Press the CANCEL button."; break;
            case 14: text = "Press the OPTIONS MENU button."; break;
        }
        gfx.DrawWrappedText("", text.split(" "), 0, 50, 0, 924, "#000000", "menutext", 35 * player.fontSize, 896);

    },
    RemapKey: function(key) {
        if(player.usingGamepad && optionsMenu.remappingState < 8) { return; }
        else if(!player.usingGamepad && optionsMenu.remappingState >= 8) { return; } // don't let player switch between input types while remapping!
        switch(optionsMenu.remappingState) {
            case 0: player.keyboardcontrols.up = key; break;
            case 1: player.keyboardcontrols.left = key; break;
            case 2: player.keyboardcontrols.down = key; break;
            case 3: player.keyboardcontrols.right = key; break;
            case 4: player.keyboardcontrols.confirm = key; break;
            case 5: player.keyboardcontrols.cancel = key; break;
            case 6: player.keyboardcontrols.pause = key; break;
            case 8: 
                if(key === "Gamepad12" || key === "GamepadA1") {
                    player.gamepadcontrols = { defaultMovement: true, up: "Gamepad12", left: "Gamepad14", down: "Gamepad13", right: "Gamepad15", 
                    up2: "GamepadA1", left2: "GamepadA0", down2: "GamepadA5", right2: "GamepadA4", confirm: "Gamepad0", cancel: "Gamepad1", pause: "Gamepad9" };
                    optionsMenu.remappingState = 11;
                } else {
                    player.gamepadcontrols.defaultMovement = false;
                    player.gamepadcontrols.up = key;
                    player.gamepadcontrols.up2 = "";
                    player.gamepadcontrols.left2 = "";
                    player.gamepadcontrols.right2 = "";
                    player.gamepadcontrols.down2 = "";
                }
                break;
            case 9: player.gamepadcontrols.left = key; break;
            case 10: player.gamepadcontrols.down = key; break;
            case 11: player.gamepadcontrols.right = key; break;
            case 12: player.gamepadcontrols.confirm = key; break;
            case 13: player.gamepadcontrols.cancel = key; break;
            case 14: player.gamepadcontrols.pause = key; break;
        }
        if(optionsMenu.remappingState === 7 || optionsMenu.remappingState === 14) {
            if(optionsMenu.remappingState === 7) {
                player.controls = player.keyboardcontrols;
            } else {
                player.controls = player.gamepadcontrols;
            }
            optionsMenu.remappingState = -1;
        } else {
            optionsMenu.remappingState++;
        }
        optionsMenu.Draw();
    },
    ChangeOption: function(dir) {
        if(optionsMenu.selY === 0) { // font
            player.font = (player.font + dir + 4) % 4;
        } else if(optionsMenu.selY === 1) { // font size
            if(dir === 1) {
                if(player.fontSize < 2) {
                    player.fontSize = (player.fontSize * 10 + 1) / 10;
                } else {
                    player.fontSize = 1;
                }
            } else if(dir === -1) {
                if(player.fontSize > 1) {
                    player.fontSize = (player.fontSize * 10 - 1) / 10;
                } else {
                    player.fontSize = 2;
                }
            }
        } else if(optionsMenu.selY === 2) { // colorblind
            player.colorblind = !player.colorblind;
        } else if(optionsMenu.selY === 3) { // gameplay off
            if(optionsMenu.offIdx < 11) { optionsMenu.offIdx++; }
        } else if(optionsMenu.selY === 4) { // change controls
            optionsMenu.changingControls = true;
        }
        optionsMenu.Draw();
    },
    Hide: function() {
        // TODO: saving
        game.PartialSwitchTo(optionsMenu.lastHandler);
    },
    keyPress: function(key) {
        if(optionsMenu.remappingState >= 0) {
            optionsMenu.RemapKey(key);
            return;
        }
        if(key === player.controls.confirm) {
            optionsMenu.click();
            return;
        } else if(key === player.controls.cancel || key === player.controls.pause) {
            if(optionsMenu.changingControls) {
                optionsMenu.changingControls = false;
                optionsMenu.Draw();
            } else {
                optionsMenu.Hide();
            }
        }
        if(key === player.controls.down) {
            if(optionsMenu.changingControls) { optionsMenu.controlY = !optionsMenu.controlY; }
            else if(optionsMenu.selY < 4) { optionsMenu.selY++; }
        } else if(key === player.controls.up) {
            if(optionsMenu.changingControls) { optionsMenu.controlY = !optionsMenu.controlY; }
            else if(optionsMenu.selY > 0) { optionsMenu.selY--; }
        }
        if(key === player.controls.right) {
            optionsMenu.ChangeOption(1);
        } else if(key === player.controls.left) {
            optionsMenu.ChangeOption(-1);
        }
    },
    click: function() {
        if(optionsMenu.remappingState >= 0) {
            if(optionsMenu.remappingState === 7) {
                player.swapMouseClicks = false;
                player.controls = player.keyboardcontrols;
                optionsMenu.remappingState = -1;
                optionsMenu.Draw();
            }
        } else if(optionsMenu.changingControls) {
            if(optionsMenu.controlY) { // remap
                optionsMenu.remappingState = player.usingGamepad ? 8 : 0;
                optionsMenu.Draw();
            } else { // go back
                optionsMenu.changingControls = false;
                optionsMenu.Draw();
            }
        } else {
            optionsMenu.ChangeOption(1);
        }
    },
    mouseMove: function() { },
    rightclick: function() {
        if(optionsMenu.remappingState === 7) {
            player.swapMouseClicks = true;
            player.controls = player.keyboardcontrols;
            optionsMenu.remappingState = -1;
            optionsMenu.Draw();
        }
    }
};