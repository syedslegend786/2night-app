"use client"

import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { Short } from '../components/Short'
import Image from 'next/image'
import { useRouter } from 'next/router'
const ShortsPage = () => {
    const router = useRouter()
    return (
        <div className='relative h-screen w-full'>
            <div onClick={() => { router.push("/")}} className='absolute top-[20px] left-[20px] z-50 flex items-center gap-x-2'>
                <HiArrowLeft className='text-white' fontSize={24} />
                <div className='w-[83px] h-[20px] relative'>
                    <Image src={"/logo.png"} alt='' fill className='object-contain' />
                </div>
            </div>
            <div className='h-screen w-full snap-y overflow-scroll snap-mandatory'>
                <div className='snap-center'>
                    <Short />
                </div>
                <div className='snap-center'>
                    <Short />
                </div>
                <div className='snap-center'>
                    <Short />
                </div>
                <div className='snap-center'>
                    <Short />
                </div>
            </div>
        </div>
    )
}

export default ShortsPage