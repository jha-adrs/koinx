"use client"
import React from 'react';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { PriceChart } from './price-chart';
import Image from 'next/image';

interface MainCardProps {

}

export const MainCard = ({ }: MainCardProps) => {
    return (
        <div>
            <TokenHeader className="flex md:hidden pb-4" />
            <div className="flex flex-col  rounded-lg p-6 bg-white min-h-[500px] h-fit border-2">
                <TokenHeader className='hidden md:flex' />

                <PriceInfo/>
                <Separator className="w-full my-8 bg-gray-300" />
                <PriceChart />
            </div>
        </div>
    )
}

const TokenHeader = ({ className = "" }: { className?: string }) => {
    return (
        <div className={cn("flex flex-row w-full space-x-8", className)}>
            <div className='inline-flex items-center space-x-2'>
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    <Image src={"/images/bitcoin.png"} alt='Bitcoin Logo' width={30} height={30}/>  Bitcoin
                </p>
                <p className='font-semibold text-lg text-foreground-muted'>
                    BTC
                </p>
            </div>

            <div className=' bg-[#768396] w-fit h-fit rounded-lg p-2'>
                <p className="font-medium text-white">
                    Rank #1
                </p>
            </div>
        </div>
    )
}

const PriceInfo = () => {
    return (

        <div className='md:pt-4'>
            <div className="flex flex-row h-fit w-full items-center space-x-6 ">
                <div className="items-center justify-center">
                    <p className="text-3xl font-bold text-foreground-5">
                        $46,000.05
                    </p>
                </div>
                <div className='inline-flex gap-x-2'>
                    <div className="flex items-center justify-center bg-green-bg w-16 h-6 rounded-md">
                        <Icons.UP_ARROW_GREEN classNames="w-6 h-6" />
                        <p className="text-green font-semibold">
                            +4.5%
                        </p>
                    </div>
                    <p className=" text-foreground-muted">
                        (24H)
                    </p>
                </div>
            </div>
            <p className="font-medium text-lg text-foreground-5">
                &#8377; 36,63,554
            </p>
        </div>
    )
}
