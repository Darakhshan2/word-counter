#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "ENTRE A PARAGRAPH TO COUNT A WORD : "
    }
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Your paragragh contain ${word.length} words`);
