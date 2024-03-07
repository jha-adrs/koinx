import "server-only"
import {z} from 'zod';

//Make sure all env keys are present

const envSchema = z.object({
    "COINGECKO_API_KEY": z.string(),
    "NODE_ENV": z.enum(["production", 'development']).default('development'),
    "TRENDING_TOKENS_API_URL": z.string().optional().default("https://api.coingecko.com/api/v3/search/trending"),
    "FETCH_PRICE_API_URL": z.string().optional().default("https://api.coingecko.com/api/v3/simple/price")
})

export const config = envSchema.parse(process.env);
