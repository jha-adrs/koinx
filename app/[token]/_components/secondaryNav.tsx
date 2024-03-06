"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
// On Click scrolls to the section

const NavItems: {
    label: string
    scrollTo: React.RefObject<HTMLDivElement> | undefined
    selected?: boolean
}[] = [
        {
            label: 'Overview',
            scrollTo: undefined,
            selected: true
        },
        {
            label: 'Fundamentals',
            scrollTo: undefined,
            selected: false
        },
        {
            label: 'News Insights',
            scrollTo: undefined,
            selected: false
        },
        {
            label: 'Sentiments',
            scrollTo: undefined,
            selected: false
        },
        {
            label: 'Team',
            scrollTo: undefined,
            selected: false
        },
        {
            label: 'Technicals',
            scrollTo: undefined,
            selected: false
        },
        {
            label: 'Tokenomics',
            scrollTo: undefined,
            selected: false
        }
    ];
interface SecondaryNavProps {

}


export const SecondaryNav = ({ }: SecondaryNavProps) => {
    const [selected, setSelected] = React.useState(0);
    //TODO: Add scroll to functionality
    //TODO: Add animations
    return (
        <div className='flex relative w-full'>
            <div className=' flex flex-row overflow-x-scroll no-scrollbar w-full transition-all'>
                {NavItems.map((item, index) => {
                    return (
                        <div key={index} >
                            <Button className='relative cursor-pointer space-x-1'
                                onClick={() => setSelected(index)}>
                                <p className=' text-foreground-1 font-semibold'>
                                    {item.label}
                                </p>
                            </Button>
                            <div className={cn(
                                " h-[1px] w-full",
                                selected === index ? "bg-blue h-[2px]" : "bg-gray-300"
                            )} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}