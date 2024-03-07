"use client"
import React from 'react';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { PriceChart } from './price-chart';
import Image from 'next/image';

interface MainCardProps {
    inr_price: number;
    usd_price: number;
    change: number;
    symbol: string;
    imageURL?: string;
    name: string;
}

export const MainCard = ({ inr_price, usd_price, change, symbol, imageURL, name }: MainCardProps) => {
    return (
        <div>
            <TokenHeader className="flex md:hidden pb-4" symbol={symbol} name={name} />
            <div className="flex flex-col  rounded-lg p-6 bg-white min-h-[500px] h-fit border-2">
                <TokenHeader className='hidden md:flex'  symbol={symbol} name={name} />

                <PriceInfo inr_price={inr_price} usd_price={usd_price} change={change} />
                <Separator className="w-full my-8 bg-gray-300" />
                <PriceChart name={name} />
            </div>
        </div>
    )
}

interface TokenHeaderProps {

    symbol: string;
    name: string;
    className?: string
}
const TokenHeader = ({ className = "", symbol, name }: TokenHeaderProps) => {
    return (
        <div className={cn("flex flex-row w-full space-x-8", className)}>
            <div className='inline-flex items-center space-x-2'>
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    <Image src={`/images/${name === 'bitcoin' ? 'bitcoin' : 'ethereum'}.png`} alt='Bitcoin Logo' width={30} height={30} />  <span className="capitalize">{name}</span>
                </p>
                <p className='font-semibold text-lg text-foreground-muted'>
                    {symbol}
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

interface PriceInfoProps {
    inr_price: number;
    usd_price: number;
    change: number;
}
const PriceInfo = ({ inr_price, usd_price, change }:PriceInfoProps) => {
    const changePercent = change.toFixed(2);
    return (

        <div className='md:pt-4'>
            <div className="flex flex-row h-fit w-full items-center space-x-6 ">
                <div className="items-center justify-center">
                    <p className="text-3xl font-bold text-foreground-5">
                        ${usd_price.toLocaleString()}
                    </p>
                </div>
                <div className='inline-flex gap-x-2'>
                    <div className="flex items-center justify-center bg-green-bg w-16 h-6 rounded-md">
                        <Icons.UP_ARROW_GREEN classNames="w-6 h-6" />
                        <p className="text-green font-semibold">
                            {changePercent}%
                        </p>
                    </div>
                    <p className=" text-foreground-muted">
                        (24H)
                    </p>
                </div>
            </div>
            <p className="font-medium text-lg text-foreground-5">
                &#8377; {inr_price.toLocaleString()}
            </p>
        </div>
    )
}
