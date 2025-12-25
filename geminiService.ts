
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTECResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are a helpful assistant for "The Empowerment Cycle (TEC) - Liberia". 
        TEC is a civil society organization focusing on women, girls, and youth empowerment. 
        Thematic areas: E-VAWG, Economic Empowerment, Girls' Education, Civic Engagement, and Climate Action.
        Provide professional, concise, and encouraging information based on these areas. 
        If asked about donations or partnerships, direct them to "Contact us via our website".
        Limit responses to 3-4 sentences.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my database right now. Please explore our thematic areas on the website for detailed information!";
  }
};
