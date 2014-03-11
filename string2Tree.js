var Tree = function(){
    this.root = {
        children:[]
    };
}

var gLookup = {
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','b'],
    9:['w','x','y','z']
};

Tree.prototype.stringToChain = function(str, pos, parent){

    if (!pos){
        pos =0;
    }
    if (!parent){
        parent = this.root;
    }

    if (pos >= str.length){
        if (!parent.suggestions){
            parent.suggestions = []
        }
        parent.suggestions.push(str);
        return;
    }

    var node = this.hasChildForLetter(str[pos], parent);
    if (!node){
        node ={};
        node.letter = str[pos];
        node.children = [];
        parent.children.push(node);
    }

    this.stringToChain(str, pos+1, node);
}

Tree.prototype.hasChildForLetter= function(letter, parent){
    for(var i=0;i<parent.children.length;i++){
        if (parent.children[i].letter == letter){
            return parent.children[i];
        }
    }
    return undefined;
}

Tree.prototype.suggest = function(str){
    var fanOut = this.visit(this.root, str);
    if (fanOut){
        var suggestions = this.collect(fanOut);
        return suggestions;
    }else{
        return [];
    }

}

Tree.prototype.translate = function(digits){
    var res = []
    var preres = []
    res.push("");

    for(var i=0;i<digits.length;i++){
        for(var s=0;s<res.length;s++){
            var letters = gLookup[digits[i]];
            if (letters){
                for(var j=0;j<letters.length;j++){
                    preres.push(res[s] + letters[j]);
                }
            }
        }
        res = preres;
        preres=[];
    }
    var suggestions = {};
    for (var i=0;i<res.length;i++){
        var vals = this.suggest(res[i]);
        for(var ii=0;ii<vals.length;ii++){
            suggestions[vals[ii]] = 1;
        }
    }
    return suggestions;

}


Tree.prototype.collect = function(fanOut){

    var stack = [];
    var node = fanOut;
    var suggestions = [];
    while(node){
        if(node.suggestions){
            suggestions=suggestions.concat(node.suggestions);
        }
        for(var i=0;i<node.children.length;i++){
            stack.push(node.children[i]);
        }
        node = stack.pop();
    }
    return suggestions;
}

Tree.prototype.visit = function(node, str, pos){
    if (pos === undefined){
        pos=0;
    }

    if (pos >=str.length){
        return node;
    }

    var queue = [];
    var returnme;
    while(node){
        var letter = str[pos];
        for(var i=0;i<node.children.length;i++){
            if (node.children[i].letter == letter){
                pos++;
                returnme = node.children[i];
                queue.push(node.children[i]);
            }
        }
        if (queue.length > 0){
            node = queue.shift();
        }else{

            break;
        }
    }
    return returnme;


}

var tree = new Tree();
var words = [
    "about",
    "a",
    "when",
    "i",
    "if",
    "who",
    "where",
    "all"
]
for(var i =0;i<words.length;i++){
    tree.stringToChain(words[i])
}
console.log(JSON.stringify(tree, null, '\t'));


console.log(tree.translate([2,3]));



