// let sentence ="java is fun";
// let reversedSentence= sentence.split(" ").reverse().join(" ");
// console.log(reversedSentence);

// function isRotation(s1,s2){
//     if
// }

function isRotation(s1,s2){
    if(s1.length!==s2.length){
        return false;
    }
    return (s1+s1).includes(s2);
}
let s1 ="abcd";
let s2="cdab";
if(isRotation(s1,s2)){
    console.log("Rotation");
}else{
    console.log("Not a rotation")
}

