import { Navbar } from '@/components/navbar';
import React, { Suspense } from 'react';
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
import { fetchPrice } from '@/actions/fetch-price';
import { Loader2 } from 'lucide-react';
import { TOKENS } from '@/lib/constants';

interface TokenInfoPageProps {
    params: {
        token: 'bitcoin' | 'ethereum' //string;

    }
}

const TokenInfoPage = async ({ params }: TokenInfoPageProps) => {
    const data = await fetchPrice({ ids: "bitcoin", vs_currencies: "inr,usd", include_24hr_change: true })
    if(!data.success){
        throw new Error("Couldn't fetch market data");
    }
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <div className='grid grid-cols-1 md:grid-cols-3 relative'>
                <div className='col-span-2 space-y-8 '>
                    <div className=' space-y-6'>
                        <MainCard name={params.token} symbol={TOKENS[params.token].SYMBOL} inr_price={data.inr_price} usd_price={data.usd_price} change={data.usd_24h_change} />
                        <SecondaryNav />
                        <PerformanceCard currentPrice={data.usd_price} />
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
                    <TrendingCoinsCard />
                </div>
            </div>
        </Suspense>
    )
}

const LoadingScreen = ()=>{
    return (
        <div className="flex w-screen h-screen items-center bg-black/10">
            <Loader2 className='animate-spin w-8 h-8'/>
        </div>
    )
}

export default TokenInfoPage;