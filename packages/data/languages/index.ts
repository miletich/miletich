import { z } from 'zod';
import languagesJson from './languages.json';

export const languageLevelSchema = z.union([
  z.literal('fluent'),
  z.literal('intermediate'),
  z.literal('beginner'),
]);

export type LanguageLevel = z.infer<typeof languageLevelSchema>;

export const languageSchema = z.object({
  name: z.string(),
  level: languageLevelSchema,
});

export type Language = z.infer<typeof languageSchema>;

export const languagesSchema = z.array(languageSchema);

export const languages = languagesSchema.parse(languagesJson);
