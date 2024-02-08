import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user  } = useAuth0();

  return (
    <div className='mt-20'>
      <h2 className='font-bold text-3xl mx-auto w-fit mb-6'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28470.86079540403!2d75.71127071083983!3d26.876264999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db502e33997e3%3A0xf1f4904b3bbf3f16!2sAmazon%20SPN!5e0!3m2!1sen!2sin!4v1706800572731!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>

        <form action="https://formspree.io/f/mqkrpapa" method="post" className='mt-20 mx-auto w-1/3 flex flex-col gap-4'>
          <input className='py-1 px-2 text-lg border-2 border-black outline-none rounded-lg' type="text" name="username" placeholder='Enter Name Here' required autoComplete='off' defaultValue={user?.name || user?.nickname} />

          <input className='py-1 px-2 text-lg border-2 border-black outline-none rounded-lg' type="email" name="email" placeholder='Enter Email Here' required autoComplete='off' defaultValue={user?.email} />

          <textarea className='py-1 px-2 text-lg border-2 border-black outline-none rounded-lg' name="message" cols="30" rows="10" required autoComplete='off' placeholder='Enter Message Here'></textarea>

          <input type="submit" value="SEND"  className='text-lg font-semibold px-5 py-1 rounded-2xl bg-[#6254F3] text-[#FFFFFF] transition-all hover:shadow-lg hover:bg-[#6c61db]' />
        </form>
    </div>
  )
}

export default Contact
