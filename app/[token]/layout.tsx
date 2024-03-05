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
                <div className="p-2 sm:p-4 md:p-8 lg:p-10 w-full h-full">
                    <Path token={params.token} />
                    {children}
                </div>
            </main>
        </>
    )
}

export default TokenInfoLayout;