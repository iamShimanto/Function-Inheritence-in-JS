// let array = [125, 245, 14, 6, 14, 1465, 47, 4,6];

// array.sort((a, b) => {    #sort method
//     return a - b
// })

// let spliceArr = array.splice(1,2,333)   #splice method

// console.log(array.slice(0, 4));   #slice method

// let res = array.at(1)  #output 245    # at method
// let res = array.at(-1)  #output 4

// let res = array.concat(array, 999 , 888)  # concat method

// let res = array.copyWithin(4, 0, 5);    # copywithin method

// let res = array.entries().next()   #OUTPUT #output 245   # entries method

// let res = array.every((item) => {    # every method
// return item > 3  # output true
// return item > 10  #output false
// })

// let res = array.fill(0)  #output [ 0, 0, 0, 0,  0, 0, 0, 0]  #fill method
// let res = array.fill(999, 0, 3);  #output [999, 999, 999, 6, 14, 1465, 47, 4]

// let res = array.filter((item) => {   #filter method
//     return item < 10   #output [6,4]
// })

// let res = array.find((item) => {
//     return item > 10  #output 125  ### target first element (true value) of the array
// })

// let res = array.findIndex((item) => {
//     return item < 10   #output 3   ### target first element index no (true value) of the array....
// })

// let flatArr = [23,23,[34,453,4556],[999]]  # flat method
// let res = flatArr.flat()  #output [ 23, 23, 34, 453, 4556, 999 ]  nested array convert in 1 array

// let arr = [1, 2, 3, 4, 5];    # flatmap method
// let res = arr.flatMap((item) => {
// return [item , item * 2]  #output [  1, 2, 2, 4,  3,  6, 4, 8, 5, 10]
// return [item * 2]   #output [2, 4, 6, 8, 10]
// });

// let res = array.includes(4) # output (true) search value  ### inclues method

// let res = array.indexOf(4)  #output 7 ## search item index no   ### indexof method

// let res = array.keys()  ### keys method

// for (let key of res) {
//     console.log(key)  ###output 0 1 2 3 4 5 6 7  ### show all index no
// }

// let res = array.map((item, index) => {   ### map method
//     return console.log(index , " " , item)
// })

// let res = array.lastIndexOf(6)   # lastIndexOf method

// let res = array.reduce((a, b) => {        ### reduce method
//   return a + b
// })

// let res = array.reduceRight((a, b) => {  ### reduceright method
//   return a + b
// })

// let res = array.reverse()   # reverse method

// let res = array.some((item) => {   ### some method
//   return item < 50
// })

// let res = array.sort((a, b) => {   ### sort method
//   return a - b
// })

// let res = array.toLocaleString()              ### tolocatstring method

// let res = array.values()     ### values method

// for (let value of res) {
//  console.log(value)
// }

// console.log(res);
