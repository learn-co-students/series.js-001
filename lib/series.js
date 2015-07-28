'use strict';

var Series = function(num){
  this.digits = num.split("").map(function(x){
    return parseInt(x)
  })
  this.slices = function(secs){
    if(secs > num.length){
      throw new Error('Slice size is too big.')
    } else {

      var arr = num.split("").map(function(x){
            return parseInt(x)
          })
      var reArr = []
      var inArr = []
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < secs; j++){
          inArr.push(arr[i + j])
          console.log(inArr)
        }
        if(inArr.indexOf(undefined) === -1){
          reArr.push(inArr)
          inArr = []
        }
      }
      return reArr
    }

  }
};
