import React from 'react';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Icons } from '../icons';

interface AboutCardProps {

}

export const AboutCard = ({ }: AboutCardProps) => {
    return (
        <div className="flex flex-col  rounded-lg p-6 bg-white min-sh-[500px] border-2">

            <p className="inline-flex gap-x-2 font-semibold text-xl pb-4">
                About Bitcoin
            </p>
            <div className='space-y-2 py-4'>
                <div className="space-y-2">
                    <h2 className="font-bold text-base">
                        What is Bitcoin?
                    </h2>
                    <p className="font-medium text-sm">
                        Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
                    </p>
                </div>
                <div className="space-y-2 py-4">
                    <h2 className="font-bold text-base">
                        Lorem ipsum dolor sit amet consectetur
                    </h2>
                    <p className="font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.

                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.

                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </p>
                </div>
                <Separator className='w-full bg-gray-300' />


            </div>
            <p className="inline-flex gap-x-2 font-semibold text-xl py-4">
                Already Holding Crypto?
            </p>

            <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row ">
                <div className="flex min-h-36 min-w-48 space-x-4 rounded-md items-center justify-start p-4 bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD]">
                    <div className="flex-col">
                        <Image src="/images/investing1.png" width={150} height={150} alt='Investing' />
                    </div>
                    <div className="flex-col space-y-4">
                        <h2 className="font-bold text-xl sm:text-2xl text-white">
                            Calculate your tax liability
                        </h2>
                        <Button className='bg-white font-semibold space-x-2 rounded-lg'>
                            <span>Check Now</span> <Icons.CHEV_RIGHT />
                        </Button>
                    </div>

                </div>
                <div className="flex min-h-36 min-w-48 space-x-4 rounded-md items-center justify-start p-4 bg-gradient-to-br from-[#FF9865] to-[#EF3031]">
                    <div className="flex-col">
                        <Image src="/images/investing2.png" width={150} height={150} alt='Investing' />
                    </div>
                    <div className="flex-col space-y-4">
                        <h2 className="font-bold text-xl sm:text-2xl text-white">
                            Calculate your tax liability
                        </h2>
                        <Button className='bg-white font-semibold space-x-2 rounded-lg'>
                            <span>Check Now</span> <Icons.CHEV_RIGHT />
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}