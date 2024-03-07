import React from 'react';
import { IndividualCard } from './individual-card';

interface TeamCardProps {

}

export const TeamCard = ({ }: TeamCardProps) => {
    return (
        <div className="flex rounded-lg p-6 bg-white min-h-[500px] border-2 ">
            <div className="flex-col space-y-2">
                <p className="inline-flex gap-x-2 font-semibold text-xl">
                    Team
                </p>
                <p className="font-medium text-sm py-2">
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                </p>
                <IndividualCard name="John Smith" imagePath='/images/john-smith.png'/>
                <IndividualCard name="John Smith" imagePath='/images/elina-williams.png'/>
                <IndividualCard name="John Smith" imagePath='/images/john-smithy.png'/>
            </div>
        </div>
    )
}