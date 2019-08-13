function Animation(width, standFrame, walkFrames) {
    let lastChange = 0, frameIdx = 0;
    const center = width / 2;
    this.standFrame = standFrame;
    this.walkFrames = walkFrames;
    this.moveCount = 0;
    const GetFrameFromDir = function(frame, dir) {
        if(dir === 1) {
            return [frame[0] + center, frame[1]];
        } else {
            return [center - 1 - frame[0], frame[1]];
        }
    };
    this.SetMoving = function() { this.moveCount = 2; };
    this.GetFrame = function(dir) {
        if(this.moveCount === 0) { frameIdx = 0; return GetFrameFromDir(this.standFrame, dir); }
        this.moveCount--;
        if(++lastChange > animHelpers.changeRate) {
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
        return new Animation(4, [0, 0], [[1, 1], [0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 0], [0, 1]]);
    }
};