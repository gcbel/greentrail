module.exports = {
   ifvalue: function (conditional, options) {
    if (options.hash.value === conditional) {
      return options.fn(this); // Render the block if condition is true
    } else {
      return options.inverse(this); // Render the else block if condition is false
    }
  } }