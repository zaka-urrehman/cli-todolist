#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
async function repeat() {
    const answer = await inquirer.prompt([{
            name: "repeat",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to do another operation"
        }]);
    return answer.repeat === "Yes" ? true : false;
}
async function todoList() {
    let startAgain = true;
    do {
        const answers = await inquirer.prompt([{
                name: "option",
                type: "list",
                choices: ["Add Item", "Display Item", "Remove Item"],
                message: "What you want to do?"
            }]);
        if (answers.option === "Add Item") {
            const item = await inquirer.prompt([{
                    name: "newitem",
                    type: "input",
                    message: "add your item here:"
                }]);
            todolist.push(item.newitem);
            startAgain = await repeat();
        }
        else if (answers.option === "Display Item") {
            // todolist.forEach(element => {console.log(element)
            console.log(todolist);
            // });
            startAgain = await repeat();
        }
        else if (answers.option === "Remove Item") {
            const removeItem = await inquirer.prompt([{
                    name: "remove",
                    type: "input",
                    message: "What item do you want to remove"
                }]);
            let index = todolist.indexOf(removeItem.remove);
            todolist.splice(index, 1);
            startAgain = await repeat();
        }
    } while (startAgain !== false);
}
todoList();
