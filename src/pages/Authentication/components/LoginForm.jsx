import Button from '@components/Button'
import React from 'react'

function LoginForm() {
  return (
   <>
    <form action="POST" className='flex flex-col gap-8 w-full p-8 lg:p-0'>
        <div className='flex flex-col gap-4'>
        <p className='text-4xl font-medium'>Log in to Exclusive</p>
        <p className='font-medium'> Enter your details below </p>
        </div>
        <div className='flex flex-col gap-4'>
        <input type="text " placeholder='Email or Phone Number ' className='p-2 text-sm border-b-2 border-gray-400 w-full'/>
        <input type="text" placeholder='Password' className='p-2  border-b-2 text-sm border-gray-400 w-full'/>
        
        </div>

        
        <div className='flex flex-row justify-between'>
        {/* buttons */}
        <Button
        text="Login "
        variant="primary"
        width="fit"
        href="#"
        funct=""
        icon=""

        ></Button>
       <a href="#" className='text-secondary2 p-2 '> Forgot Password ?</a>
        </div>
        <p className='font-light text-center'>Don't have an account? <span className='font-normal'> <a href="/register">Sign UP </a></span></p>
    </form>
   </>
  )
}

export default LoginForm