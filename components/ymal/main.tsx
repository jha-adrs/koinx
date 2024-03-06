import React from 'react';
// You may also like
interface YMALCardProps {

}

export const YMALCard = ({ }: YMALCardProps) => {
    return (
        <div className="flex flex-col p-6 bg-white h-[300px] border-2 w-full">
            <div className="flex flex-row w-full space-x-8">
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    YMAL
                </p>
            </div>
        </div>
    )
}