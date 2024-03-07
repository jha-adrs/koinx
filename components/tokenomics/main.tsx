"use client"
import React from 'react';
import { DoughnutChart } from './chart';
interface TokenomicsCardProps {

}

export const TokenomicsCard = ({ }: TokenomicsCardProps) => {
    return (
        <div className="flex flex-col space-y-8 rounded-lg p-6 bg-white min-h-[300px] border-2">

            <p className="inline-flex space-x-2 font-semibold text-xl">
                Tokenomics
            </p>
            <div className="flex-col space-y-4">
                <p className="font-semibold text-lg">
                    Initial Distribution
                </p>
                <div className=" max-h-72 h-fit w-fit ">
                    <DoughnutChart />
                </div>
                <p className="font-medium text-sm">
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                </p>
            </div>
        </div>
    )
}