import { Navbar } from '@/components/navbar';
import React from 'react';
import { Path } from './_components/breadcrumbs';
import { Icons } from '@/components/icons';
import { MainCard } from '@/components/tokenInfo/main';
import { SecondaryNav } from './_components/secondaryNav';
import { PerformanceCard } from '@/components/performance/main';
import { SentimentCard } from '@/components/sentiment/main';
import { AboutCard } from '@/components/about/main';
import { TokenomicsCard } from '@/components/tokenomics/main';
import { TeamCard } from '@/components/team/main';
import { GetStartedCard } from './_components/get-started';
import { TrendingCoinsCard } from './_components/trending-coins';
import { YMALCard } from '@/components/ymal/main';

interface TokenInfoPageProps {
    params: {
        token: string;

    }
}

const TokenInfoPage = ({ params }: TokenInfoPageProps) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 relative'>
            <div className='col-span-2 space-y-8 '>
                <div className=' space-y-6'>
                    <MainCard />
                    <SecondaryNav />
                    <PerformanceCard />
                    <SentimentCard />
                    <AboutCard />
                    <TokenomicsCard />
                    <TeamCard />
                    <div className=' md:absolute w-full md:mt-4 md:col-span-3'>
                        <YMALCard />
                    </div>
                </div>


            </div>

            <div className='col-span-1 space-y-6  md:px-4 py-2 md:py-0'>
                <GetStartedCard />
                {/* <TrendingCoinsCard />  */}
            </div>
        </div>
    )
}

export default TokenInfoPage;