var Heap = function(scoreFunction){
    this.content = [];
    this.scoreFunction = scoreFunction;
}

Heap.prototype = {
    push:function(element){
        this.content.push(element);
        this.bubbleUp(this.content.length -1);
    },
    bubbleUp:function( n){
        var element = this.content[n];
        var score = this.scoreFunction(element);
        while(n>0){
            var parentN = Math.floor(n/2);
            var parent = this.content[parentN];
            if (score >= this.scoreFunction(parent))
                break;
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
        }
    },
    pop:function(){
        var top = this.content[0];
        var end = this.content.pop();
        if (this.content.length > 0){
            this.content[0] = end;
            this.sinkDown(0);
        }
        return top;
    },
    sinkDown:function(n){
        var length = this.content.length;
        var element = this.content[n];
        var elemScore = this.scoreFunction(element);
        var swap;
        while(true){
            var child1Pos=n*2;
            var child2Pos = (n*2)+1;
            if (child1Pos < length){
                var child1 = this.content[child1Pos];
                var child1Score = this.scoreFunction(child1);
                if (child1Score < elemScore)   {
                    swap = child1Pos
                }

            }
            if (child2Pos < length) {
                var child2 = this.content[child2Pos];
                var child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score)){
                    swap = child2Pos;
                }

            }

            if (swap == null) {
                break;
            }
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
            swap = null;
        }
    }
}

module.exports.Heap = Heap;