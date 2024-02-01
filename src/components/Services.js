import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Services = () => {
  return (
      <div className="grid grid-cols-3">
        <div className="">
            <TbTruckDelivery />
            <h3>Super Fast and Free Delivery</h3>
        </div>

        <div className="grid grid-rows-2">
            <div>
                <MdSecurity />
                <h3>Shipping in Good Condition</h3>
            </div>
            <div>
                <GiReceiveMoney />
                <h3>Money Back Guarantee</h3>
            </div>
        </div>

        <div className="">
            <RiSecurePaymentLine />
            <h3>Secured Payment Transaction</h3>
        </div>
      </div>
  )
}

export default Services
