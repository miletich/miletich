import { z } from 'zod';

export const datePointSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export type DatePoint = z.infer<typeof datePointSchema>;

export const positionSchema = z
  .object({
    id: z.number(),
    at: z.string(),
    position: z.string(),
    from: datePointSchema,
    to: datePointSchema,
    description: z.array(z.string()),
    tech: z.array(z.string()),
  })
  .strip();

export type Position = z.infer<typeof positionSchema>;

export const experienceSchema = z.array(positionSchema);
