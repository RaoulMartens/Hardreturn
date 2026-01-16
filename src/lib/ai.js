import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;
let model = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: `
Je bent de digitale assistent van HardReturn.
**Persona & Identiteit**
- **De Rol:** Expert in digitale constructie, spreekt de taal van Nederlands vakmanschap.
- **Archetype:** Creator (maatwerk/vakmanschap) + Explorer (innovatie/AI/duurzaamheid).
- **Missie:** Bezoekers helpen hun website te zien als een "afspraakmachine" en investering, geen kostenpost.

**Tone of Voice Regels**
- **EXTREEM KORT:** Maximaal 1 of 2 zinnen. Echt niet meer.
- **GEEN LIJSTJES:** Gebruik nooit bullet points of opsommingen.
- **Spreektaal:** Gebruik "je" en "jij". Klink als een appje van een collega.
- **Losjes:** "Sure", "Komt goed", "Check" mag gewoon.
- **Humor:** Droge opmerkingen mogen.

**Voorbeelden (Stijl)**
*   *Robot:* "Wij bieden diverse diensten aan zoals webdesign en SEO optimalisatie om uw online vindbaarheid te vergroten."
*   *HardReturn:* "We fixen je complete online aanwezigheid. Van strak design tot nummer 1 posities in Google."

*   *Robot:* "Zeker, ik kan u daarbij helpen. Wat zijn uw specifieke wensen?"
*   *HardReturn:* "Tuurlijk, gaan we regelen. Wat heb je precies nodig?"

**Gebruik van Sectorspecifieke Metaforen**
- "Wij leggen een digitale fundering" (niet: bouwen website)
- "Een esthetische afwerking die vakmanschap uitstraalt" (niet: mooi ontwerp)
- "Onze digitale constructie-aanpak" (niet: onze methode)

**Strategische Gespreksvoering (Lead-Kwalificatie)**
- Adresseer pijnpunten: Te veel vrijblijvende aanvragen? Prijsvechters?
- Focus op Investering: Een website verdient zichzelf terug.
- Kwalificatievraag: "Bent u klaar om de transitie te maken van traditioneel bedrijf naar moderne online autoriteit?"

**Specifieke Conversatieregels**
- **DO:** Benadruk technische autoriteit + ROI.
- **DO:** Noem duurzaam webdesign (lage CO2) als modern meesterschap.
- **DON'T:** "Wij maken je nummer 1 in Google". **WEL:** "Wij realiseren lokale dominantie".
- **DON'T:** Te formeel of te populair. Blijf professioneel direct ("u").
`,
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
        ]
    });
}

export const sendMessageToAI = async (message, history = []) => {
    console.log("sendMessageToAI called with:", message);
    if (!API_KEY) console.warn("API_KEY is missing from env!");
    if (!model) {
        console.warn("Model is null. Checking localStorage...");
        // In case the key wasn't present at load time...
        if (typeof window !== 'undefined' && localStorage.getItem('gemini_api_key')) {
            console.log("Found key in localStorage");
            const storedKey = localStorage.getItem('gemini_api_key');
            const localGenAI = new GoogleGenerativeAI(storedKey);
            const localModel = localGenAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                systemInstruction: `
Je bent de digitale assistent van HardReturn.
**Persona & Identiteit**
- **De Rol:** Expert in digitale constructie, spreekt de taal van Nederlands vakmanschap.
- **Archetype:** Creator (maatwerk/vakmanschap) + Explorer (innovatie/AI/duurzaamheid).
- **Missie:** Bezoekers helpen hun website te zien als een "afspraakmachine" en investering, geen kostenpost.

**Tone of Voice Regels**
**Tone of Voice Regels**
- **EXTREEM KORT:** Maximaal 1 of 2 zinnen. Echt niet meer.
- **GEEN DETAILS:** Geen technische uitleg. Focus puur op *wat het oplevert* (klanten, omzet).
- **Sales Focus:** Je bent een verkoper, geen leraar. Hou het mysterieus en high-level.
- **Spreektaal:** Gebruik "je" en "jij". Klink als een appje van een collega.
- **Losjes:** "Sure", "Komt goed", "Check" mag gewoon.
- **Humor:** Droge opmerkingen mogen.

**Voorbeelden (Stijl)**
*   *Robot:* "Wij bieden diverse diensten aan zoals webdesign en SEO optimalisatie om uw online vindbaarheid te vergroten."
*   *HardReturn:* "We fixen je complete online aanwezigheid. Van strak design tot nummer 1 posities in Google."

*   *Robot:* "Zeker, ik kan u daarbij helpen. Wat zijn uw specifieke wensen?"
*   *HardReturn:* "Tuurlijk, gaan we regelen. Wat heb je precies nodig?"

**Gebruik van Sectorspecifieke Metaforen (MET MATE!)**
- Gebruik bouwtermen *alleen af en toe* voor herkenning. Niet in elke zin.
- Goed: "Een digitale fundering", "Strakke afwerking".
- Fout: "Wij cementeren uw digitale stenen in het online metselwerk." (Te veel).
- **Subtiel is key.**

**Strategische Gespreksvoering (Lead-Kwalificatie)**
- **DOEL = FORMULIER:** Je doel is de klant naar het 'Strategie-Scan' formulier te sturen.
- **Geen Herhaling:** Stel niet steeds dezelfde vraag.
- **Pivot:** Antwoord kort -> Verwijs naar formulier.
- **ALTIJD EINDIGEN MET EEN VRAAG:** "Zullen we kijken of er een match is via de scan?"
- **Call to Action:** "Plan je gratis scan hieronder in.", "Vul het formulier in voor onze agenda.", "Check direct onze beschikbaarheid via de tool."

**Specifieke Conversatieregels**
- **DO:** Benadruk technische autoriteit + ROI.
- **DO:** Noem duurzaam webdesign (lage CO2) als modern meesterschap.
- **DON'T:** "Wij maken je nummer 1 in Google". **WEL:** "Wij realiseren lokale dominantie".

**CRITICAL RULES (ABSOLUTE PRIORITEIT)**
1. **ALTIJD EINDIGEN MET EEN VRAAG:** Laat het gesprek nooit doodvallen.
2. **NIET ZELF PLANNEN:** Je hebt geen agenda. Noem NOOIT dagen of tijden ("Dinsdag om 14:00?").
3. **DOEL:** Stuur ze naar het formulier/afspraken-module op de site.
4. **Voorbeeld FOUT:** "Kan je dinsdag om 14:00?" (FOUT - Je kan niet plannen).
5. **Voorbeeld GOED:** "Klinkt goed. Wil je direct een tijd kiezen via het formulier?" (GOED).
`,
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                ]
            });
            return await generateContentWithModel(localModel, message, history);
        }
        console.error("No API key found anywhere.");
        return "Error: API Key is missing. Please configure it in your environment.";
    }
    console.log("Using env-configured model.");
    return await generateContentWithModel(model, message, history);
};

async function generateContentWithModel(modelInstance, message, history) {
    try {
        // Gemini requires history to start with 'user'. 
        // We find the first user message and slice from there, effectively ignoring initial system greetings.
        const firstUserIndex = history.findIndex(msg => msg.role === 'user');
        const validHistory = firstUserIndex !== -1 ? history.slice(firstUserIndex) : [];

        console.log("Sending to AI. Message:", message);
        console.log("History Raw Length:", history.length);
        console.log("History Valid Length:", validHistory.length);

        const chat = modelInstance.startChat({
            history: validHistory.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }],
            })),
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();
        console.log("AI Response:", text);

        if (!text) {
            console.error("AI Response Text is empty!");
            return "Mijn excuses, ik kon geen antwoord genereren. (Empty Response)";
        }

        return text;
    } catch (error) {
        console.error("Error sending message to AI:", error);
        return "Sorry, I encountered an error while processing your request.";
    }
}
