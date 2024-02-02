import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
  return (
      <div className="mt-20 grid grid-cols-3 h-72">
        <div className="mx-2 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
            <MdSecurity size="4rem" />
            <h3 className='mt-6 font-medium text-xl'>Shipping in Good Condition</h3>
        </div>

        <div className="grid grid-rows-2 gap-2">
            <div className="bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
                <TbTruckDelivery size="4rem" />
                <h3 className='mt-3 font-medium text-xl'>Super Fast and Free Delivery</h3>
            </div>
            <div className="bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
                <GiReceiveMoney size="4rem" />
                <h3 className='mt-3 font-medium text-xl'>Money Back Guarantee</h3>
            </div>
        </div>

        <div className="mx-2 bg-slate-200 rounded-2xl flex items-center justify-center flex-col">
            <RiSecurePaymentLine size="4rem" />
            <h3 className='mt-6 font-medium text-xl'>Secured Payment Transaction</h3>
        </div>
      </div>
  )
}

export default Services
