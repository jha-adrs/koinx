import React from 'react';

interface GetStartedCardProps {

}

export const GetStartedCard = ({ }: GetStartedCardProps) => {
    return (
        <div className="flex flex-col bg-blue rounded-lg p-6 bg-white h-[300px] border-2">
            <div className="flex flex-row w-full space-x-8">
                <p className="inline-flex gap-x-2 font-semibold text-xl text-white">
                    GetStarted
                </p>
            </div>
        </div>
    )
}