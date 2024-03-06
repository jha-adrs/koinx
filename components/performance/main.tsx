import React from 'react';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';
import { Fundamentals } from './fundamentals';

interface PerformanceCardProps {
    todayLow: number;
    todayHigh: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    currentPrice: number;
}

export const PerformanceCard = ({
    currentPrice = 95000,
    todayLow = 46055,
    todayHigh = 96055,
    fiftyTwoWeekLow = 46055,
    fiftyTwoWeekHigh = 96055
}: PerformanceCardProps) => {
    const percentToday: number = Math.floor((currentPrice - todayLow) / (todayHigh - todayLow) * 100);
    const percent52Week: number = Math.floor((currentPrice - fiftyTwoWeekLow) / (fiftyTwoWeekHigh - fiftyTwoWeekLow) * 100);
    
    return (
        <div className="flex flex-col  rounded-lg p-6 bg-white min-h-[500px] border-2">
            <div className="w-full space-y-8">
                <p className="font-semibold text-xl">
                    Performance
                </p>

                <div className="flex flex-row items-center justify-between w-full space-x-2 ">
                    <div className="flex flex-col ">
                        <p className="text-sm text-nowrap ">Today&apos;s Low</p>
                        <p className="text-lg font-semibold">{todayLow.toLocaleString()}</p>
                    </div>
                    <div className='flex flex-row h-[5px] relative rounded-lg w-full bg-gradient-to-r from-[#FF4949]  via-[#FFAF11] to-[#11EB68]'>

                        <div className={cn(
                            `left-[${percentToday}%]`,
                            "absolute flex top-2 ",
                        )}>
                            <div className="flex flex-col items-center">
                                <p><Icons.UP_ARROW_BLACK /></p>
                                <p className='text-foreground-muted'>${currentPrice.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <p className=" text-sm text-nowrap">Today&apos;s High</p>
                        <p className="text-lg font-semibold">{todayHigh.toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between w-full space-x-2 ">
                    <div className="flex flex-col ">
                        <p className="text-sm text-nowrap ">52W Low</p>
                        <p className="text-lg font-semibold">{fiftyTwoWeekLow.toLocaleString()}</p>
                    </div>
                    <div className='flex flex-row h-[5px] relative rounded-lg w-full bg-gradient-to-r from-[#FF4949]  via-[#FFAF11] to-[#11EB68]'>

                        <div className={cn(
                            "absolute flex top-2 ",
                            `left-[${percent52Week}%]`,
                        )}>
                            <div className="flex flex-col items-center">
                                <p><Icons.UP_ARROW_BLACK /></p>
                                <p className='text-foreground-muted'>${currentPrice.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className=" text-sm text-nowrap">52W High</p>
                        <p className="text-lg font-semibold">{fiftyTwoWeekHigh.toLocaleString()}</p>
                    </div>

                </div>

                <Fundamentals/>

            </div>
        </div>
    )
}