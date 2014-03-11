
var BTree = require('./binaryTree.js').BTree;
var LevelPrinter = function(){
    this.levels = {};
    this.level = 0;
    this.queue = [];
}

LevelPrinter.prototype.printLevelOrder = function(node){

    var count = 0;
    while(node){
        this.level = Math.ceil(count );
        if (this.levels[this.level]==undefined){
            this.printLevel(this.level);
            this.levels[this.level]=true;
        }
        if (node.left){
            this.queue.push(node.left);
        }
        if (node.right){
            this.queue.push(node.right);
        }
        console.log(node.value);
        node =  this.queue.shift();
        count++;
    }
}

LevelPrinter.prototype.printLevel = function(level){
    console.log("LEVEL " + level + ":");
}

var test = [10,6,4,8,12,11,20];
var tree = new BTree(test);
for(var i=0;i<test.length;i++){
    tree.addChild(test[i]);
}

var levelPrint = new LevelPrinter();
levelPrint.printLevelOrder(tree.root);







