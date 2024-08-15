import React from 'react'
import image from '../../../src/assets/images/auth.png'
import RegistrationForm from '@pages/Authentication/components/RegistrationForm'

function Register() {
  return (
    <>
    <section className='flex flex-row items-center  mt-16 mb-36 gap-32 lg:mr-32'>
    <img src={image} className='hidden lg:block lg:w-3/5' alt="background image " />
    <RegistrationForm></RegistrationForm>
    </section>
    </>
  )
}

export default Register