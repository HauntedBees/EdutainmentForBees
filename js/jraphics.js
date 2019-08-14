const sheetInfo = {
    "player": { w: 200, h: 260 },
    "playerModern": { w: 200, h: 260 },
    "playerScene1": { w: 200, h: 260 },
    "pers2tiny": { w: 150, h: 195 },
    "buttons": { w: 50, h: 50 },
    "headico": { w: 45, h: 38 },
    "circle": { w: 15, h: 15 },
    "coffin": { w: 267, h: 111 },
    "beejar": { w: 61, h: 71 },
    "boatboat": { w: 1024, h: 350 }, // https://commons.wikimedia.org/wiki/File:EgyptTombOarboat.jpg
    "amenhotep": { w: 164, h: 226 }, // https://www.metmuseum.org/toah/works-of-art/15.5.1/ 
    "pappy": { w: 1024, h: 300 }, // https://pixabay.com/illustrations/parchment-papyrus-dirty-old-dirt-880314/
    "water": { w: 1920, h: 347 }, // https://opengameart.org/content/painted-backdrop-sea-and-sky-1920-x-1200
    "shore": { w: 610, h: 225 }, 
    "shore2": { w: 161, h: 122 }, 
    "oar": { w: 308, h: 162 }, 
    "row": { w: 424, h: 294 }, 
    "paint": { w: 1024, h: 896 }, // https://commons.wikimedia.org/wiki/File:2011-02-11_Stucco_paint_texture.jpg

    "pers": { w: 100, h: 225 }, // https://smarthistory.org/ancient-egypt/
    "date": { w: 241, h: 337 }, // https://en.wikipedia.org/wiki/File:Emblem_of_Saudi_Arabia.svg
    "map": { w: 1024, h: 896 }, // https://en.wikipedia.org/wiki/File:Egypt_1450_BC.svg https://pixabay.com/photos/paper-old-texture-parchment-1074131/
    "hive": { w: 100, h: 100 }, // https://www.beeculture.com/catch-buzz-worlds-oldest-beehives-farmed-israel-time-prophet-elisha/
    "honeycomb": { w: 100, h: 54 }, // https://www.flickr.com/photos/30478819@N08/47933160963
    "beeswax": { w: 100, h: 77 }, // https://www.flickr.com/photos/64636759@N07/8511157727
    "justabox": { w: 200, h: 141 }, // https://www.nms.ac.uk/explore-our-collections/stories/world-cultures/ancient-egyptian-collection/ancient-egyptian-collection/box-of-amenhotep-ii
    "ladder": { w: 66, h: 200 } // https://www.fixfastusa.com/news-blog/history-of-the-ladder/
};
for(let i = 0; i <= 4; i++) { sheetInfo["bg" + i] = { w: 3584, h: 896 }; } // https://opengameart.org/content/bevouliin-pyramid-free-game-background-for-game-developers
for(let i = 0; i <= 3; i++) { sheetInfo["bgM" + i] = { w: 3584, h: 896 }; } // https://opengameart.org/content/classical-ruin-tiles-0
const fontMults = {
    "OpenDyslexic": {
        space: 1.5,
        top: 1.25,
        borderTop: 0
    },
    "Mariana": {
        space: 1.25,
        top: 1,
        borderTop: 0
    },
    "NewAthenaUnicode": {
        space: 1.25,
        top: 1,
        borderTop: 0
    },
    "Orkney": {
        space: 1.25,
        top: 1.25,
        borderTop: 0.2
    }
}
const gfx = {
    canvas: [],  ctx: [],
    canvasHeight: 0, canvasWidth: 0,
    tileWidth: 0, tileHeight: 0, scale: 4,
    spritesheets: [],
    loadSpriteSheets: function(source, paths, callback) {
        count = 0; source = source || "img";
        const plen = Object.keys(paths).length;
        for(const path in paths) {
            const f = function(path, len) {
                const img = new Image();
                img.onload = function() {
                    gfx.spritesheets[path] = this;
                    count += 1;
                    if(count === len) { callback(); }
                };
                img.src = `${source}/${path}.png`;
            };
            f(path, plen);
        }
    },
    GetFont: () => "Orkney", //"Mariana",//player.options.font === 1 ? "OpenDyslexic" : "PressStart2P",
    //GetFont: () => "Mariana", //"Mariana",//player.options.font === 1 ? "OpenDyslexic" : "PressStart2P",
    //GetFont: () => "OpenDyslexic", //"Mariana",//player.options.font === 1 ? "OpenDyslexic" : "PressStart2P",
    GetBlack: () => (player.IsMonochrome() ? "#081820" : "#000000"),
    GetWhite: () => (player.IsMonochrome() ? "#E0F8D0" : "#FFFFFF"),
    GetLightBlue: () => (player.IsMonochrome() ? "#E0F8D0" : "#8B8CDE"),

    DrawBG: function(sheetpath, x, layer) {
        const sheet = gfx.spritesheets[sheetpath];
        const dims = sheetInfo[sheetpath];
        gfx.DrawImage(gfx.ctx[layer || "background"], sheet, 0, 0, dims.w, dims.h, x, 0, dims.w, dims.h);
    },
    DrawSprite2: function(sheetpath, sxy, x, y, layer, size, noShift) {
        gfx.DrawSprite(sheetpath, sxy[0], sxy[1], x, y, layer, size, noShift);
    },
    DrawSprite: function(sheetpath, sx, sy, x, y, layer, size, noShift) {
        size = size || 1;
        const sheet = gfx.spritesheets[sheetpath];
        const dims = sheetInfo[sheetpath];
        const startX = sx * dims.w;
        const startY = sy * dims.h;
        gfx.DrawImage(gfx.ctx[layer], sheet, startX, startY, dims.w, dims.h, x - (noShift ? 0 : (dims.w / 2)), y - (noShift ? 0 : dims.h), dims.w * size, dims.h * size);
    },
    DrawImage: function(ctx, image, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH) {
        ctx.drawImage(image, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH);  
    },
    DrawText: function(t, x, y, centerText, color, layer, size) {
        layer = layer || "menutext";
        const ctx = gfx.ctx[layer];
        size = gfx.GetFontSize(size, true);
        const fontInfo = fontMults[gfx.GetFont()];
        ctx.font = size + "px " + gfx.GetFont();
        y += size * fontInfo.top;
        ctx.fillStyle = (color || gfx.GetBlack());
        if(centerText) { ctx.textAlign = "center"; }
        ctx.fillText(t, x, y);
        if(centerText) { ctx.textAlign = "start"; }
    },
    tempSpeaker: "", 
    DrawWrappedText: function(speaker, ts, i0, x, y, maxWidth, color, layer, size, maxHeight) {
        layer = layer || "menutext";
        const ctx = gfx.ctx[layer];
        size = gfx.GetFontSize(size, true);
        const fontInfo = fontMults[gfx.GetFont()];
        const space = fontInfo.space;
        ctx.font = size + "px " + gfx.GetFont();
        const ddy = size * space;
        let row = gfx.tempSpeaker === "" ? speaker : gfx.tempSpeaker, dy = 0;
        if(ts[i0][0] === "!") {
            gfx.tempSpeaker = "FUN FACT";
            row = gfx.tempSpeaker;
            gfx.DrawSpeakerBorder(ctx, row, x, y + fontInfo.borderTop * size, ddy);
            row +=  ": " + ts[i0].substring(1);
        } else if(ts[i0][0] === "@") {
            gfx.tempSpeaker = "Protagonny";
            row = gfx.tempSpeaker;
            gfx.DrawSpeakerBorder(ctx, row, x, y + fontInfo.borderTop * size, ddy);
            row +=  ": " + ts[i0].substring(1);
        } else if(ts[i0].indexOf(":") > 0) {
            gfx.tempSpeaker = ts[i0].split(":")[0];
            row = gfx.tempSpeaker;
            gfx.DrawSpeakerBorder(ctx, row, x, y + fontInfo.borderTop * size, ddy);
            row +=  ": " + ts[i0].substring(ts[i0].indexOf(":") + 1);
        } else if(speaker !== "") {
            gfx.DrawSpeakerBorder(ctx, row, x, y + fontInfo.borderTop * size, ddy);
            row +=  ": " + ts[i0];
        } else {
            row = ts[i0];
        }
        y += size * fontInfo.top;
        ctx.fillStyle = (color || gfx.GetBlack());
        for(let i = i0 + 1; i < ts.length; i++) {
            if(ts[i] === "|") {
                ctx.fillText(row, x, (y + dy));
                gfx.tempSpeaker = "";
                return i + 1;
            }
            const textInfo = ctx.measureText(row + " " + ts[i]);
            if(textInfo.width > maxWidth || row.indexOf("\n") >= 0) {
                ctx.fillText(row, x, (y + dy));
                dy += ddy;
                if(dy > maxHeight) { return i; }
                row = ts[i];
            } else {
                row += " " + ts[i];
            }
        }
        ctx.fillText(row, x, y + dy);
        return -1;
    },
    DrawSpeakerBorder: function(ctx, speakerStr, x, y, h) {
        const speakerWidth = ctx.measureText(speakerStr).width;
        ctx.fillStyle = "#CCCCCCBB";
        ctx.fillRect(x, y + 6, speakerWidth + 2, h - 5);
    },
    ClearLayer: key => gfx.ctx[key].clearRect(0, 0, gfx.canvasWidth, gfx.canvasHeight),
    ClearLayers: keys => keys.forEach(e => gfx.ClearLayer(e)),
    ClearAllLayers: function(includingTutorial) {
        for(const key in gfx.ctx) {
            if(key === "tutorial" && !includingTutorial) { continue; } 
            gfx.ClearLayer(key);
        }
    },
    
    GetFontSize: function(size, justNum) {
        size = size || 22;
        switch(player.options.fontSize) {
            case 1: size += 10; break;
            case 2: size += 20; break;
        }
        if(gfx.GetFont() === "OpenDyslexic") { size += 2; }
        return justNum === true ? size : size + "px ";
    }
};