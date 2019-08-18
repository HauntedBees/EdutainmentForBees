let player = {
    font: 0, fontSize: 1, colorblind: false, 
    usingGamepad: false, usingMouse: false, 
    controls: { up: "w", left: "a", down: "s", right: "d", confirm: "z", cancel: "x", pause: "Enter" },
    keyboardcontrols: { up: "w", left: "a", down: "s", right: "d", confirm: "z", cancel: "x", pause: "Enter" },
    gamepadcontrols: { defaultMovement: true, up: "Gamepad12", left: "Gamepad14", down: "Gamepad13", right: "Gamepad15", 
                       up2: "GamepadA1", left2: "GamepadA0", down2: "GamepadA5", right2: "GamepadA4", confirm: "Gamepad0", cancel: "Gamepad1", pause: "Gamepad9" },
    swapMouseClicks: false, 
    inventory: {
        "full beehive": 5,
        "empty beehive": 0,
        "incense": 5
    }, 
    honeys: [], revealedFunFacts: [],
    nectarCache: {}, currentDay: 1,
    easterEggs: {
        catDog: false
    },
    beedFlowers: [], 
    clearedChievos: [], 
    chievos: {
        "Taremu": ["shop2", "bastetAltar", "sekhmetAltar", "maahesAltar"]
    },
    ClearChievo: function(place, id) {
        player.clearedChievos.push(id);
        const idx = player.chievos[place].indexOf(id);
        player.chievos[place].splice(idx, 1);
    },
    AddItem: function(item, amount) {
        amount = amount || 1;
        if(player.inventory[item] === undefined) {
            player.inventory[item] = amount;
        } else {
            player.inventory[item] += amount;
        }
    },
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
    AddHoney: function(honey) {
        player.honeys.push(honey);
        player.AddItem("honey", 1);
    },
    HasHoney: function(type, grade, amount) {
        amount = amount || 1;
        if(type === "any" && grade === 0) { return player.HasItem("honey", amount); }
        return player.honeys.filter(e => (type === "any" || e.type === type) && e.grade >= grade).length >= amount;
    },
    RemoveHoney: function(type, grade, amount) {
        amount = amount || 1;
        player.RemoveItem("honey", amount);
        if(type === "any" && grade === 0) {
            for(let i = 0; i < amount; i++) {
                player.honeys.pop();
            }
        } else {
            let i = player.honeys.length - 1, remaining = amount;
            while(i > 0 && remaining > 0) {
                const honey = player.honeys[i];
                if(honey.type === type && honey.grade >= grade) {
                    player.honeys.splice(i, 1);
                    remaining -= 1;
                }
                i -= 1;
            }
        }
    },
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