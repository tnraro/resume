import { z, defineCollection } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      stack: z.array(z.string()).optional(),
      begin: z.date(),
      end: z.date().optional(),
      "is-hidden": z.boolean().optional(),
      team: z.number().optional(),
      priority: z.number().optional(),
    }),
  }),
  profile: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      name: z.string(),
      tel: z.string().optional(),
      email: z.string().email().optional(),
    })
  })
};