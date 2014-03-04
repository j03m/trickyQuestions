
//do a binary search
function countOccurrences(ary, number){
    var index = findOccurrence(ary, number);
    return handleFind(ary, index);
}

function findOccurrence(ary, number, start, end){
    if (start==undefined){
        start = 0;
    }
    if(end == undefined){
        end = ary.length-1;
    }

    //find the number
    var mid = Math.floor((start+end)/2);
    var value = ary[mid];
    if (value == number){
        console.log("we should only see this once");
        return mid;
    }else if (value < number){
        return findOccurrence(ary, number, mid+1, ary.length -1);
    }else if (value > number){
        return findOccurrence(ary, number, 0, mid-1);

    }else{
        throw "something is broken. Value is: " + value + " mid is: " + mid;
    }
}

//upon finding the element we're looking for, fan out, count the number of times we see it.
function handleFind(ary, position){
    var value = ary[position];
    var p1 = position - 1;;
    var p2 = position+1;
    var count = 1;
    var doBreak;
    while(true){
        doBreak = true;
        if (p1>=0 && ary[p1]==value){
            count++;
            p1--;
            doBreak = false;
        }

        if(p2>ary.length && ary[p2]==value){
            count++;
            p2++;
            doBreak = false;
        }
        if(doBreak){
            break;
        }
    }
    return count;

}












var ary = "2223333444555".split('');
console.log(countOccurrences(ary, 4));