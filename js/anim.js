function Animation(width, standFrame, walkFrames, fps, alwaysMoving) {
    let lastChange = 0, frameIdx = 0;
    const center = width / 2;
    this.standFrame = standFrame;
    this.walkFrames = walkFrames;
    this.moveCount = 0;
    const moveLock = alwaysMoving || false;
    const changeRate = fps || animHelpers.changeRate;
    const GetFrameFromDir = function(frame, dir) {
        if(center === 0 || dir === 1) {
            return [frame[0] + center, frame[1]];
        } else {
            return [center - 1 - frame[0], frame[1]];
        }
    };
    this.ForceMove = function() { this.moveCount = 9999; };
    this.ForceStop = function() { this.moveCount = 0; };
    this.SetMoving = function() { this.moveCount = 2; };
    this.GetFrame = function(dir) {
        if(this.moveCount === 0 && !moveLock) { frameIdx = 0; return GetFrameFromDir(this.standFrame, dir); }
        this.moveCount--;
        if(++lastChange > changeRate) {
            lastChange = 0;
            frameIdx = (frameIdx + 1) % this.walkFrames.length;
        }
        return GetFrameFromDir(this.walkFrames[frameIdx], dir);
    };
}
const animHelpers = {
    changeRate: 2, 
    GetPlayerAnim: function() {
        return new Animation(4, [0, 0], [[1, 1], [0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 0], [0, 1]]);
    },
    GetAnim: function(name) {
        if(name === "cat") {
            return new Animation(4, [0, 0], [[1, 0], [0, 1], [1, 1], [0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 4], [0, 5]]);
        } else if(name === "row") {
            return new Animation(0, [0, 0], [[1, 0], [0, 1], [1, 1], [0, 0]], 3);
        } else if(name === "smonk") {
            return new Animation(0, [0, 0], [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]);
        } else if(name === "slappy") {
            return new Animation(0, [0, 0], [[0, 0], [1, 0], [0, 1], [1, 1]], 2, true);
        }
        return new Animation(4, [0, 0], [[1, 1], [0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 0], [0, 1]]);
    },
};