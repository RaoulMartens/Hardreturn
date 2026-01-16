import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

const API_KEY = "AIzaSyDG1qR7qmEBK5A9LkIJ9FKxmI9X-0fzFds";

async function testModel(modelName) {
    console.log(`Testing model: ${modelName}...`);
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello?");
        const response = await result.response;
        console.log(`SUCCESS: ${modelName}`);
        return true;
    } catch (error) {
        console.error(`FAILURE: ${modelName}`);
        const errorMsg = `Error for ${modelName}:\n${error.message}\n${JSON.stringify(error, null, 2)}\n\n`;
        fs.appendFileSync('error.log', errorMsg);
        return false;
    }
}

async function run() {
    fs.writeFileSync('error.log', ''); // Clear log
    await testModel("gemini-2.5-pro");
}

run();
