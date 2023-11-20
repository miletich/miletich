import { z } from 'zod';

export const datePointSchema = z.object({
  from: z.number(),
  to: z.number(),
});

export type DatePoint = z.infer<typeof datePointSchema>;

export const positionSchema = z.object({
  id: z.number(),
  position: z.string(),
  from: datePointSchema,
  to: datePointSchema,
  description: z.array(z.string()),
  tech: z.array(z.string()),
});

export type Position = z.infer<typeof positionSchema>;

export const experienceSchema = z.array(positionSchema);
