module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!(arr instanceof Array)) {
            return 0;
        } else if (arr.length === 0) {
            return 1;
        }

        let result = arr.map((el) => {
            return 1 + this.calculateDepth(el);
        });

        return Math.max(...result);
    }
};