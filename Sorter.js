var Sorter = function(){

}

Sorter.prototype.bubbleSort = function(ary){
    for(var i=0;i<ary.length;i++){
        for(var ii=0;ii<ary.length;ii++){
            var tmp = ary[i];
            if (tmp < ary[ii]){
                ary[i] = ary[ii];
                ary[ii]=tmp;
            }
        }
    }
    return ary;
}

Sorter.prototype.insertionSort = function(data){
    //iterate through the whole data set
    for (var i = 0; i < data.length; i++) {
        var j = i;
        //if our comparison item is > 0 and larger then our current value
        //count back until it's not.
        while (j > 0 && data[i] < data[j - 1]) {
            j--;
        }

        var tmp = data[i];
        for (var k = i; k > j; k--)  {
            data[k] = data[k - 1];
        }

        data[j] = tmp;
    }
    return data;
}

Sorter.prototype.mergeSort = function(ary){

}

Sorter.prototype.quickSort = function(ary){

}


Sorter.prototype.heapSort = function(ary){

}


Sorter.prototype.reduce = function(input){
    var p1 =0;
    var p2 =1;
    var start = 0;
    if (typeof input === 'string'){
        input = input.split('');
    }

    while(p2<input.length){
        var replacement = reduction(input[p1], input[p2]);
        if (replacement != undefined){
            input[p1] = undefined;
            input[p2] = replacement;
            for(var i =p1;i>0;i--){
                input[i] = input[i-1];//pull everyone up
            }
            start++;
        }
        p1++;
        p2++;
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

Sorter.prototype.quickSort = function(items, left, right) {
    var index;
    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            this.quickSort(items, left, index - 1);
        }

        if (index < right) {
            this.quickSort(items, index, right);
        }
    }
    return items;

    function swap(items, firstIndex, secondIndex){
        var temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;


        while (i <= j) {

            while (items[i] < pivot) {
                i++;
            }

            while (items[j] > pivot) {
                j--;
            }

            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }

        return i;
    }
}

//var ary = [4,7,3,8,1,9];
//var val = "The quick brown fox";
//var sorter = new Sorter();
//sorter.quickSort(ary, 0 , ary.length-1);
//console.log(ary);

var input = "bcab";
var sorter = new Sorter();
var len = sorter.reduce(input);
console.log(len);
