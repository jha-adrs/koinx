"use server"

import { config } from "@/lib/config"
import axios from "axios"

interface FetchPriceProps {
    ids: string
    vs_currencies: string
    include_24hr_change: boolean

}
interface FetchPriceResponse {
    success: boolean
    name: string
    inr_price: number
    usd_price: number
    inr_24h_change: number
    usd_24h_change: number

}

export const fetchPrice = async ({ ids, include_24hr_change, vs_currencies }: FetchPriceProps): Promise<FetchPriceResponse | { success: false }> => {
    try {
        const url = config.FETCH_PRICE_API_URL;
        const { data } = await axios.get(url, {
            headers: {
                'x-cg-demo-api-key': config.COINGECKO_API_KEY
            },
            method: 'GET',
            params: {
                ids,
                include_24hr_change,
                vs_currencies
            }
        });
        //console.log("API Res2",data[ids])
        return {
            success: true,
            name: ids,
            inr_price: data[ids]["inr"],
            usd_price: data[ids]["usd"],
            inr_24h_change: data[ids]["inr_24h_change"],
            usd_24h_change: data[ids]["usd_24h_change"],
        }

    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }


}