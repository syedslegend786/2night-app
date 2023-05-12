
import React, { useEffect, useRef, useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { BsPlay, BsFillPauseFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { VscCalendar } from 'react-icons/vsc'
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Link from 'next/link'
export const Short = () => {
    const [hasWindow, sethasWindow] = useState(false)
    const [playing, setplaying] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)
    const handleClick = () => {
        if (videoRef.current?.paused) {
            setplaying(true)
            videoRef.current.play()
        } else {
            videoRef.current?.pause()
            setplaying(false)
        }
    }
    const handlePlay = () => {
        if (videoRef.current) {
            console.log("playing")
            setplaying(true)
            videoRef.current.play()
        }
    }
    const handlePause = () => {
        if (videoRef.current) {
            console.log("paused")
            setplaying(false)
            videoRef.current.pause()
        }
    }
    // useEffect(() => {
    //     sethasWindow(true)
    // }, [])
    return (
        <Waypoint onEnter={handlePlay} onLeave={handlePause}>
            <div
                className='relative max-h-screen  h-screen w-full overflow-hidden snap-center flex items-center justify-center'
            >
                {
                    playing
                        ?
                        <motion.div
                            onClick={handleClick}
                            initial={{
                                opacity: 1
                            }}
                            animate={{
                                opacity: 0
                            }}
                            transition={{
                                duration: 1
                            }}
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.5)"
                            }} className='h-[68px] w-[68px] rounded-full bg-[rgba(0, 0, 0, 0.5)] 
            z-20 transform  flex items-center justify-center
            '>
                            <BsFillPauseFill className='text-white' fontSize={36} />
                        </motion.div>
                        :
                        <div onClick={handleClick} style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)"
                        }} className='h-[68px] w-[68px] rounded-full bg-[rgba(0, 0, 0, 0.5)] 
            z-20 transform  flex items-center justify-center
            '>
                            <BsPlay className='text-white' fontSize={36} />
                        </div>

                }
                <video muted loop={true} onClick={handleClick} className='h-full object-cover absolute z-10' ref={videoRef} >
                    <source src='/test_short.mp4' />
                </video>
                <div className='absolute bottom-0 z-10 p-[21px] w-full'>
                    <div className='flex items-center space-x-[7px]'>
                        <div className='h-[28px] w-[28px] rounded-full bg-white'></div>
                        <Link href={"https://www.google.com"} target='_blank' className='text-white font-bold text-[16px] '>Key Night Club, Delhi</Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='mt-[11px]'>
                                <p className='text-[14px] font-[400] text-white'>Ladies night</p>
                                <p className='text-[14px] font-[400] text-white'>Steve Aoki, is an American DJ,</p>
                                <p className='text-[14px] font-[400] text-white'>record producer,music</p>
                                <p className='text-[14px] font-[400] text-white'>programmer, and record</p>
                            </div>
                            <div className='mt-[10px] space-y-[10px]'>
                                <div className='flex items-center space-x-[11px] rounded-full w-max px-[13px] py-[9px]' style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                                }}>
                                    <VscCalendar className='text-white' size={12} />
                                    <h1 className='text-[14px] font-[400] text-white'>Ladies Entry Free</h1>
                                </div>
                                <div className='flex items-center space-x-[11px] rounded-full w-max px-[13px] py-[9px]' style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                                }}>
                                    <VscCalendar className='text-white' size={12} />
                                    <h1 className='text-[14px] font-[400] text-white'>Friday 11 July at 06:00 pm</h1>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='w-max space-y-1 mb-4'>
                                <FaRegHeart className='text-white mx-auto' size={21} />
                                <h1 className='text-xs text-white text-center'>0</h1>
                            </div>
                            <Link href={"https://www.google.com"} target='_blank'>
                                <div className='w-max space-y-1'>
                                    <AiOutlineShareAlt className='text-white mx-auto' size={21} />
                                    <h1 className='text-xs text-white text-center'>13</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link href={"https://www.google.com"} target='_blank'>
                        <button className='w-full rounded-xl p-1.5 text-white text-center mt-5' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>Buy the ticket</button>
                    </Link>
                </div>
            </div>
        </Waypoint>
    )
}