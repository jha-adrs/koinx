import Image from 'next/image';
import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo = ({className }: LogoProps) => {
    return (
        <Image src='/svg/logo.svg' alt='logo' width={100} height={100} className={className} />
    )
}