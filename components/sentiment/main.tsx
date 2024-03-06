import React from 'react';
import { Icons } from '../icons';

interface SentimentCardProps {

}

export const SentimentCard = ({ }: SentimentCardProps) => {
    return (
        <div className="flex flex-col  rounded-lg p-6 space-y-2 bg-white min-h-[500px] border-2">
            <p className="inline-flex gap-x-2 font-semibold text-xl">
                Sentiment
            </p>
            <div className="">
                <p className="font-semibold text-base text-foreground-muted inline-flex gap-x-2 items-center">
                    Key Events <Icons.INFO_TOOLTIP />
                </p>
            </div>

            <div className="flex flex-row overflow-x-auto space-x-2 no-scrollbar">
                <Card1 />
                <Card2 />
            </div>
            <div className="pt-4 font-semibold">
                <p className=" text-base text-foreground-muted inline-flex gap-x-2 items-center">
                    Analyst Estimates <Icons.INFO_TOOLTIP />
                </p>
                <div className="flex flex-row py-4 space-x-4 md:space-x-8 items-center justify-between ">
                    <div className="flex-col">
                        <div className='flex items-center justify-center w-24 h-24 bg-green-bg rounded-full'>
                            <p className=" text-3xl text-green">76%</p>
                        </div>
                    </div>
                    <div className="flex-col space-y-2 ">
                        <p className="text-foreground-muted font-normal">Buy</p>
                        <p className="text-foreground-muted font-normal">Hold</p>
                        <p className="text-foreground-muted font-normal">Sell</p>
                    </div>
                    <div className="flex-col space-y-2 w-full ">
                        <div className="flex flex-row items-center space-x-2">
                            <div className='h-[5px] bg-green w-[76%] rounded-sm' />
                            <p className="text-foreground-muted font-normal">76%</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className='h-[5px] bg-gray-400 w-[16%] rounded-sm' />
                            <p className="text-foreground-muted font-normal">16%</p>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <div className='h-[5px] bg-red-muted w-[8%] rounded-sm' />
                            <p className="text-foreground-muted font-normal">8%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card1 = () => {
    return (
        <div className='flex flex-row h-fit min-w-[90%] md:min-w-[400px] w-full bg-blue-accent rounded-lg p-4 space-x-2'>
            <div className="flex-col">
                <Icons.FEED_ICON />
            </div>
            <div className="flex-col">
                <div className="flex-col space-y-2">
                    <p className="font-semibold text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.                    </p>
                    <p className="text-foreground-muted text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.                    </p>
                </div>
            </div>
        </div>
    )
}
const Card2 = () => {
    return (
        <div className='flex flex-row h-fit min-w-[90%] md:min-w-[400px] w-full bg-green-bg rounded-lg p-4 space-x-2'>
            <div className="flex-col">
                <Icons.CHART_UP_ICON />
            </div>
            <div className="flex-col">
                <div className="flex-col space-y-2">
                    <p className="font-semibold text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.                    </p>
                    <p className="text-foreground-muted text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.                    </p>
                </div>
            </div>
        </div>
    )
}