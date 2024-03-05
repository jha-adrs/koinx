"use client"
import React from 'react';
import { Icons } from '../icons';

interface MainCardProps {

}

export const MainCard = ({ }: MainCardProps) => {
    return (
        <div className="flex flex-col  rounded-lg p-6 bg-white h-[500px] border-2">
            <div className="flex flex-row w-full space-x-8">
                <div className='inline-flex items-center space-x-2'>
                    <p className="inline-flex gap-x-2 font-semibold text-xl">
                        <Icons.BITCOIN classNames="w-6 h-6" />  Bitcoin
                    </p>
                    <p className='font-semibold text-md text-foreground-muted'>
                        BTC
                    </p>
                </div>

                <div className=' bg-[#768396] w-fit h-fit rounded-lg p-2'>
                    <p className="font-medium text-white">
                        Rank #1
                    </p>
                </div>
            </div>
        </div>
    )
}