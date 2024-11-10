import OpenAI from "openai";

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Enable browser if necessary
});

// Function to call the identify_research_areas tool
export async function identifyResearchAreas(data) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            "Please identify the research areas for me based on this information.",
        },
      ],
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      tools: [
        {
          type: "function",
          function: {
            name: "identify_research_areas",
            description:
              "Identify relevant research areas based on a student's profile and interests",
            parameters: {
              type: "object",
              required: [
                "name",
                "degree_level",
                "university_or_company",
                "location",
                "relevant_coursework",
                "majors_minors",
                "graduation_year",
                "skills",
                "bio",
                "contact_information",
                "research_areas",
              ],
              properties: {
                name: {
                  type: "string",
                  description: "The name of the student",
                },
                degree_level: {
                  type: "string",
                  description:
                    "The degree level of the student (e.g., Bachelor's, Master's, PhD)",
                },
                university_or_company: {
                  type: "string",
                  description:
                    "The university or company the student is affiliated with",
                },
                location: {
                  type: "string",
                  description: "The location of the university or company",
                },
                relevant_coursework: {
                  type: "array",
                  description:
                    "List of relevant coursework completed by the student",
                  items: {
                    type: "string",
                    description: "A specific course taken by the student",
                  },
                },
                majors_minors: {
                  type: "array",
                  description:
                    "List of majors and minors pursued by the student",
                  items: {
                    type: "string",
                    description: "A specific major or minor",
                  },
                },
                graduation_year: {
                  type: "integer",
                  description: "The expected graduation year of the student",
                },
                skills: {
                  type: "array",
                  description: "List of skills the student possesses",
                  items: {
                    type: "string",
                    description: "Specific skill of the student",
                  },
                },
                bio: {
                  type: "string",
                  description:
                    "A short biography of the student including their research interests",
                },
                contact_information: {
                  type: "string",
                  description:
                    "The student's contact information (email/LinkedIn/GitHub)",
                },
                research_areas: {
                  type: "array",
                  description: "A list of available research areas",
                  items: {
                    type: "string",
                    description: "A specific research area",
                  },
                },
              },
              additionalProperties: false,
            },
          },
        },
      ],
    });

    return response;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
