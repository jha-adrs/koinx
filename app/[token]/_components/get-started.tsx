import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface GetStartedCardProps {

}

export const GetStartedCard = ({ }: GetStartedCardProps) => {
    return (
        <div className="flex flex-col rounded-lg p-6 bg-blue min-h-[500px] h-fit">
            <div className="flex flex-col w-full p-4 lg:p-8 space-y-4 items-center justify-center">
                <Image src={"/svgs/get-started.svg"} width={200} height={200} alt='Get Started Logo' className='md:hidden' />
                <div className="px-2">
                    <h1 className="inline-flex gap-x-2 text-center font-semibold text-xl md:text-xl lg:text-2xl break-words text-white">
                        Get Started with KoinX for FREE
                    </h1>
                </div>
                <p className=" text-base text-center font-light text-white">
                    With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.
                </p>
                <Image src={"/svgs/get-started.svg"} width={200} height={200} alt='Get Started Logo' className='hidden md:block' />
                <Button className='text-foreground-1 font-semibold bg-white'>
                    Get Started for FREE <Icons.CHEV_RIGHT />
                </Button>
            </div>
        </div>
    )
}