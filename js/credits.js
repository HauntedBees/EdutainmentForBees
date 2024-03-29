const credits = {
    animIdx: 0, startY: 900, drawY: 0, drawSpeed: 3, showScore: false, countdownToAllowAdvancement: 10, 
    Setup: function() {
        gfx.DrawBG("bg0", 0);
        credits.drawY = 0;
        credits.showScore = false;
        credits.drawSpeed = 3;
        credits.countdownToAllowAdvancement = 10;
        credits.animIdx = setInterval(credits.Animate, 30);
    },
    Animate: function() {
        if(credits.showScore) { credits.countdownToAllowAdvancement -= 1; return; }
        credits.drawY -= credits.drawSpeed;
        gfx.ClearLayer("menutext");
        const headingSize = 50, regularSize = 40, bySize = 35;
        credits.DrawText("Credits", 0, 100);
        credits.DrawText("Game Design", 200, headingSize);
        credits.DrawText("Sean Finch", 300, regularSize);
        credits.DrawText("Programming", 400, headingSize);
        credits.DrawText("Sean Finch", 500, regularSize);
        credits.DrawText("Writing", 600, headingSize);
        credits.DrawText("Sean Finch", 700, regularSize);
        credits.DrawText("Art", 800, headingSize);
        credits.DrawText("Sean Finch", 900, regularSize);
        credits.DrawText("Misc. Assistance", 1000, headingSize);
        credits.DrawText("Skyler Johnson", 1100, regularSize);
        credits.DrawText("Galen Wiley", 1200, regularSize);
        credits.DrawText("Kelly Marine", 1300, regularSize);
        credits.DrawText("Marcin Rojek", 1400, regularSize);
        credits.DrawText("Additional Assets", 1500, headingSize);
        credits.DrawText("Bevouliin Pyramid Free Game Background", 1600, regularSize);
        credits.DrawText("for Game Developers", 1660, regularSize);
        credits.DrawText("by Bevouliin", 1730, bySize);
        credits.DrawText("CC0 Public Domain License", 1800, bySize);
        credits.DrawText("Classical Ruin Tiles", 1900, regularSize);
        credits.DrawText("by Albert Manhattan", 1970, bySize);
        credits.DrawText("CC BY 3.0 License", 2040, bySize);
        credits.DrawText("Painted backdrop - sea and sky", 2140, regularSize);
        credits.DrawText("by Flying Tiger Comics", 2210, bySize);
        credits.DrawText("GNU GPLv3.0 License", 2280, bySize);
        credits.DrawText("Honeycomb on white background", 2380, regularSize);
        credits.DrawText("by Marco Verch", 2450, bySize);
        credits.DrawText("CC BY 2.0 License", 2520, bySize);
        credits.DrawText("Egypt 1450 BC", 2620, regularSize);
        credits.DrawText("by Andrei Nacu", 2690, bySize);
        credits.DrawText("CC BY-SA 3.0 License", 2760, bySize);
        credits.DrawText("Paper Old Texture Parchment", 2860, regularSize);
        credits.DrawText("by Chris Fiedler", 2930, bySize);
        credits.DrawText("Pixabay License", 3000, bySize);
        credits.DrawText("2011-02-11 Stucco paint texture", 3100, regularSize);
        credits.DrawText("by Ildar Sagdejev", 3170, bySize);
        credits.DrawText("CC BY-SA 4.0 License", 3240, bySize);
        credits.DrawText("Parchment Papyrus Dirty Old Dirt", 3340, regularSize);
        credits.DrawText("by Gerd Altmann", 3410, bySize);
        credits.DrawText("Pixabay License", 3480, bySize);
        credits.DrawText("Smoke Aura", 3580, regularSize);
        credits.DrawText("by Beast", 3650, bySize);
        credits.DrawText("CC0 Public Domain License", 3720, bySize);
        credits.DrawText("Egyptian Pyramids", 3820, regularSize);
        credits.DrawText("by Henry Bacon", 3890, bySize);
        credits.DrawText("Public Domain in the USA", 3960, bySize);
        credits.DrawText("Flight of the Bumblebee", 4060, regularSize);
        credits.DrawText("by the US Army Band", 4130, bySize);
        credits.DrawText("Public Domain in the USA", 4200, bySize);

        credits.DrawText("Mariana Font", 4300, regularSize, "Mariana");
        credits.DrawText(decodeURIComponent("by Mariano Mart%C3%ADnez Vila"), 4370, bySize, "Mariana");
        credits.DrawText("Public Domain License", 4440, bySize, "Mariana");
        credits.DrawText("OpenDyslexic Font", 4540, regularSize, "OpenDyslexic");
        credits.DrawText("by Abbie Gonzalez", 4610, bySize, "OpenDyslexic");
        credits.DrawText("SIL Open Font License", 4680, bySize, "OpenDyslexic");
        credits.DrawText("New Athena Unicode Font", 4780, regularSize, "NewAthenaUnicode");
        credits.DrawText("by the Society for Classical Studies", 4850, bySize, "NewAthenaUnicode");
        credits.DrawText("SIL Open Font License", 4920, bySize, "NewAthenaUnicode");
        credits.DrawText("Orkney Font", 5020, regularSize, "Orkney");
        credits.DrawText("by Cristiano Sobral", 5090, bySize, "Orkney");
        credits.DrawText("SIL Open Font License", 5160, bySize, "Orkney");
        credits.DrawText("Made for the", 5260, headingSize);
        credits.DrawText("August 2019 Summer Slow Jam", 5360, regularSize);
        credits.DrawText("by the Portland Indie Game Squad", 5420, regularSize);
        credits.DrawText("Special Thanks", 5500, headingSize);
        credits.DrawText("The Reading Books Club", 5600, regularSize);
        credits.DrawText("The MklaDiscord Gang", 5700, regularSize);
        credits.DrawText("Laura Billard", 5800, regularSize);
        credits.DrawText("Sheila Pollard", 5900, regularSize);
        credits.DrawText("Nadia Wakabayashi", 6000, regularSize);
        credits.DrawText("Cindy Eschenfelder", 6100, regularSize);
        credits.DrawText("Danielle Wogulis", 6200, regularSize);
        credits.DrawText("...and You!", 6300, regularSize);
        credits.DrawText("Thank you for Playing!", 6400, regularSize);
        credits.DrawText(decodeURIComponent("%C2%A9 2019 Sean Finch / Haunted Bees Productions"), 6500, regularSize, undefined, 400);
    },
    DrawText: function(text, y, size, forceFont, lockY) {
        const myY = credits.startY + credits.drawY + y;
        gfx.DrawText(text, 512, lockY === undefined ? myY : (Math.max(myY, lockY)), true, "#000000", "menutext", size, false, forceFont);
    },
    mouseMove: function() { },
    click: function() { credits.Action(); },
    rightclick: function() { credits.Action(); },
    keyPress: function() { credits.Action(); },
    Action: function() {
        if(credits.showScore) {
            if(credits.countdownToAllowAdvancement > 0) { return; }
            game.endSound.pause();
            game.endSound.currentTime = 0;
            game.SwitchTo(titleScreen);
        } else if(credits.drawY <= -7500) {
            credits.showScore = true;
            gfx.ClearLayer("menutext");
            const headingSize = 50;
            credits.startY = 0; credits.drawY = 0;
            credits.DrawText("Final Results", 0, 65);
            let score = 0, maxScore = 0;
            credits.DrawText("Plant Types Pollinated: " + player.beedFlowers.length + "/8", 200, headingSize);
            score += player.beedFlowers.length; maxScore += 8;
            const numAltars = player.clearedChievos.filter(s=> s.indexOf("Altar") >= 0).length;
            credits.DrawText("Altars Offered: " + numAltars + "/13", 300, headingSize);
            maxScore += 13;
            credits.DrawText("People Helped: " + (player.clearedChievos.length - numAltars) + "/8", 400, headingSize);
            score += player.clearedChievos.length; maxScore += 8;
            credits.DrawText("Days Taken: " + player.currentDay, 500, headingSize);
            const seconds = player.playTime % 60;
            let minutes = Math.floor(player.playTime / 60);
            let hours = 0;
            if(minutes >= 60) {
                hours = Math.floor(minutes / 60);
                minutes = minutes % 60;
            }
            const playTimeStr = (hours > 0 ? (hours + "h") : "") + minutes + "m" + seconds + "s";
            credits.DrawText("Playtime: " + playTimeStr, 600, headingSize);
            const completion = Math.round(1000 * score/maxScore) / 10;
            credits.DrawText("Completion: " + completion + "%", 750, headingSize);
            credits.countdownToAllowAdvancement = 100;
        } else {
            credits.drawSpeed = Math.min(credits.drawSpeed + 1, 30);
        }
    },
};