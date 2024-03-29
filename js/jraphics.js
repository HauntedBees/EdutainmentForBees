const sheetInfo = {
    "altar": { w: 100, h: 120 },
    "amenhotep": { w: 164, h: 226 },
    "bee": { w: 30, h: 30 },
    "beejar": { w: 61, h: 71 },
    "boatboat": { w: 1024, h: 350 },
    "buttons": { w: 50, h: 50 },
    "cat1": { w: 100, h: 75 },
    "cat2": { w: 100, h: 75 },
    "cat3": { w: 100, h: 75 },
    "cat4": { w: 100, h: 75 },
    "cat5": { w: 100, h: 75 },
    "cat6": { w: 100, h: 75 },
    "circle": { w: 15, h: 15 },
    "coffin": { w: 267, h: 111 },
    "cow": { w: 339, h: 277 },
    "crocodil": { w: 273, h: 100 },
    "farmboy": { w: 200, h: 260 },
    "headico": { w: 45, h: 38 },
    "hive": { w: 110, h: 109 },
    "honeycomb": { w: 100, h: 54 },
    "horus": { w: 110, h: 80 }, 
    "justabox": { w: 120, h: 120 }, 
    "ladder": { w: 121, h: 204 },
    "littlelad": { w: 200, h: 260 },
    "map": { w: 1024, h: 896 },
    "melongirl": { w: 150, h: 300 },
    "mummy": { w: 200, h: 260 },
    "nilometer": { w: 62, h: 343 },
    "oar": { w: 308, h: 162 }, 
    "obelisk": { w: 168, h: 589 },
    "paint": { w: 1024, h: 896 },
    "pappy": { w: 1024, h: 300 },
    "peopleMisc": { w: 200, h: 260 },
    "peopleMiscBig": { w: 200, h: 345 },
    "pers2": { w: 200, h: 260 },
    "pers2tiny": { w: 150, h: 195 },
    "plants": { w: 100, h: 200 },
    "plantsBig": { w: 200, h: 400 },
    "plantsSmall": { w: 100, h: 100 },
    "player": { w: 200, h: 260 },
    "playerModern": { w: 200, h: 260 },
    "playerScene1": { w: 200, h: 260 },
    "puddle": { w: 263, h: 26 },
    "row": { w: 424, h: 294 },
    "rummer": { w: 222, h: 124 }, 
    "shopkeeps": { w: 150, h: 200 },
    "shore": { w: 610, h: 225 }, 
    "shore2": { w: 1659, h: 122 },
    "sitBuddies": { w: 150, h: 225 }, 
    "slappy": { w: 200, h: 260 },
    "slappy2": { w: 200, h: 260 },
    "smoke": { w: 256, h: 256 },
    "templeIncomplete": { w: 288, h: 174 },
    "templeStairL": { w: 66, h: 30 },
    "templeStairR": { w: 66, h: 30 },
    "templeWall": { w: 288, h: 704 },
    "tent": { w: 1024, h: 896 },
    "tomb": { w: 541, h: 471 },
    "tombGlyph": { w: 100, h: 140 },
    "valuemark": { w: 100, h: 100 },
    "vase": { w: 60, h: 60 },
    "water": { w: 1920, h: 347 },
    "worker": { w: 218, h: 120 }
};
for(let i = 0; i <= 4; i++) { sheetInfo["bg" + i] = { w: 3584, h: 896 }; }
for(let i = 0; i <= 3; i++) { sheetInfo["bgM" + i] = { w: 3584, h: 896 }; }
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
    spritesheets: [],
    LoadSpriteSheets: function(source, paths, callback) {
        count = 0; source = source || "img";
        const plen = Object.keys(paths).length;
        for(const path in paths) {
            const f = function(path, len) {
                const img = new Image();
                img.onload = function() {
                    gfx.spritesheets[path] = this;
                    count += 1;
                    game.SetLoadingText("Loading art assets (" + count + "/" + plen + ").");
                    if(count === len) { callback(); }
                };
                img.src = `${source}/${path}.png`;
            };
            f(path, plen);
        }
    },
    GetFont: function() { 
        switch(player.font) {
            case 0: return "Orkney";
            case 1: return "Mariana";
            case 2: return "NewAthenaUnicode";
            case 3: return "OpenDyslexic";
        }
    },

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
    DrawText: function(t, x, y, centerText, color, layer, size, drawBackground, forceFont) {
        layer = layer || "menutext";
        const ctx = gfx.ctx[layer];
        size = gfx.GetFontSize(size, true);
        const myCurrentFont = forceFont || gfx.GetFont();
        const fontInfo = fontMults[myCurrentFont];
        ctx.font = size + "px " + myCurrentFont;
        y += size * fontInfo.top;
        if(centerText) { ctx.textAlign = "center"; }
        if(drawBackground) {
            const textWidth = ctx.measureText(t).width;
            ctx.fillStyle = "#FFFFFFCC";
            ctx.fillRect(x - Math.ceil(size * 0.2), y - Math.ceil(size * 1.03), textWidth + Math.ceil(size * 0.4), Math.ceil(size * 1.43));
        }
        ctx.fillStyle = (color || "#000000");
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
            gfx.tempSpeaker = "Cori";
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
        ctx.fillStyle = (color || "#000000");
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
        return justNum === true ? size : size + "px ";
    }
};