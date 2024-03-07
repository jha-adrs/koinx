import { fetchTrending } from '@/actions/trending';
import { Icons } from '@/components/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { itemSchema, responseSchema } from '@/lib/validators/trending-tokens-response';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { z } from 'zod';

interface TrendingCoinsCardProps {

}


export const TrendingCoinsCard = async ({ }: TrendingCoinsCardProps) => {
    const response = await fetchTrending();
    //Validate response
    //console.log("1212",response)
    if (!response.success) {
        throw new Error("Couldnt fetch trending")
    }
    const data = await responseSchema.parseAsync(response.coins)
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
                    <Token item={data[0]} />
                    <Token item={data[1]} />
                    <Token item={data[2]} />
                </Suspense>

            </div>
        </div>
    )
}
interface TokenProps {
    item: z.infer<typeof itemSchema>
}

const Token = ({ item }: TokenProps) => {
    //console.log("ITEM12", item)
    const change = item.item.data.price_change_percentage_24h.usd || 0.00;
    return (
        <div className="flex flex-row items-center justify-between font-semibold">
            <div className='inline-flex space-x-2 max-w-[80%] md:max-w-[40%] lg:max-w-[60%] '>
                <Image src={item.item.small} alt={`${item.item.name} Token Logo`} height={25} width={25} className='bg-black w-6 h-6 rounded-full' />
                <p className=" overflow-x-auto no-scrollbar text-overflow-ellipsis whitespace-nowrap">
                    {item.item.name}{`(${item.item.symbol})`}
                </p>
            </div>
            <div className={cn("flex w-fit h-6 lg:h-8 rounded-md items-center p-1 space-x-2",
                change < 0 ? "bg-red-50 text-red-muted" : "bg-green-bg text-green"
            )}>

                {
                    change < 0 ? <Icons.DOWN_ARROW_RED /> : <Icons.UP_ARROW_GREEN />
                }
                <p className="inline-flex ">
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