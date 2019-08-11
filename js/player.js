let player = {
    fontSize: 1,
    inventory: {
        "full beehive": 14,
        "empty beehive": 7,
        "incense": 1
    }, 
    honeys: [], 
    nectarCache: {}, 
    HasItem: function(item, amount) {
        amount = amount || 1;
        if(player.inventory[item] === undefined) { return false; }
        return player.inventory[item] >= amount;
    },
    RemoveItem: function(item, amount) {
        amount = amount || 1;
        if(player.inventory[item] === undefined) {
            player.inventory[item] = 0;
        } else {
            player.inventory[item] -= amount;
        }
    },
    AddItem: function(item, amount) {
        amount = amount || 1;
        if(player.inventory[item] === undefined) {
            player.inventory[item] = amount;
        } else {
            player.inventory[item] += amount;
        }
    },

    controls: { up: "w", left: "a", down: "s", right: "d", up2: "", left2: "", down2: "", right2: "", confirm: "z", cancel: "x", pause: "Enter" },
    keyboardcontrols: { up: "w", left: "a", down: "s", right: "d", up2: "", left2: "", down2: "", right2: "", confirm: "z", cancel: "x", pause: "Enter" },
    gamepadcontrols: { up: "Gamepad12", left: "Gamepad14", down: "Gamepad13", right: "Gamepad15", up2: "GamepadA1", left2: "GamepadA0", down2: "GamepadA5", right2: "GamepadA4", confirm: "Gamepad0", cancel: "Gamepad1", pause: "Gamepad9" },

    monies: 1000, playTime: 0, visitedMaps: [], openedChests: [],
    clearedEntities: [], achievements: [], failedEntities: [], 
    questsCleared: [], activeQuests: {},
    lastInn: "start", lastSaveSlot: 0, dreamBonus: 0, 
    options: {
        difficulty: 1, 
        music: 10, sound: 10,
        controltype: 0, canSayFuck: 0, deadZone: 0, analogDPad: 1, 
        stickyMovement: 0, ignoreMouse: 0, virtualController: 0, 
        font: 0, fontSize: 0, resolution: 1, fullscreen: 0, gfxfilter: 0,
        coverColor: 0, coverMode: 0, 
    },
    getPlayTimeString: function(time) {
        time = time || this.playTime;
        var hours = Math.floor(time / 3600);
        time -= hours * 3600;
        var minutes = Math.floor(time / 60);
        time -= minutes * 60;
        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (time < 10 ? "0" : "") + time;
    },
    hasQuest: q => player.activeQuests[q] !== undefined,
    hasQuestState: (q, state) => player.activeQuests[q] !== undefined && state === player.activeQuests[q],
    completedQuest: q => player.questsCleared.indexOf(q) >= 0,
    hasOrHasHadQuest: q => player.questsCleared.indexOf(q) >= 0 || player.activeQuests[q] !== undefined,
};