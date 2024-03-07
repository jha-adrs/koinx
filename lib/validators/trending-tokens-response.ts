import { z } from "zod";

//Checks the response from Coin Gecko
export const itemSchema = z.object({
    "item": z.object({
        "id": z.string(),
        "name": z.string(),
        "symbol": z.string(),
        "small": z.string().url(),
        "data": z.object({
            "price": z.string(),
            "price_change_percentage_24h": z.object({
                "usd": z.coerce.number(),
                "inr": z.coerce.number(),
            }),
            "sparkline": z.string().url()
        })
    })
})

export const responseSchema = z.array(itemSchema);

