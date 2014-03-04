
//http://basicalgos.blogspot.com/2012/02/string-reduction-given-string.html
function reduce(input){
    var p1 =0;
    var p2 =1;
    var start = 0;
    if (typeof input === 'string'){
        input = input.split('');
    }

    while(p2<input.length){
        var replacement = reduction(input[p1], input[p2]);
        var increment = true;
        if (replacement != undefined){
            input[p1] = undefined;
            input[p2] = replacement;
            for(var i =p1;i>0;i--){
                input[i] = input[i-1];//pull everyone up one
            }
            input[0] = undefined; //
            start++;
        }else{
            p1++;
            p2++;
        }
    }
    var joined = input.slice(start, input.length).join('');
    console.log("reduction: " + joined);
    return joined.length;

    function reduction(char1, char2){
        //todo: omg replace this
        if ((char1 == 'a' && char2 == 'b') || char1 == 'b' && char2 == 'a'){
            return 'c';
        }else if ((char1 == 'a' && char2 == 'c') || char1 == 'c' && char2 == 'a'){
            return 'b';
        }else if ((char1 == 'b' && char2 == 'c') || char1 == 'c' && char2 == 'b'){
            return 'a';
        }else{
            return undefined;
        }
    }
}

var input = "cccccccccccccccab";
var len = reduce(input); //o(n^2)
console.log(len);

