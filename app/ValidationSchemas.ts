import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});

// alias for clarity when creating a new issue
export const createIssueSchema = IssueSchema;
