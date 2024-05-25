import inquirer from "inquirer";

const calculater = await inquirer.prompt ([
    {message:"enter fisrt number", type:"number",name:"firstNumber"},
    {message:"enter  secound number", type:"number",name:"secoundNumber"},

     {
        message: "select your operator",
        type: "list",
        name: "operator",
        choices: ["Addition","Subtrection","Division","Multiplication"]
     }
])
console.log(calculater);
if(calculater.operator === "Addition"){

    console.log(calculater.firstNumber + calculater.secoundNumber);

}else if(calculater.operator === "Subtrection"){

    console.log(calculater.firstNumber - calculater.secoundNumber);

}else if(calculater.operator === "Division"){

    console.log(calculater.firstNumber / calculater.secoundNumber);

} else if(calculater.operator === "Multiplication"){

   console.log(calculater.firstNumber * calculater.secoundNumber);
}else if(calculater.operator !== "Addition","Subtrection","Division","Multiplication"){
    console.log("unkown number")
}