import Button from '@components/Button'
import React from 'react'

const Page404 = () => {
  return (
    <section className='px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='mt-10 '>
        <h1  className='text-xl'>Home /<span className='font-bold text-xl'> 404 Error</span></h1>
        </div>
        <div className='text-center mt-36 mb-36'>
          <h1 className='font-bold text-5xl md:text-8xl'>404 Not Found</h1>
          <p className='text-xl md:text-2xl mt-14'>Your visited page not found. you may go home page</p>

            <div className='flex justify-center mt-8'>
            <Button
            text ="Back to home page"
           variant ="primary"
         />
           
           </div> 
       
        </div>

      </div>
      
    </section>
  )
}

export default Page404 
