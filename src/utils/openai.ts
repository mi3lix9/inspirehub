import OpenAI from "openai";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_KEY;


export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
