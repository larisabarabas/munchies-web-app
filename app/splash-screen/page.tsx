"use client"

import { redirect } from 'next/navigation';
import Image from 'next/image';

import { Button } from '@/components/ui/button';


import logoWhite from '../../public/assets/images/logo-white.svg'

import { getSplashScreenStaticContent } from '@/lib/actions';
import { useEffect, useState } from 'react';


const SplashScreen = () => {
    const [loading, setLoading] = useState(false)
    const [staticContent, setStaticContent] = useState<StaticContent | null>(null)
    const handleRedirect = () => {
        redirect("/restaurants");
    }

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true)
                const data = await getSplashScreenStaticContent();
                if (data.length) setStaticContent(data[0])
            } catch (error) {
                console.log("Error:", error)
            } finally {
                setLoading(false)
            }
        };
        fetchContent();
    },[])

    if (loading) {
        return (
            <div className='bg-munchies-green text-white min-h-screen pt-14 pb-6 px-6 grid content-center'>
                <p className='text-white text-center'>Loading ...</p>
            </div>
        )
    }

    return (
        <div className='bg-munchies-green text-white min-h-screen pt-14 pb-6 px-6 grid content-between'>
            <Image src={logoWhite} alt="Munchies White Logo" width={167} height={24} priority={false}/>
            <div className='grid gap-4 w-[246px]'>
                 <p className='text-5xl font-extrabold'>{staticContent?.body?.find(item => item.key === 'title')?.value}</p>
                 <p className='text-wrap'>{staticContent?.body?.find(item => item.key === 'content')?.value}</p>
            </div>
            <Button variant="outline" className="bg-munchies-green text-white w-full mt-10" size="lg" onClick={handleRedirect}>{staticContent?.body?.find(item => item.key === 'continue-button')?.value}</Button>
        </div>
    )
}

export default SplashScreen