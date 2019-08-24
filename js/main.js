const GetCopy = function(objKey, x) {
    const obj = Object.assign({}, things[objKey]);
    obj.id = objKey;
    if(x !== undefined) { obj.x = x; }
    if(obj.anim !== undefined) { obj.anim = animHelpers.GetAnim(obj.anim); }
    return obj;
}
const game = {
    numSaveSlots: 10, w: 1024, h: 896, ldiv: null, 
    currentInputHandler: null, target: null, hasSave: false, 
    canvasLayers: ["background", "background2", "characters", "foreground", "menuA", "menuB", "menuC", "menutext", "paintbaby"], 
    SetLoadingText: function(t) { game.ldiv.innerText = t; },
    fullInit: function() {
        game.ldiv = document.getElementById("loadingDiv");
        game.SetLoadingText("Setting up canvases.")
        let canvasObj = {};
        for(let i = 0; i < game.canvasLayers.length; i++) {
            const name = game.canvasLayers[i];
            canvasObj[name] = document.getElementById(name);
        }
        let contextObj = {};
        for(const key in canvasObj) {
            contextObj[key] = canvasObj[key].getContext("2d");
        }
        game.init(canvasObj, contextObj, game.w, game.h);
    },
    init: function(canvasObj, ctxObj, width, height) {
        gfx.canvas = canvasObj;
        gfx.ctx = ctxObj;
        gfx.canvasWidth = width;
        gfx.canvasHeight = height;
        game.SetLoadingText("Loading art assets.");
        gfx.LoadSpriteSheets("img", sheetInfo, this.sheetsLoaded);
    },

    SwitchTo: function(handler, arg, secondArg) {
        clearInterval(game.currentInputHandler.animIdx);
        clearInterval(game.currentInputHandler.gameIdx);
        gfx.ClearAllLayers();
        game.currentInputHandler = handler;
        game.currentInputHandler.Setup(arg, secondArg);
    },
    PartialSwitchTo: function(handler) {
        clearInterval(game.currentInputHandler.animIdx);
        clearInterval(game.currentInputHandler.gameIdx);
        gfx.ClearAllLayers();
        game.currentInputHandler = handler;
        game.currentInputHandler.PartialSetup();
    },

    initListeners: function() {
        if(game.type !== 2) {
            gfx.canvas["paintbaby"].addEventListener("mousemove", input.moveMouse);
            gfx.canvas["paintbaby"].addEventListener("click", input.click);
            gfx.canvas["paintbaby"].addEventListener("contextmenu", input.rightclick);
            document.addEventListener("keypress", input.keyPress);
            document.addEventListener("keydown", input.keyDown);
            document.addEventListener("keyup", input.keyUp);
            document.addEventListener("wheel", input.onWheel);
            window.addEventListener("gamepadconnected", input.gamepadConnected);
            window.addEventListener("gamepaddisconnected", input.gamepadDisconnected);
        }
        setInterval(game.incrementTime, 1000);
    },
    incrementTime: () => player.playTime++,
    sheetsLoaded: function() {
        game.SetLoadingText("Initializing Listeners.");
        game.initListeners();
        game.hasSave = localStorage.getItem("flowering") !== null;
        if(game.hasSave) {
            game.SetLoadingText("> Continue <");
        } else {
            game.SetLoadingText("> New Game <");
        }
        game.currentInputHandler = titleScreen;
    },
    SaveGame: function() {
        localStorage.setItem("player", JSON.stringify(player));
        localStorage.setItem("maxX", JSON.stringify(maxX));
        localStorage.setItem("flowering", JSON.stringify(land.flowering));
        localStorage.setItem("currentPos", JSON.stringify(boat.currentPos));
        localStorage.setItem("honeyCache", JSON.stringify(boat.honeyCache));
    },
    LoadGame: function() {
        game.SetLoadingText("Loading your progress!");
        const savePlayer = localStorage.getItem("player");
        if(savePlayer === null) { return; }
        Object.assign(player, JSON.parse(savePlayer));
        maxX = JSON.parse(localStorage.getItem("maxX"));
        land.flowering = JSON.parse(localStorage.getItem("flowering"));
        boat.currentPos = JSON.parse(localStorage.getItem("currentPos"));
        boat.nextPos = boat.currentPos;
        boat.honeyCache = JSON.parse(localStorage.getItem("honeyCache"));
        game.currentInputHandler = boat;
        game.currentInputHandler.Setup();
    }
};

const titleScreen = {
    topOption: true, 
    Setup: function() { titleScreen.topOption = true; },
    mouseMove: function() { },
    click: function() {
        if(game.hasSave && titleScreen.topOption) {
            game.LoadGame();
        } else {
            titleScreen.NewGame();
        }
    },
    rightclick: function() { },
    keyPress: function(key) {
        if(game.hasSave && [player.controls.up, player.controls.down, player.controls.left, player.controls.right].indexOf(key) >= 0) {
            titleScreen.topOption = !titleScreen.topOption;
            game.SetLoadingText(titleScreen.topOption ? "> Continue <" : "> New Game <");
        }
        if(key === player.controls.confirm || key === player.controls.pause) {
            if(game.hasSave && titleScreen.topOption) {
                game.LoadGame();
            } else {
                titleScreen.NewGame();
            }
        }
    },
    NewGame: function() {
        game.SetLoadingText("Here we go...!");
        game.currentInputHandler = land;
        game.currentInputHandler.Setup("ModernCoffin");
    }
};