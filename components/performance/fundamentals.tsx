import React from 'react';
import { Icons } from '../icons';
import { Separator } from '../ui/separator';

interface FundamentalsProps {

}

const items1 = ["Bitcoin Price", "24h Low / 24h High", "7d Low / 7d High", "Trading Volume", "Market Cap Rank"];
const items2 = ["Market Cap", "Market Cap Dominance", "Volume / Market Cap"];

export const Fundamentals = ({ }: FundamentalsProps) => {
    return (
        <div className='space-y-4'>
            <p className="font-semibold text-lg inline-flex gap-x-2 items-center">
                Fundamentals <Icons.INFO_TOOLTIP />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  md:space-y-0 md:gap-x-24 w-full h-full ">
                <div className="col-span-1 flex-col  ">
                    {
                        items1.map((item, index) => {
                            return (
                                <div key={index} className=" relative ">
                                    <div className='  p-4'>
                                        <div className="flex  flex-row justify-between font-semibold">
                                            <p className="text-foreground-muted">
                                                {item}
                                            </p>
                                            <p className="text-foreground-1">
                                                $16,564.46
                                            </p>
                                        </div>

                                    </div>

                                    <Separator className='absolute w-full bg-gray-300' />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-span-1 flex-col">
                    {
                        items2.map((item, index) => {
                            return (
                                <div key={index} className=" relative ">
                                    <div className='  p-4'>
                                        <div className="flex  flex-row justify-between font-semibold">
                                            <p className="text-foreground-muted">
                                                {item}
                                            </p>
                                            <p className="text-foreground-1">
                                                $16,564.46
                                            </p>
                                        </div>

                                    </div>

                                    <Separator className='absolute w-full bg-gray-300' />
                                </div>
                            )
                        })
                    }
                    <div className=" relative ">
                        <div className='  p-3'>
                            <div className="flex  flex-row justify-between font-semibold items-center">
                                <p className="text-foreground-muted">
                                    All-Time High
                                </p>
                                <div className="flex flex-col w-fit text-end">
                                    <p className="text-foreground-1">
                                        $16,564.46 <span className="text-emerald-500">-75.41%</span>
                                    </p>
                                    <p className="font-normal text-sm">
                                        Nov 10, 2021 (about 1 year)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <Separator className='absolute w-full bg-gray-300' />
                    </div>
                    <div className=" relative ">
                        <div className='p-3 '>
                            <div className="flex flex-row justify-between font-semibold items-center">
                                <p className="text-foreground-muted">
                                    All-Time Low
                                </p>
                                <div className="flex flex-col w-fit text-end">
                                    <p className="text-foreground-1">
                                        $16,564.46 <span className="text-red-500">-24500.41%</span>
                                    </p>
                                    <p className="font-normal text-sm">
                                        Jul 06, 2013 (over 9 years)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <Separator className='absolute w-full bg-gray-300' />
                    </div>
                </div>
            </div>

        </div>
    )
}