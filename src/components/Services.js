import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
  return (
    <>
    <h3 className='mt-20 mx-auto w-fit text-2xl lg:text-3xl font-semibold'>Our Services</h3>
      <div className="mt-10 mx-auto flex flex-col gap-4 sm:gap-0 sm:grid sm:grid-cols-3 sm:h-72 w-3/4 sm:w-10/12 xl:h-96 2xl:w-3/4">
        <div className="py-12 sm:py-0 sm:mx-2 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
            <MdSecurity size="4rem" />
            <h3 className='text-center mt-6 font-medium text-lg sm:text-xl'>Shipping in Good Condition</h3>
        </div>

        <div className="grid grid-rows-2 gap-2">
            <div className="py-12 sm:py-0 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
                <TbTruckDelivery size="4rem" />
                <h3 className='text-center mt-3 font-medium text-lg sm:text-xl'>Super Fast and Free Delivery</h3>
            </div>
            <div className="py-12 sm:py-0 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
                <GiReceiveMoney size="4rem" />
                <h3 className='text-center mt-3 font-medium text-lg sm:text-xl'>Money Back Guarantee</h3>
            </div>
        </div>

        <div className="py-12 sm:py-0 sm:mx-2 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
            <RiSecurePaymentLine size="4rem" />
            <h3 className='text-center mt-6 font-medium text-lg sm:text-xl'>Secured Payment Transaction</h3>
        </div>
      </div>
      </>
  )
}

export default Services
