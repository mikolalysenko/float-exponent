float-exponent
==============
Extracts the exponent from a floating point number, effectively rounding down to the previous power of 2 for non-denormal numbers.  For denormals returns 2^-1024.

#### `require('float-exponent')(x)`
Returns the previous power of 2 for `x`

# License
(c) 2015 Mikola Lysenko. MIT License