import { Configuration, OpenAIApi } from "openai";

interface Iprops {
  promtText: string;
}

const ChatGpt = async ({ promtText = "" }: Iprops) => {
  const configuration = new Configuration({
    organization: "org-wxj2mxsQpYng4EbduYkJhqBY",
    apiKey: process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: promtText,
    temperature: 0.5,
    max_tokens: 100,
  });
  return response;
};

export default ChatGpt;
