//http://basicalgos.blogspot.com/2012/05/52-find-sub-array-of-max-sum.html
//{1 3 -8 2 -1 10 -2 1} -> i=3 , j=5 – sum = 11



//brute force, yuck time o(n^2) space o(1)
function sumIntervals(ary){
    var returnme;
    var max = undefined;
    //todo base check, is undefined, is an array etc

    for(var i=0;i<ary.length;i++){
        var sum = ary[0];
        sum+=ary[i];
        var start = i;
        for(var ii=i+1;ii<ary.length;ii++){
            var end = ii;
            sum+=ary[ii];
            if (sum>max || max === undefined){
                max = sum;
                returnme = {
                    start:start,
                    end:end,
                    sum:sum
                }
            }

        }
    }
    return returnme;
}


var ary = [-1,-3,-8,-2,-1,-10,-2,-1];
//var ary = [1,3, -8, 2, -1, 10, -2, 1];
console.log(sumIntervals(ary));