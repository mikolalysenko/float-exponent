'use strict'

module.exports = exponent

var FLOAT      = new Float64Array(1)
var INT        = new Uint32Array(FLOAT.buffer)
var MIN_DENORM = Math.pow(2, -1023)

function exponent(x) {
  FLOAT[0] = x
  INT[0] = 0
  INT[1] &= ~((1<<20)-1)
  return FLOAT[0] || MIN_DENORM
}