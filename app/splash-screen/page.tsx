'use client'
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import React from 'react'

import logoWhite from '../../public/assets/images/logo-white.svg'

const SplashScreen = () => {
    const handleRedirect = () => {
        redirect("/restaurants");
    }
    return (
        <div className='bg-munchies-green text-white min-h-screen pt-14 pb-6 px-6'>
            <Image src={logoWhite} alt="Munchies White Logo" width={167} height={24}/>
            <Button variant="outline" className="bg-munchies-green text-white w-full mt-10" size="lg" onClick={handleRedirect}>Continue</Button>
        </div>
    )
}

export default SplashScreen