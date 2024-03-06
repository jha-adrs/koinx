import { Navbar } from '@/components/navbar';
import React from 'react';
import { Path } from './_components/breadcrumbs';

interface TokenInfoLayoutProps {
    params: {
        token: string
    }
    children: React.ReactNode
}

const TokenInfoLayout = ({ params, children }: TokenInfoLayoutProps) => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center bg-background">
                <Navbar />
                <div className="px-2 sm:px-4 md:px-8 lg:px-10 w-full h-full ">
                    <Path token={params.token} />
                    {children}
                </div>
            </main>
        </>
    )
}

export default TokenInfoLayout;