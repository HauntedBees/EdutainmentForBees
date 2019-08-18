let gpVals = {
    triggerMin: 0.5,
    deadZones: [0.25, 0.25, 0.25, 0.25]
};
let input = {
    BUTTONDELAY: 10, 
    FloorPoint: p => { p.x = Math.floor(p.x); p.y = Math.floor(p.y); },
    click: function(e) {
        e.preventDefault();
        game.currentInputHandler.click();
    },
    rightclick: function(e) {
        e.preventDefault();
        game.currentInputHandler.rightclick();
    },
    moveMouse: function(e) {
        if(player.options.ignoreMouse === 1) { return; }
        const p = input.getMousePos(e);
        if(game.currentInputHandler.mouseMove(p)) { return; }
    },
    getMousePos: function(e) {
        const rect = gfx.canvas["menutext"].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return { x: Math.floor(x / 16) / gfx.scale, y: Math.floor(y / 16) / gfx.scale, rawX: x / gfx.scale, rawY: y / gfx.scale };
    },
    onWheel: function(e) {
        if(player.options.ignoreMouse === 1) { return; }
        if(e.deltaY === 0) { return; }
        if(game.currentInputHandler.MouseWheel === undefined) { return; }
        game.currentInputHandler.MouseWheel(e.deltaY > 0);
    },

    justPressed: {}, keys: {}, mainKey: undefined,
    IsFreshPauseOrConfirmPress: () => (input.justPressed[player.controls.pause] === 0) || (input.justPressed[player.controls.confirm] === 0),
    setMainKey: function(key) {
        if(key === undefined) {
            if(input.keys[player.controls.up] !== undefined) { input.mainKey = 0; }
            else if(input.keys[player.controls.left] !== undefined) { input.mainKey = 1; }
            else if(input.keys[player.controls.down] !== undefined) { input.mainKey = 2; }
            else if(input.keys[player.controls.right] !== undefined) { input.mainKey = 3; }
            else { input.mainKey = undefined; }
        } else if(input.mainKey === undefined) {
            input.mainKey = [player.controls.up, player.controls.left, player.controls.down, player.controls.right].indexOf(key);
        }
    },
    clearAllKeys: function() {
        input.mainKey = undefined;
        for(const key in input.keys) {
            clearInterval(input.keys[key]);
            input.keys[key] = undefined;
        }
    },
    IsIgnoredByKeyPress(key) {
        if(key.indexOf("Arrow") === 0) { return true; }
        if(key[0] === "F" && key.length > 1) { return true; }
        return ["Alt", "Shift", "Control", "CapsLock", "Tab", "Escape", "Backspace", "NumLock",
                "Delete", "End", "PageDown", "PageUp", "Home", "Insert", "ScrollLock", "Pause"].indexOf(key) >= 0;
    },
    GetKey: e => e.key.length === 1 ? e.key.toLowerCase() : e.key,
    keyDown: function(e) {
        const key = input.GetKey(e);
        input.justPressed[key] = input.justPressed[key] === undefined ? 0 : input.justPressed[key] + 1;
        if(player.options.controltype === 1) { input.SwitchControlType(0); }
        if([player.controls.up, player.controls.left, player.controls.down, player.controls.right].indexOf(key) >= 0 && game.currentInputHandler.freeMovement) {
            if(player.options.stickyMovement === 1) { return; }
            input.setMainKey(key);
            if(input.keys[key] !== undefined) { return; }
            input.keys[key] = setInterval(function() {
                game.currentInputHandler.keyPress(key, e.shiftKey);
            }, input.BUTTONDELAY);
        } else if(input.IsIgnoredByKeyPress(key)) { game.currentInputHandler.keyPress(key, e.shiftKey); }
    },
    keyUp: function(e) {
        const key = input.GetKey(e);
        input.justPressed[key] = -1;
        if([player.controls.up, player.controls.left, player.controls.down, player.controls.right].indexOf(key) >= 0 && game.currentInputHandler.freeMovement) {
            if(player.options.stickyMovement === 1) { return; }
            clearInterval(input.keys[key]);
            input.keys[key] = undefined;
            input.setMainKey();
        }
        if(game.currentInputHandler.freeMovement) {
            if(input.keys[player.controls.up] === undefined 
                && input.keys[player.controls.left] === undefined 
                && input.keys[player.controls.right] === undefined 
                && input.keys[player.controls.down] === undefined) {
                    //worldmap.refreshMap(); // TODO: why is this here
                }
        }
    },
    keyPress: function(e) {
        const key = input.GetKey(e);
        if([player.controls.up, player.controls.left, player.controls.down, player.controls.right].indexOf(key) >= 0 && game.currentInputHandler.freeMovement) {
            if(player.options.stickyMovement === 1) {
                input.StickyKeyPress(key);
            }
            return;
        }
        game.currentInputHandler.keyPress(key, e.shiftKey);
        input.justPressed[key]++;
    },
    StickyKeyPress: function(key) {
        if(input.keys[key] !== undefined) { // turn off
            clearInterval(input.keys[key]);
            input.keys[key] = undefined;
            input.setMainKey();
        } else { // turn on
            input.mainKey = undefined;
            if(input.keys[player.controls.down] !== undefined && key === player.controls.up) {
                clearInterval(input.keys[player.controls.down]);
                input.keys[player.controls.down] = undefined;
            } else if(input.keys[player.controls.up] !== undefined && key === player.controls.down) {
                clearInterval(input.keys[player.controls.up]);
                input.keys[player.controls.up] = undefined;
            } else if(input.keys[player.controls.left] !== undefined && key === player.controls.right) {
                clearInterval(input.keys[player.controls.left]);
                input.keys[player.controls.left] = undefined;
            } else if(input.keys[player.controls.right] !== undefined && key === player.controls.left) {
                clearInterval(input.keys[player.controls.right]);
                input.keys[player.controls.right] = undefined;
            }
            input.setMainKey(key);
            input.keys[key] = setInterval(function() {
                game.currentInputHandler.keyPress(key);
            }, input.BUTTONDELAY);
        }
    },
    SwitchControlType: function(newType) {
        player.options.controltype = newType;
        switch(newType) {
            case 1: player.usingGamepad = true; player.controls = player.gamepadcontrols; break;
            case 0: player.usingGamepad = false; player.controls = player.keyboardcontrols; break;
        }
    },
    gamepads: {}, gamepadQueryIdx: -1,
    gamepadButtons: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // buttons 0 - 15
        0, 0, 0, 0, // negative axes Lx Ly Rx Ry
        0, 0, 0, 0], // positive axes Lx Ly Rx Ry
    gamepadConnected: function(e) {
        input.gamepads[e.gamepad.index] = e.gamepad;
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
        input.SwitchControlType(1);
        input.gamepadQueryIdx = setInterval(input.QueryGamepads, 10);
    },
    gamepadDisconnected: function(e) {
        delete input.gamepads[e.gamepad.index];
        let hasKeys = false;
        for(const key in input.gamepads) { hasKeys = true; break; }
        if(!hasKeys) {
            console.log("no controllers left!");
            clearInterval(input.gamepadQueryIdx);
            input.gamepadQueryIdx = -1;
            input.SwitchControlType(0);
        }
    },
    SwapPrimaryAndSecondaryGamepadControls: function() {
        const up2 = player.controls.up2;
        const left2 = player.controls.left2;
        const down2 = player.controls.down2;
        const right2 = player.controls.right2;
        player.controls.up2 = player.controls.up;
        player.controls.left2 = player.controls.left;
        player.controls.down2 = player.controls.down;
        player.controls.right2 = player.controls.right;
        player.controls.up = up2;
        player.controls.left = left2;
        player.controls.down = down2;
        player.controls.right = right2;
    },
    QueryGamepads: function() {
        const gamepads = navigator.getGamepads();
        if(gamepads === undefined || gamepads === null) { return; }
        const buttonsDown = [];
        let forceDeadzone = player.options.deadZone || 0; // oh no game-specific code; my beautiful game-agnostic control code :'()
        switch(forceDeadzone) {
            case 1: forceDeadzone = 0.3333; break;
            case 2: forceDeadzone = 0.5; break;
            case 3: forceDeadzone = 0.6666; break;
            case 4: forceDeadzone = 0.75; break;
        }
        for(const gp in gamepads) {
            if(gamepads[gp] === null || gamepads[gp].id === undefined) { continue; }
            gamepads[gp].buttons.forEach((e, i) => {
                if(e.pressed && e.value >= gpVals.triggerMin && i < 16) { buttonsDown.push(i); }
            });
            gamepads[gp].axes.forEach((e, i) => {
                if(e <= -(forceDeadzone || gpVals.deadZones[i])) {
                    buttonsDown.push(16 + i);
                } else if(e >= (forceDeadzone || gpVals.deadZones[i])) {
                    buttonsDown.push(20 + i);
                }
            });
        }
        if(buttonsDown.length > 0 && player.options.controltype === 0) { input.SwitchControlType(1); } // oh wait it was already ruiend lol
        for(let i = 0; i < input.gamepadButtons.length; i++) {
            const prevState = input.gamepadButtons[i];
            const btn = (i < 16) ? ("Gamepad" + i) : ("GamepadA" + (i - 16));
            const movements = [player.controls.up, player.controls.left, player.controls.down, player.controls.right];
            const altMovements = [player.controls.up2, player.controls.left2, player.controls.down2, player.controls.right2];
            if(buttonsDown.indexOf(i) < 0 && buttonsDown.indexOf(-i) < 0) { // not pressed
                if(prevState > 0) { // just released
                    input.gamepadButtons[i] = -1;
                    input.justPressed[btn] = -1;
                    let currMovements = movements;
                    if(altMovements.indexOf(btn) >= 0) {
                        currMovements = altMovements;
                        input.SwapPrimaryAndSecondaryGamepadControls();
                    }
                    if(currMovements.indexOf(btn) >= 0 && game.currentInputHandler.freeMovement) {
                        clearInterval(input.keys[btn]);
                        input.keys[btn] = undefined;
                        input.setMainKey();
                    }
                } else { input.gamepadButtons[i] = 0; } // not pressed
            } else { // pressed
                input.gamepadButtons[i]++;
                const btnVal = input.gamepadButtons[i];
                if(btnVal === 1 || (btnVal >= 45 && btnVal % 15 === 0)) {
                    input.justPressed[btn] = input.justPressed[btn] === undefined ? 0 : input.justPressed[btn] + 1;
                    let currMovements = movements;
                    if(altMovements.indexOf(btn) >= 0) {
                        currMovements = altMovements;
                        input.SwapPrimaryAndSecondaryGamepadControls();
                    }
                    if(currMovements.indexOf(btn) >= 0 && game.currentInputHandler.freeMovement) {
                        input.setMainKey(btn);
                        if(input.keys[btn] !== undefined) { return; }
                        input.keys[btn] = setInterval(function() {
                            game.currentInputHandler.keyPress(btn);
                        }, input.BUTTONDELAY);
                    } else { game.currentInputHandler.keyPress(btn); }
                }
            }
        }
    }
};