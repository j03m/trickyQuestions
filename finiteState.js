var gConfig = {
    s1:{
        initial:true,
        paths:{
            a:"s1",
            b:["s2"]
        }
    },
    s2:{
        paths:{
            a:["s2"],
            b:["s3", "s2"]
        }
    },
    s3:{
        paths:{
            a:["s1"],
            b:["s2"]
        },
        accept:true
    }


}

var FSA = function(config){
    this.config = config;
    this.initialState = this.getInitialState();
}

FSA.prototype.getInitialState = function(){
    for(var key in this.config){
        if (this.config[key].initial){
            return key;
        }
    }
    throw "no initial state supplied";
}

FSA.prototype.accept = function(input, state, pos){

    if(!state){
        state = this.initialState;
    }
    if (pos === undefined){
        pos = 0;
    }

    if (pos >= input.length){
        if (this.config[state].accept){
            return true;
        }else{
            return false;
        }
    }

    var character = input[pos];
    var paths = this.config[state].paths[character];
    var returnme = false;
    if (paths instanceof Array ){
        for(var i=0;i<paths.length; i++){
            returnme = returnme || this.accept(input, paths[i], pos+1);
        }
    }else{
        returnme = returnme || this.accept(input, paths, pos+1);
    }

    return returnme;
}


var fsa = new FSA(gConfig);
console.log(fsa.accept("aba")); //false
console.log(fsa.accept("bab")); //true

