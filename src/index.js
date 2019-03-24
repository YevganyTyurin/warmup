module.exports = function warmup(temperature) {
  
  this.temperature = ((temperature * 9) / 5) + 32; 

  return this.temperature;
};
