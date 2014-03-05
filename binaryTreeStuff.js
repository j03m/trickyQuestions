//http://codercareer.blogspot.com/2011/09/interview-question-no-1-binary-search.html

var BTree = function(){

}

BTree.prototype.createLinkedPaths = function(){
    this.traverseAndLink(this.root);
    return {
        head:this.makeHead(),
        tail:this.makeTail()
    }
}

BTree.prototype.makeHead = function(){
    var head = undefined;
    var node = this.root;
    while(node.left){
        head = node.left;
        node = node.left;
    }
    return head;
}

BTree.prototype.makeTail = function(){
    var tail = undefined;
    var node = this.root;
    while(node.right){
        tail = node.right;
        node = node.right;
    }
    return tail;
}

BTree.prototype.traverseAndLink = function(node){
    if (!node){
        return;
    }

    this.traverseAndLink(node.left);
    if (node.left && node.left.right){
        node.prev = node.left.right;
        node.left.right.next = node;
    }else if (node.left){
        node.left.next = node;
        node.prev = node.left;
    }


    this.traverseAndLink(node.right);
    if (node.right && node.right.left){
        node.right.left.prev = node;
        node.next = node.right.left;
    }else if (node.right){
        node.right.prev = node;
        node.next = node.right;
    }


}

BTree.prototype.addChild = function(value, node){
    if (!node){
        if (!this.root){
            this.root = {};
            this.root.value = value;
            return;
        }else{
            node = this.root;
        }
    }

    if (value < node.value){
        if (!node.left){
            node.left = {};
            node.left.value = value;
        }else{
            this.addChild(value, node.left);
        }
    }else if(value>node.value){
        if (!node.right){
            node.right = {};
            node.right.value = value;
        }else{
            this.addChild(value, node.right);
        }
    }
}

//build tree:
var test = [10,6,4,8,12,11,20];
var tree = new BTree(test);
for(var i=0;i<test.length;i++){
    tree.addChild(test[i]);
}
var list = tree.createLinkedPaths();
console.log(list);