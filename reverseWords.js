function reverse(val, start, end){
    if (!start){
        start = 0;
    }
    if (!end){
        end = val.length-1;
    }
    var forward = start;
    var backward = end;
    var spaces = [];
    while(forward < backward){
        temp = val[forward];
        val[forward] = val[backward];
        val[backward] = temp;

        forward++;
        backward--;
    }
    return val;
}

 function reverseWords(val){
    var lindex=0;
    for(var i=0;i<=val.length;i++){
        if (i== val.length || val[i] == ' '){
            this.reverse(val,lindex, i-1);
            lindex = i+1;
        }
    }
    return val;
}

var val = "The quick brown fox";
console.log(reverse(val.split('')));