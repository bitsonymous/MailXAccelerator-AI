from langchain_ollama import OllamaLLM
from langchain.prompts.chat import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate
from langchain.chains import LLMChain
import json

# Create the Ollama LLM model
llm = OllamaLLM(model="mistral")

# Define chat-style prompt with System and Human messages
chat_prompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(
        "You are an expert at parsing resumes into structured JSON following a strict format."
    ),
    HumanMessagePromptTemplate.from_template(
        """
Extract the following fields from the given resume and return them as a **valid JSON**:

- name
- email
- linkedIn
- github
- skills (as a list)
- experience (as a list of work/project descriptions)
- projects
- acheivments (as a list)
- education: a list of objects with
  - degree
  - specialization
  - institute
  - year
  - cgpa (float if present)

Resume text:
{resume}

Respond with ONLY valid JSON. No extra text.
"""
    )
])

# Function to parse the resume and extract details
def parse_resume_with_llm(resume_text: str) -> dict:
    # Create LLMChain with the defined prompt and LLM model
    chain = LLMChain(prompt=chat_prompt, llm=llm)

    # Invoke the chain with the resume text
    response = chain.invoke({"resume": resume_text})

    # Attempt to parse the response as JSON
    try:
        return response  # Convert response string into a JSON object
    except json.JSONDecodeError:
        return {"error": "Failed to parse JSON from LLM", "raw_response": response}