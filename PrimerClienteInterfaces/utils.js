function isOdd(n){
    if(n%2!==0){
        return n;
    }
}

function strFive(str){
    if(str.length>5) return str;
}

function filter2(a, f){
    let ys = [];
    for (let i of a){
        if(f(i)){
            ys.push(i);
        }
    }
    return ys;
}
module.exports.isOdd = isOdd;
module.exports.strFive = strFive;
module.exports.filter2 = filter2;