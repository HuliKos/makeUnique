// Write your solution below:
// function makeUnique(input) {
//     let output = ""

//     for(let i=0; i<input.length; i++){
//         if(output.includes(input[i])){
//             continue
//         } else {
//             output += input[i]
//         }
//     }
//         return output
// }




function makeUnique(input){
    let ouput = new Set(input.split(""))
    return [...ouput].join("")
}


console.log(makeUnique(`hello`))