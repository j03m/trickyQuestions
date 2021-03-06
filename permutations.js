var Permuter = function(){
    this.permutations = {};
}

Permuter.prototype.permuteIt = function(ary, start){
    if (start === undefined){
        start = 0;
    }

    var swap = ary[0];
    if (swap == undefined){
        console.log("stop");
    }
    if (ary[start] == undefined){
        console.log("stop");
    }

    ary[0] = ary[start];
    ary[start] = swap;
    for(var i=0;i<ary.length;i++){
        var val = "";
        val +=ary[i];
        for(var ii=0;ii<ary.length;ii++){
            if (i!=ii){
                val +=ary[ii];
            }
        }
        this.permutations[val]=1;
    }

    start++;
    if (start < ary.length){
       this.permuteIt(ary, start);
    }

}

Permuter.prototype.permuteIterative = function(ary){
    for(var count =0;count<ary.length;count++){
        var swap = ary[0];
        ary[0] = ary[count];
        ary[count] = swap;
        for(var i=0;i<ary.length;i++){
            var val = "";
            val +=ary[i];
            for(var ii=0;ii<ary.length;ii++){
                if (i!=ii){
                    val +=ary[ii];
                }
            }
            this.permutations[val]=1;
        }
    }
}


var permer = new Permuter()
permer.permuteIterative("dogs".split(''));
console.log(permer.permutations);
var permer = new Permuter()
permer.permuteIt("dogs".split(''));
console.log(permer.permutations);


