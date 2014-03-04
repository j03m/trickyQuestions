//http://basicalgos.blogspot.com/2012/03/4.html
function reverse(val, start, end){
    if (!start){
        start = 0;
    }
    if (!end){
        end = val.length-1;
    }
    var forward = start;
    var backward = end;
    while(forward < backward){ //o(n/2)
        temp = val[forward];
        val[forward] = val[backward];
        val[backward] = temp;

        forward++;
        backward--;
    }
    return val;
}


function reverseWords(val){ //o(n)
    var lindex=0;
    for(var i=0;i<=val.length;i++){
        if (i== val.length || val[i] == ' '){
            reverse(val,lindex, i-1);
            lindex = i+1;
        }
    }
    return val;
}

function strstr(needle, haystack) {
    //look in haystack for the an occurrence of the first character of needle, then confirm the rest
    var needlePos = 0;
    var findPos = -1;
    for(var i=0;i<haystack.length;i++){
        if (haystack[i]== needle[needlePos]){
            if (findPos==-1){
                findPos = i;
            }
            needlePos++;
            if (needlePos >= needle.length){
                return findPos;
            }
        }else{
            needlePos=0;
            findPos = -1;
        }
    }
    return findPos;

}

//with map space worstcase o(n), time worsecase(o(n))
function hasDupes(str){
    var map = {};
    for(var i=0; i<str.length;i++){
        var char = str[i];
        if (map[char]==true){
            return true;
        }
        map[char]=true;
    }
    return false;
}

//no additional data structure allowed (space o(1), but runtime o(n^2))
function hasDupesSpaceOpt(str){
    for(var i=0; i<str.length;i++){
        for(var ii=0; ii<str.length;ii++){
            if (ii != i && str[i]==str[ii]){
                return true;
            }
        }
    }
    return false;
}

var val = "The quick brown fox";
var reversed = reverse(val.split(''));
console.log(reversed);
console.log(reverseWords(reversed));        //o(n+n)

console.log(strstr("fox", "//the quick frown foxy fox")); //o(n)
console.log(strstr("fox", "//the quick frown roxy rox"));
var dupes = "sdflwerfs";
var nodupes = "abcdefghijklmnop";
console.log("Does: " + dupes + " have dupes?" + hasDupes(dupes));
console.log("Does: " + nodupes + " have dupes?" + hasDupes(nodupes));
console.log("Does: " + dupes + " have dupes (space opt)?" + hasDupesSpaceOpt(dupes));
console.log("Does: " + nodupes + " have dupes (space opt)?" + hasDupesSpaceOpt(nodupes));