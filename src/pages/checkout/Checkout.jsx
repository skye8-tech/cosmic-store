
import Button from '@components/Button'
import React from 'react'
import image from '../../assets/images/Lcd.jpg'
import image1 from '../../assets/images/Gamepad.jpg'
import image2 from '../../assets/images/visa1.jpg'
import image3 from '../../assets/images/bkash.jpg'
import image4 from '../../assets/images/MasterCard.jpg'

const checkout = () => {
  return (
    <div className='max-w-6xl mx-96'>
        <div className='mt-10'>
            <h1>Account/My Account/ Product/View Cart/<span className='font-bold'>Checkout</span></h1>
        </div>

        <div className='flex justify-between grid-cols-1'>
            <div className=''>
                <h1 className='font-bold text-4xl mt-10 mb-8'>Billing Details</h1>

                <form className='flex flex-col gap-x-10 gap-4'>
                <label className='text-xl'>First Name</label>
                <input type='text'name='first Name' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Company Name</label>
                <input type='text'name='Name' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Street Address</label>
                <input type='text'name='Address' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Appointment, float, etc(Optional)</label>
                <input type='text'name='' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Town/City</label>
                <input type='text'name='' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Phone Number</label>
                <input type='text'name='' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <label className='text-xl'>Email Address</label>
                <input type='text'name='Email' className='bg-[#F5F5F5] w-[35rem] h-10'/>
                <div className='flex items-center gap-4 mt-4 mb-20'>
                <input type='checkbox' value="" className='bg-black'/>
                <label className='text-xl'>Save this information for faster check-out next time</label>
                </div>
                

                </form>
            </div>
            {/**right side */}

            <div className='mt-36'>
              <div className='flex justify-between gap-16'>
                <div className='flex gap-x-8 items-center'>
                 <div>
                  <img src={image} className='w-20' />
                 </div>
                 <div>
                  <p className='text-xl'>LCD Monitor</p></div>
                </div>

                <div>
                  <p className='text-xl items-center'>$850</p>
                </div>

              </div>

              <div className='flex justify-between gap-16 mt-5'>
                <div className='flex gap-x-8 items-center'>
                 <div>
                  <img src={image1} className='w-20'/>
                 </div>
                 <div>
                  <p className='text-xl'>HI Gamepad</p></div>
                </div>

                <div>
                  <p className='text-xl items-center'>$1100</p>
                </div>

              </div>
               

               <div className=''>
              <div className='flex justify-between mt-5'>
                <p className='text-xl'>Subtotal:</p>
                <p className='text-xl'>$1750</p>
              </div>
              <div className=' border    border-bottom w-54 mt-5'></div>
              </div>

              <div className=''>
              <div className='flex justify-between mt-5'>
                <p className='text-xl'>Shipping:</p>
                <p className='text-xl'>Free</p>
              </div>
              <div className=' border    border-bottom w-54 mt-5'></div>
              </div>
              <div className='flex justify-between mt-5'>
                <p className='text-xl'>Total:</p>
                <p className='text-xl'>$1750</p>
              </div>

              <div className='flex justify-between mt-6'>
                <div className='flex items-center gap-3'>
                  <input type='radio' value="Bank"/>
                <label className=' text-xl'>Bank</label>
                </div>
                <div className='flex justify-evenly gap-3'>
                  <img src={image3} alt="" className='w-12'/>
                  <img src={image2} alt="" className='w-12'/>
                  <img src={image4} alt="" className='w-12'/>

                </div>

              </div>

              <div className='flex items-center gap-3'>
                  <input type='radio' value="Bank"/>
                <label className='text-xl'>Cash on delivery</label>
                </div>

              {/* <div className='flex justify-between mt-8'>
                <p className='text-xl'>Shipping:</p>
                <p className='text-xl'>Free</p>
              </div> */}

              <div className='flex flex-wrap  gap-6 mt-12'>
                <button className='border w-60 '>
                  Coupon Code
                </button>

              <div className=''>
                <Button
                variant ="primary"
                text="Apply Coupon"
                
                /></div>

               <Button
                variant ="primary"
                text="Place Order"
                
                />

              </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default checkout
