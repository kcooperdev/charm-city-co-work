
import { GoogleGenAI, Type } from "@google/genai";

export async function getVibeRecommendation(userNeed: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on the following request from a tech professional in Baltimore: "${userNeed}", 
    suggest which of our upcoming co-working days (Feb 24-26) or Baltimore neighborhoods 
    best fits their needs. 
    
    Locations available:
    - Feb 24: Signal Hill Hub (Federal Hill) - Professional, great views, harbor vibe.
    - Feb 25: The Boiler Room (Station North) - Artsy, industrial, high-focus, creative community.
    - Feb 26: Oakes & Anchor (Fells Point) - Historic, cozy, wharf-side, social yet productive.

    Format the response as a short, punchy recommendation in a helpful "concierge" tone.`,
    config: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 200,
    },
  });

  return response.text;
}
