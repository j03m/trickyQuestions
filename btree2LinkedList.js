//build tree:
var BTree = require('./binaryTree.js').BTree;

var test = [10,6,4,8,12,11,20];
var tree = new BTree(test);
for(var i=0;i<test.length;i++){
    tree.addChild(test[i]);
}
var list = tree.createLinkedPaths();
console.log(list);