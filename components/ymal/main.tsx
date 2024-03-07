
import React, { Suspense } from 'react';
import { TokenGraphCard } from './token-graph-card';
import { fetchTrending } from '@/actions/trending';
import { Skeleton } from '../ui/skeleton';
import { z } from 'zod';
import { responseSchema } from '@/lib/validators/trending-tokens-response';
// You may also like
interface YMALCardProps {

}

export const YMALCard = async ({ }: YMALCardProps) => {
    const response = await fetchTrending();
    //Validate response
    //console.log("1212",response)
    if (!response.success) {
        throw new Error("Couldnt fetch trending")
    }
    const data = await responseSchema.parseAsync(response.coins)
    return (
        <div className="flex flex-col p-4 bg-white min-h-[300px] w-full rounded-md border-2 md:border-0">
            <p className=" gap-x-2 font-semibold text-xl">
                You May Also Like
            </p>

            <div className="flex flex-col">
                <Suspense fallback={<TokenGraphSkeleton />}>
                    {!!data && (
                        <>
                            <div className="flex flex-row py-2 overflow-x-auto space-x-4 no-scrollbar ">
                                {
                                    data.map((element, index) => {
                                        const item = element.item;
                                        return (<TokenGraphCard key={index} price={item.data.price} name={item.name} symbol={item.symbol} imagePath={item.small} sparkline={item.data.sparkline} change={item.data.price_change_percentage_24h["usd"]} />)
                                    })
                                }
                            </div>
                            <div className="flex py-2 overflow-x-auto space-x-4 no-scrollbar ">
                                {
                                    data.map((element, index) => {
                                        const item = element.item;
                                        return (<TokenGraphCard key={index} price={item.data.price} name={item.name} symbol={item.symbol} imagePath={item.small} sparkline={item.data.sparkline} change={item.data.price_change_percentage_24h["usd"]} />)
                                    })
                                }
                            </div>
                        </>
                    )}
                </Suspense>

                {
                    data === null ? (<TokenGraphSkeleton />) : null
                }
            </div>
        </div>
    )
}

const TokenGraphSkeleton = () => {
    return (
        <>
            <div className="flex py-2 overflow-x-auto space-x-4 no-scrollbar w-fit">
                <TokenSkeleton />
                <TokenSkeleton />
                <TokenSkeleton />
            </div>
            <div className="flex py-2 overflow-x-auto space-x-4 no-scrollbar w-fit">
                <TokenSkeleton />
                <TokenSkeleton />
                <TokenSkeleton />
            </div>
        </>
    )
}

const TokenSkeleton = () => {
    return (
        <div className='flex rounded-lg h-24  w-56'>
            <Skeleton className='w-full h-full rounded-lg' />
        </div>
    )

}