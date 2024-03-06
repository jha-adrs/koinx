import { fetchTrending } from '@/actions/trending';
import { Icons } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { z } from 'zod';

interface TrendingCoinsCardProps {

}

//Used for validation of response from fetchTrending
const validatorSchema = z.array(
    z.object({
        item: z.object({
            id: z.string(),
            name: z.string(),
            symbol: z.string(),
            small: z.string(),
            data: z.object({
                price_change_percentage_24h: z.object({
                    usd: z.number()
                })
            })
        })
    
    })
).min(3);

export const TrendingCoinsCard = async ({ }: TrendingCoinsCardProps) => {
    const {data} = await fetchTrending();
    //Validate response
    return (
        <div className="flex flex-col  rounded-lg p-6 bg-white h-[250px] border-2 space-y-8">
            <div className="flex flex-row w-full ">
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    Trending Coins (24h)
                </p>
            </div>

            <div className="flex flex-col space-y-4">
                <Suspense fallback={<>
                    <TokenSkeleton />
                    <TokenSkeleton />
                    <TokenSkeleton />
                </>}>
                    <Token name={data[0].item.name} symbol={data[0].item.symbol} change={data[0].item.data.price_change_percentage_24h["usd"]} imagePath={data[0].item.small} />
                    <Token name={data[1].item.name} symbol={data[1].item.symbol} change={data[1].item.data.price_change_percentage_24h["usd"]} imagePath={data[1].item.small} />
                    <Token name={data[2].item.name} symbol={data[2].item.symbol} change={data[2].item.data.price_change_percentage_24h["usd"]} imagePath={data[2].item.small} />
                </Suspense>

            </div>
        </div>
    )
}
interface TokenProps {
    name: string;
    symbol: string;
    change: number;
    imagePath: string;
}
const Token = ({ name, symbol, change, imagePath }: TokenProps) => {
    return (
        <div className="flex flex-row items-center justify-between font-semibold">
            <div className='inline-flex space-x-2'>
                <Image src={imagePath} alt={`${name} Token Logo`} height={25} width={25} className='bg-black w-6 h-6 rounded-full' />
                <p className="">
                    {name}{`(${symbol})`}
                </p>
            </div>
            <div className="flex w-fit h-8 bg-green-bg rounded-md items-center p-2 space-x-2">

                {
                    change < 0 ?  <Icons.DOWN_ARROW_RED />:<Icons.UP_ARROW_GREEN />
                }
                <p className="inline-flex text-green">
                    {`${change?.toFixed(2)}%`}
                </p>
            </div>
        </div>
    )
}
const TokenSkeleton = () => {
    return (
        <div className="flex flex-row items-center justify-between font-semibold">
            <div className='inline-flex space-x-2'>
                <Skeleton className=' w-6 h-6 rounded-full' />
                <Skeleton className='h-6 w-36' />
            </div>
            <Skeleton className="flex w-12 h-6  rounded-md" />
        </div>
    )
}