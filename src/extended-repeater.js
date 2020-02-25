module.exports = function repeater(str, options) {
    const main = String(str);
    const addition =
      typeof options.addition === "boolean" ||
      options.addition === null ||
      options.addition
        ? String(options.addition)
        : "";
    const repeatTimes = options.repeatTimes || 1;
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const separator = options.separator ? String(options.separator) : "+";
    const additionSeparator = options.additionSeparator
      ? String(options.additionSeparator)
      : "|";
  
    let result = "";
  
    for (let i = 0; i < repeatTimes; i++) {
      result += main;
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j + 1 < additionRepeatTimes) {
          result += additionSeparator;
        }
      }
      if (i + 1 < repeatTimes) {
        result += separator;
      }
    }
    return result;
};