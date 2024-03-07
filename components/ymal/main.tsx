"use client"
import React, { Suspense, useEffect, useState } from 'react';
import { TokenGraphCard } from './token-graph-card';
import { fetchTrending } from '@/actions/trending';
import { Skeleton } from '../ui/skeleton';
// You may also like
interface YMALCardProps {

}

export const YMALCard = ({ }: YMALCardProps) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = fetchTrending().then((response) => {
                if (!response?.success) {
                    throw new Error("Couldnt fetch");
                }
                setData(response.data);
            }).catch((err) => {
                console.log(err);
            })

        };

        fetchData();
    }, []);
    return (
        <div className="flex flex-col p-4 bg-white min-h-[300px] w-full rounded-md border-2 md:border-0">
            <p className=" gap-x-2 font-semibold text-xl">
                You May Also Like
            </p>

            <div className="flex flex-col">
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