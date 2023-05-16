function capitalize(s){
    let myStr1 = "";
    let myStr2 = "";

    for(let i = 0; i < s.length; i++){
        if(i % 2 == 0){
            myStr1 = myStr1 + s[i].toUpperCase();
        } else {
            myStr1 = myStr1 + s[i];
        }
    }

    for(let i = 0; i < s.length; i++){
        if(i % 2 == 1){
            myStr2 = myStr2 + s[i].toUpperCase();
        } else {
            myStr2 = myStr2 + s[i];
        }

    }

    return [myStr1, myStr2];
};

console.log(capitalize("abcdef")); // 'AbCdEf', 'aBcDeF'
console.log(capitalize("codewars")); // 'CoDeWaRs', 'cOdEwArS'
console.log(capitalize("abracadabra")); // 'AbRaCaDaBrA', 'aBrAcAdAbRa'
console.log(capitalize("codewarriors")); // 'CoDeWaRrIoRs', 'cOdEwArRiOrS'