"use client"
import { useEffect, useRef, memo, useState, lazy, Suspense } from 'react';
import { Button } from '../ui/button';
import { Toggle } from '../ui/toggle';
import TradingView from './trading-view';
import { Skeleton } from '../ui/skeleton';
// Lazy load the trading view widget
const TradingViewWidget = lazy(() => import('./trading-view'));


interface PriceChartProps {
    name: string;
}

const TimeRanges = [
    {
        label: '1H',
        value: '1h'
    },
    {
        label: '24H',
        value: '1d|5'
    },
    {
        label: '7D',
        value: '1w|15'
    },
    {
        label: '1M',
        value: '1m|60'
    },
    {
        label: '3M',
        value: '3m|60'
    },
    {
        label: '6M',
        value: '6m|120'
    },
    {
        label: '1Y',
        value: '12m|1D'
    },
    {
        label: 'ALL',
        value: 'all|1M'
    }
];

export const PriceChart = ({ name}: PriceChartProps) => {
    const [timeRange, setTimeRange] = useState('1d|5');
    return (
        <div className='flex flex-col w-full min-h-[300px] h-fit space-y-4'>

            <div className="flex flex-col lg:flex-row  justify-between w-full h-fit">
                <p className="font-semibold text-lg capitalize">
                    {name} Price Chart(USD)
                </p>
                <div className="flex flex-row items-center pt-2 lg:pt-0 lg:space-x-4">
                    {
                        TimeRanges.map((range, index) => {
                            return (
                                <Toggle key={index} value={range.value}
                                    className='font-semibold text-foreground-muted rounded-2xl  lg:w-10 h-6'
                                    pressed={timeRange === range.value}
                                    onPressedChange={(value) => {
                                        setTimeRange(range.value);
                                    }}
                                >
                                    {range.label}
                                </Toggle>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-full h-[300px] lg:h-[400px]'>
                <Suspense fallback={<div className='flex w-full h-full items-center justify-center'>
                    Loading...
                </div>}>
                    <TradingViewWidget symbol={
                        name === 'bitcoin' ? "BITSTAMP:BTCUSD|3M"
                        : "BITSTAMP:ETHUSD|3M"
                    } timeRange={timeRange} />
                </Suspense>
            </div>

        </div>
    )
}
