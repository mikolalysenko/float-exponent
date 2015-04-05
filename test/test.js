'use strict'

var tape = require('tape')
var fltexp = require('../fltexp')

tape('fltexp', function(t) {
  for(var i=-1023; i<=1024; ++i) {
    var x = Math.pow(2, i)
    t.equals(fltexp(x), x)
    for(var j=0; j<10; ++j) {
      var y = x * (1.0 + 0.5 * Math.random())
      t.equals(fltexp(y), x)
    }
  }
  t.end()
})