"use client"
import React from 'react';

interface ErrorProps {

}

const Error = ({ }: ErrorProps) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            <p className="text-3xl">
                😥
            </p>
            <p className="font-semibold text-2xl">
                Oops! Something went wrong
            </p>
            <p className="font-medium">
                Try a different URL or try again later
            </p>
            <p className="font-light">
                (Check console for advanced info)
            </p>
        </div>
    )
}

export default Error;