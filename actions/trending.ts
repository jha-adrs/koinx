"use server"
//Fetch trending tokens
import { config } from "@/lib/config"
import axios from "axios";
export const fetchTrending = async () => {
    //GET request
    try {
        //Wait 3sec
        await new Promise((resolve)=>{
            setTimeout(()=>{resolve("Done")},3000)
        })
        const { data } = await axios(config.TRENDING_TOKENS_API_URL,{
            headers: {
                'x-cg-demo-api-key': process.env.COINGECKO_API_KEY
            }
        });
        if(!data || !data.coins || !data.coins.length){
            throw new Error('No data found in API reponse');
        }
        return {
            success: true,
            data: data.coins
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error,
            data: []
        }
    }
}