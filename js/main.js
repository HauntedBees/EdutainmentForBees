const GetCopy = function(objKey, x) {
    const obj = Object.assign({}, things[objKey]);
    obj.id = objKey;
    if(x !== undefined) { obj.x = x; }
    if(obj.anim !== undefined) { obj.anim = animHelpers.GetAnim(obj.anim); }
    return obj;
}
const game = {
    numSaveSlots: 10, w: 1024, h: 896, tilew: 16, tileh: 14, ldiv: null, 
    currentInputHandler: null, target: null, language: "en-us",
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
        game.init(canvasObj, contextObj, game.w, game.h, 16, 14);
    },
    init: function(canvasObj, ctxObj, width, height, tilewidth, tileheight) {
        gfx.canvas = canvasObj;
        gfx.ctx = ctxObj;
        gfx.canvasWidth = width;
        gfx.canvasHeight = height;
        gfx.tileWidth = tilewidth;
        gfx.tileHeight = tileheight;
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
        game.SetLoadingText("> New Game <");
        game.currentInputHandler = titleScreen;
        titleScreen.NewGame();
        //game.currentInputHandler = land;
        //game.currentInputHandler.Setup("Waset", true);
        //game.currentInputHandler.Setup("Testbench", true);
        //game.currentInputHandler.Setup("CutsceneWaset");
        //game.currentInputHandler.Setup("ModernCoffin");
    }
};

const titleScreen = {
    mouseMove: function() { },
    click: function() { titleScreen.NewGame(); },
    rightclick: function() { titleScreen.NewGame(); },
    keyPress: function() { titleScreen.NewGame(); },
    NewGame: function() {
        game.SetLoadingText("Here we go...!");
        game.currentInputHandler = land;
        game.currentInputHandler.Setup("Waset", true);
    }
};

/*
Sources:
http://hieroglyphs.net/cgi/dictionary_lookup_free.pl
https://www.britannica.com/place/Nile-River/Plant-and-animal-life
https://en.wikipedia.org/wiki/Hyksos
http://www.legendsandchronicles.com/ancient-civilizations/ancient-egypt/ancient-egyptian-education/
https://www.aldokkan.com/geography/fayum.htm
https://fayoumegypt.com/obelisk-of-senusret-i/
https://en.wikipedia.org/wiki/Abydos,_Egypt
https://www.britannica.com/topic/Osiris-Egyptian-god
https://en.wikipedia.org/wiki/Khnum
https://en.wikipedia.org/wiki/Anuket

https://en.wikipedia.org/wiki/Umm_El_Qa%27ab
http://www.touregypt.net/featurestories/khasekhem.htm
https://en.wikipedia.org/wiki/Seth-Peribsen
https://en.wikipedia.org/wiki/Mehen_(game)
https://en.wikipedia.org/wiki/Qa%27a
https://en.wikipedia.org/wiki/Semerkhet
https://en.wikipedia.org/wiki/Ka_(pharaoh)
https://en.wikipedia.org/wiki/Prehistoric_Egypt

http://beadcollector.net/cgi-bin/anyboard.cgi?fvp=/openforum/&cmd=get&cG=6323239383&zu=3632323838&v=2&gV=0&p=
https://www.nationalgeographic.com/news/2015/08/150821-watermelon-fruit-history-agriculture/

https://www.ancient.eu/amun/
https://en.wikipedia.org/wiki/Lettuce#History
https://en.wikipedia.org/wiki/Memphis,_Egypt

http://www.virtualkemet.com/market/index.htm

https://en.wikipedia.org/wiki/Leontopolis
https://ancientegyptonline.co.uk/maahes/
https://religion.wikia.org/wiki/Leontopolis
http://egyptian-gods.org/egyptian-gods-sekhmet/
https://en.wikipedia.org/wiki/Apep

https://en.wikipedia.org/wiki/Pomegranate
https://en.wikipedia.org/wiki/Nymphaea_caerulea
https://en.wikipedia.org/wiki/Nymphaea_lotus

https://www.honey.com/about-honey/how-honey-is-made
https://sciencing.com/do-flowers-bees-other-5796565.html
https://www.lexico.com/en/definition/pollen

https://www.ducksters.com/history/ancient_egypt/cities_of_ancient_egypt.php

https://www.britannica.com/place/Egypt/Plant-and-animal-life
https://en.wikipedia.org/wiki/List_of_crop_plants_pollinated_by_bees
http://www.primaryhomeworkhelp.co.uk/egypt/farming.htm
https://quatr.us/egypt/ancient-egyptian-plants-papyrus-palm-trees.htm
https://www.theflowerexpert.com/content/flowerbusiness/flowergrowersandsellers/national-native-popular-flowers-of-egypt
http://www.touregypt.net/featurestories/flowers.htm
https://academic.oup.com/jn/article/131/3/951S/4687053#111851571
https://beeaware.org.au/pollination/pollinator-reliant-crops/onions/
https://www.onions-usa.org/all-about-onions/history-of-onions
https://www.ancient.eu/article/1026/clergy-priests--priestesses-in-ancient-egypt/
https://ancientstandard.com/2007/07/02/come-to-crocodilopolis-no-we-are-not-making-this-up-3000-%e2%80%93-30-bc/

http://pcela.rs/Egyptian_Beekeeping_1.htm
https://egyptmanchester.wordpress.com/2012/08/10/beekeeping-in-ancient-egypt-and-today/
https://egypt.mrdonn.org/grainbanks.html
http://egypt-trade.wikidot.com/
https://egypt.mrdonn.org/trade.html
http://streaming.discoveryeducation.com/braingames/iknowthat/Stickerbook/sbr/Ancient%20Egypt/Backgrounds/DiscoverMore/marketplace.htm#Market
https://www.alamy.com/stock-photo/ancient-egypt-market-engraving.html
http://blog.press.princeton.edu/wp-content/uploads/2019/06/Capture.jpg

https://pcela.rs/Egyptian_Beekeeping_1.htm
https://www.planetbee.org/planet-bee-blog//the-sacred-bee-bees-in-ancient-egypt
https://savannahbee.com/blog/ancient-egyptian-beekeeping

https://books.google.com/books?id=8Zx1CgAAQBAJ&printsec=frontcover#v=onepage&q&f=false

https://www.historyextra.com/period/ancient-egypt/life-in-ancient-egypt-what-was-it-like/

http://virtualkemet.com/#newkingdom <-- add .htm to links
*/