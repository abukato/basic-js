const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity === 'string') {
    let sampleActivityNumber = parseFloat(sampleActivity);
    if (isNaN(sampleActivityNumber)) return false;
    if (sampleActivityNumber > 15 || sampleActivityNumber <= 0) return false;
    return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivityNumber))/k);
  } else {
    return false;
  }
};