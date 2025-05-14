from fastapi import FastAPI, UploadFile, File, HTTPException
import os
from fastapi.middleware.cors import CORSMiddleware

from services.text_extractor import extract_text_from_pdf
from services.llm import parse_resume_with_llm
# UploadFile: A class used to handle file uploads efficiently (does not store the file in memory).

# File: A helper to declare that the endpoint expects a file input.

# HTTPException: Used to raise errors with custom HTTP status codes and messages.

app = FastAPI()

# app: A variable that holds the FastAPI app instance.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/upload_resume")

# @app.post: A decorator that tells FastAPI this function handles POST requests.
# ("/upload_resume"): The route path. When a client sends a POST request to /upload_resume, this function will be called.

async def upload_resume(file: UploadFile = File(...)):

# async def: Defines an asynchronous function, allowing non-blocking operations like reading files.

# file: UploadFile: A parameter that expects a file to be uploaded. It uses FastAPI’s UploadFile class.

# = File(...): Tells FastAPI that this is a required file input, provided using a form.

    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only pdf file is supported")
    
    os.makedirs("uploads", exist_ok=True)
    file_path = f"uploads/{file.filename}"
    # file_location: A variable that stores the path where the uploaded file will be saved.

    with open(file_path, "wb") as f:
    # with open(...): Opens the file for writing; ensures proper closing even if an error occurs.

    # file_location: The path to save the file.

    # "wb": Write binary mode, required for saving non-text files like PDFs.

        f.write(await file.read())
        # file.read(): Reads the content of the uploaded file.

        # await: Since read() is asynchronous, await is used to pause until reading is done.

        # f.write(...): Writes the file content to disk.
 

    # as f: Gives a local name (f) to the open file object.

    extracted_text = extract_text_from_pdf(file_path)

    os.remove(file_path)

    parsed_data = parse_resume_with_llm(extracted_text)



    return {
        "message": "Resume Uploaded Successfully",
        "file_path" : file_path,
        "raw_text": extracted_text[:5000],
        "parsed_data": parsed_data
    }