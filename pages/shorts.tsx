

import React, { useEffect, useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import { Short } from '../components/Short'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
const ShortsPage = () => {
    const [loaded, setloaded] = useState(false)
    const { height, width } = useWindowDimensions()
    const router = useRouter()
    useEffect(() => {
        setloaded(true)
    }, [])
    return (
        <>
            {
                !loaded ?
                    <>

                    </>
                    :
                    <div
                        style={{
                            height: "100%"
                        }}
                    >
                        <div onClick={() => { router.push("/") }} className='absolute top-[20px] left-[20px] z-50 flex items-center gap-x-2'>
                            <HiArrowLeft className='text-white' fontSize={24} />
                            <div className='w-[83px] h-[20px] relative'>
                                <Image src={"/logo.png"} alt='' fill className='object-contain' />
                            </div>
                            {/* <h1 className='text-white'>{height}</h1> */}
                        </div>
                        <div
                            style={{ height: height }}
                            className='w-full  snap-y overflow-scroll snap-mandatory '>
                            <div className='snap-start snap-normal  !h-full'>
                                <Short />
                            </div>
                            <div className='snap-start snap-normal  !h-full'>
                                <Short />
                            </div>
                            <div className='snap-start snap-normal  !h-full'>
                                <Short />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ShortsPage