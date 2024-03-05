import React from 'react';

interface TrendingCoinsCardProps {

}

export const TrendingCoinsCard = ({ }: TrendingCoinsCardProps) => {
    return (
        <div className="flex flex-col  rounded-lg p-6 bg-white h-[200px] border-2">
            <div className="flex flex-row w-full space-x-8">
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    TrendingCoins
                </p>
            </div>
        </div>
    )
}