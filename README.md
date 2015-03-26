---
languages: javascript
tags: arrays, slicing, nested iteration
---

# Series
## How it Should Work
```javascript
var series = new Series('01734');
series.digits
// -> [0, 1, 7, 3, 4]
series.slices(3);
// -> [[0, 1, 7], [1, 7, 3], [7, 3, 4]]
series.slices(4);
// -> [[0, 1, 7, 3], [1, 7, 3, 4]]
series.slices(5);
// -> [[0, 1, 7, 3, 4]]
series.slices(6);
// -> new Error('Slice size is too big.')
```

## Goals of this lab:
* Create a Series constructor
  * It accepts a string of numbers as an argument; ex. '234567'
  * instances have a digits property that stores an array of the split string as integers; ex. [1, 2, 3, 4]
* The `#slices` method
  * accepts a number as an argument
  * returns an array of arrays 
    * Each inner array has a length of the size of the `#slices` argument and contains the numbers based on their position in the string

## Tests
To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install learn-co

# to run in the command line run
learn

#to run in the browser
learn -b
```
