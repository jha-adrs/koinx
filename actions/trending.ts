"use server"
//Fetch trending tokens
import { config } from "@/lib/config"
import { responseSchema } from "@/lib/validators/trending-tokens-response";
import axios from "axios";
export const fetchTrending = async () => {
    //GET request
    try {
        // //Wait 3sec
        // await new Promise((resolve)=>{
        //     setTimeout(()=>{resolve("Done")},3000)
        // })
        const { data } = await axios(config.TRENDING_TOKENS_API_URL,{
            headers: {
                'x-cg-demo-api-key': config.COINGECKO_API_KEY
            }
        });
        if(!data || !data.coins || !data.coins.length){
            throw new Error('No data found in API reponse');
        }else {
            const validationRes = await responseSchema.safeParseAsync(data.coins);
            if(!validationRes.success){
                console.log("Failed Validation data:",data.coins)
                throw new Error("Validation Failed");
            }
        }
        return {
            success: true,
            coins: data.coins
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error,
            coins: []
        }
    }
}