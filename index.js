#! /usr/bin/env node   
//(Shabang is ko shanabg kheten hain hash ko -sha aur explimationMark ko bank kheten hain)
import inquirer from 'inquirer';
const asnwer = await inquirer.prompt([
    { massage: "Enter first number", type: "number", name: "firstnumber" },
    { massage: "Enter second number", type: "number", name: "Secondnumber" },
    {
        message: "Select one of the operators to perfome action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// // Conditionanl Statement:
let result1 = asnwer.firstnumber;
let resylt2 = asnwer.Secondnumber;
if (asnwer.operator === "Addition") {
    console.log(`The Sum of: ${asnwer.firstnumber} + ${asnwer.Secondnumber} = ${result1 + resylt2}`);
}
else if (asnwer.operator === "Subtraction") {
    console.log(`The Subtract of: ${asnwer.firstnumber} - ${asnwer.Secondnumber} = ${result1 - resylt2}`);
}
else if (asnwer.operator === "Multiplication") {
    console.log(`The Product of: ${asnwer.firstnumber} * ${asnwer.Secondnumber} = ${result1 * resylt2}`);
}
else if (asnwer.operator === "Division") {
    console.log(`The quotion of: ${asnwer.firstnumber} / ${asnwer.Secondnumber} = ${result1 / resylt2}`);
}
else {
    console.log("Pleasr Enter you valid Operator");
}
