import { z } from 'zod';

export const skillGroupSchema = z.record(z.array(z.string()));

export type SkillGroup = z.infer<typeof skillGroupSchema>;

export const skillsSchema = z.array(skillGroupSchema);
