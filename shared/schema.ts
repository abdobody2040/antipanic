import { z } from "zod";

export const journalEntrySchema = z.object({
  id: z.string(),
  date: z.string(),
  time: z.string(),
  intensity: z.number().min(0).max(10),
  trigger: z.string(),
  notes: z.string(),
  createdAt: z.number(),
});

export const insertJournalEntrySchema = journalEntrySchema.omit({ 
  id: true, 
  createdAt: true 
});

export type JournalEntry = z.infer<typeof journalEntrySchema>;
export type InsertJournalEntry = z.infer<typeof insertJournalEntrySchema>;

export const appSettingsSchema = z.object({
  language: z.enum(['en', 'ar']),
  biometricLock: z.boolean(),
});

export type AppSettings = z.infer<typeof appSettingsSchema>;
