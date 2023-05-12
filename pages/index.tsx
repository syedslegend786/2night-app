import React from 'react'
import { useRouter } from 'next/router'
const Home = () => {
  const router = useRouter()
  return (
    <div className='p-5'>
      <button onClick={() => {
        router.push("/shorts")
      }} className='bg-blue-500 w-full text-white p-2 rounded-xl text-sm'>View Shorts</button>
    </div>
  )
}

export default Home