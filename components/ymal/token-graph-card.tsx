
import React from 'react';
import { Skeleton } from '../ui/skeleton';
import Image from 'next/image';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';

interface TokenGraphCardProps {
    name:string;
    symbol:string;
    change:number;
    imagePath:string;
    sparkline: string;
    price:number;
}

export const TokenGraphCard = ({
    name,
    symbol,
    change,
    imagePath,
    sparkline,
    price
}: TokenGraphCardProps) => {
    return (
        <div className='border rounded-lg min-h-24 h-fit min-w-56'>
            {/* <Skeleton className='w-56 h-36 rounded-lg'/> */}
            <div className="flex flex-col p-4 space-y-2">
                <div className="inline-flex items-center space-x-1">
                    <Image src={imagePath} width={25} height={25} className='w-6 h-6 rounded-full' alt="Sparkline" />
                    <p className="font-medium text-sm text-foreground-1">{symbol}</p>
                    <div className={cn("flex w-fit h-4 rounded-md items-center p-1 space-x-1",
                        change < 0 ? "bg-red-50 text-red-muted" : "bg-green-bg text-green"
                    )}>

                        {
                            change < 0 ? <Icons.DOWN_ARROW_RED /> : <Icons.UP_ARROW_GREEN />
                        }
                        <p className="inline-flex text-xs">
                            {`${change?.toFixed(2)}%`}
                        </p>
                    </div>
                </div>
                <p className="font-semibold" dangerouslySetInnerHTML={{ __html: price }}></p>
                <div className="w-full">
                    <Image src={sparkline} alt="Sparkline" width={150} height={200} className='' />
                </div>
            </div>
        </div>
    )
}