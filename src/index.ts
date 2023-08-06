import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import { askQuestion } from './user.js';
import { botAnswer } from './bot.js';
import { startLoading, endLoading } from './loading.js';
dotenv.config();

(async () => {
  while (true) {
    const userInput = askQuestion();
    startLoading();

    checkExit(userInput);

    await botAnswer();

    endLoading();
  }
})();

function checkExit(input: string) {
  if (input === 'exit') {
    process.exit();
  }
}
