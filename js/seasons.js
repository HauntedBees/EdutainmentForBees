/*
Seasons:
Akhet: JUN-SEP: no crops, flooding
Peret: OCT-FEB: planting crops
Shemu: MAR-MAY: harvesting crops
*/
const seasonHandler = {
    currentTime: 0, twoPi: 2 * Math.PI, 
    seasonBlobs: [
        { spot: 1, speed: 1, radius: 7 },
        { spot: 2, speed: 3, radius: 3 },
        { spot: 6, speed: 6, radius: 20 },
        { spot: 5, speed: 4, radius: 10 }
    ], 
    DrawSeasons: function(projection) {
        gfx.ClearLayer("foreground");
        const ctx = gfx.ctx["foreground"];
        for(let i = 0; i < seasonHandler.seasonBlobs.length; i++) {
            const me = seasonHandler.seasonBlobs[i];
            const projectedSpot = (me.spot + Math.floor(projection / me.speed)) % positions.length;
            const mePos = positions[projectedSpot];
            let radiusMult = 7;
            if(player.colorblind) {
                ctx.fillStyle = "#444444";
                radiusMult = 5.5;
            } else {
                const gradient = ctx.createRadialGradient(mePos[1], mePos[2], me.radius, mePos[1], mePos[2], me.radius * 7);
                gradient.addColorStop(0, "#00FF00FF");
                gradient.addColorStop(1, "#00FF0000");
                ctx.fillStyle = gradient;
            }
            ctx.beginPath();
            ctx.arc(mePos[1], mePos[2], me.radius * radiusMult, 0, seasonHandler.twoPi);
            ctx.fill();
        }
    },
    IsInSeason: function(projection, meIdx) {
        const boatPos = positions[meIdx];
        for(let i = 0; i < seasonHandler.seasonBlobs.length; i++) {
            const me = seasonHandler.seasonBlobs[i];
            const projectedSpot = (me.spot + Math.floor(projection / me.speed)) % positions.length;
            const mePos = positions[projectedSpot];
            const meRadius = me.radius * 6;
            const d = Math.sqrt(Math.pow(boatPos[1] - mePos[1], 2) + Math.pow(boatPos[2] - mePos[2], 2));
            if(d < meRadius) { return true; }
        }
        return false;
    },
    Advance: function(numDays) {
        for(let i = 0; i < seasonHandler.seasonBlobs.length; i++) {
            const me = seasonHandler.seasonBlobs[i];
            me.spot = (me.spot + Math.floor(numDays / me.speed)) % positions.length;
        }
    }
};