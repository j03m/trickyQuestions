var Heap = require('./heap.js').Heap;

var heap = new Heap(function(value){
    return value;
});
heap.push(10);
heap.push(6);
heap.push(11);
heap.push(1);
var val = heap.pop();
console.log(heap);