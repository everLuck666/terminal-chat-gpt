import { Configuration, OpenAIApi } from 'openai';
import { addBotMessage, messages } from './messages.js';
import colors from 'colors';

const openAi = new OpenAIApi(new Configuration({
    basePath: "",
    apiKey: "",
}));

export async function botAnswer() {
    const chatCompletion = await openAi.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages
    })
    const answer =  chatCompletion.data.choices[0].message?.content;
    addBotMessage(answer!)

    console.log(colors.red("Bot: "), answer)
   



}