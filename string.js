// let sentence ="java is fun";
// let reversedSentence= sentence.split(" ").reverse().join(" ");
// console.log(reversedSentence);

// function isRotation(s1,s2){
//     if
// }

// function isRotation(s1,s2){
//     if(s1.length!==s2.length){
//         return false;
//     }
//     return (s1+s1).includes(s2);
// }
// let s1 ="abcd";
// let s2="cdab";
// if(isRotation(s1,s2)){
//     console.log("Rotation");
// }else{
//     console.log("Not a rotation")
// }


function runLengthEncode(str){
    let result="";
    let count=1;
    for(let i=0;i<str.length;i++){
        if(str[i]===str(i+1)){
            count++
        }else{
            result+=str[i]+count;
            count=1;
        }
    }
    return result;
}
console.log(runLengthEncode("aaabbc"));
