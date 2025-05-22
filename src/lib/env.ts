import { z } from "zod";

/**
 * Environment variable schema validation
 */
const envSchema = z.object({
  // Mail
  BREVO_API_KEY: z.string().min(1, "BREVO_API_KEY is required"),
});

/**
 * Validated environment variables
 */
export const env = envSchema.parse({
  // Mail
  BREVO_API_KEY: process.env.BREVO_API_KEY,
});

/**
 * Utility for type-safe access to environment variables
 */
export function getEnv<K extends keyof z.infer<typeof envSchema>>(key: K): z.infer<typeof envSchema>[K] {
  return env[key];
} 