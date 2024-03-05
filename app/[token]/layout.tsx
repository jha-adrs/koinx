import { Navbar } from '@/components/navbar';
import React from 'react';

interface TokenInfoLayoutProps {
    params: {
        token: string
    }
    children: React.ReactNode
}

const TokenInfoLayout = ({ params,children }: TokenInfoLayoutProps) => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center bg-background">
                <Navbar />
                {children}
            </main>
        </>
    )
}

export default TokenInfoLayout;