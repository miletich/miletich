import { z } from 'zod';
import skillsJson from './skills.json';

export const skillsSchema = z.record(z.array(z.string()));
export type Skills = z.infer<typeof skillsSchema>;

export const skills = skillsSchema.parse(skillsJson);
