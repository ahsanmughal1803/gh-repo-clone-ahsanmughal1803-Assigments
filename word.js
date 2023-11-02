import inquirer from "inquirer";
{
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Sentence",
            message: "Enter your sentence to count the word"
        }
    ]);
    const word = answers.Sentence.trim().split(" ");
    console.log(`Your sentence word count is ${word.length}`);
}
