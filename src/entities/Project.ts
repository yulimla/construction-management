// src/domain/entities/Project.ts
/*
requirement 
• Project ID (generated 6 digit unique number)
• Project Name (free text, max 200 chars)
• Project Location (free text, max 500 chars)
• Project Stage, the options:
    • Concept
    • Design & Documentation
    • Pre-Construction
    • Construction
• Project Category, the options:
    • Education
    • Health
    • Office
    • Others, _______ (user can input free text for other category)
• Project Construction Start Date (date)
• Project Details/Description (free text, max 2000 chars)
• Project Creator ID / (UserID)
*/

export interface Project {
  id: string; // Project ID
  name: string; // Project Name
  location: string; // Project Location
  stage:
    | "Concept"
    | "Design & Documentation"
    | "Pre-Construction"
    | "Construction"; // Project Stage
  category: "Education" | "Health" | "Office" | "Other"; // Project Category
  otherCategory?: string; // if categiry is other
  startDate: Date; // Project Construction Start Date
  description: string; // Project Description
  creatorId: string; // Creator ID
}
