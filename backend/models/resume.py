from pydantic import BaseModel
from typing import List, Optional


class EducationEntry(BaseModel):
    degree : Optional[str] = None
    specialization : Optional[str] = None
    institute : Optional[str] = None
    year: Optional[str] = None
    cgpa : Optional[float] = None
class ResumeDetails(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    linkedIn: Optional[str] = None
    github : Optional[str] = None
    skills : Optional[List[str]] = []
    experience: Optional[List[str]] = []
    education : Optional[List[EducationEntry]]
    acheivments : Optional[List[str]] = []
    projects : Optional[List[str]] = []

    class Config:
        orm_mode = True  # Enables Pydantic to work with ORM models (useful when integrating with DB)