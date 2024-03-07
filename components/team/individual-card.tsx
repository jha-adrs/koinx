import Image from 'next/image';
import React from 'react';

interface IndividualCardProps {
    name: string;
    imagePath:string;
    description?: string;
}

export const IndividualCard = ({ name,description,imagePath}: IndividualCardProps) => {
    return (
        <div className='flex flex-col lg:flex-row w-full min-h-24 h-fit bg-blue-accent rounded-md p-4 space-y-4 lg:space-x-4'>
            <div className="flex flex-col items-center justify-center text-nowrap font-semibold text-center">
                <Image src={imagePath} alt={`${name}'s Image`} width={150} height={200} className='w-16 h-18 rounded-md'/>
                <p className="text-sm">
                    {name}
                </p>
                <p className="text-foreground-muted text-xs">Designation Here</p>
            </div>
            <p className=" font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </p>
        </div>
    )
}