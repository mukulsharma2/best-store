import React, { useState } from 'react'

const Images = ({images}) => {
  const [selectedImg, setSelectedImg] = useState(images[0])

  return (
    <div className='grid grid-cols-2 place-items-center mr-5 sm:mr-16 md:mr-0'>
    <div className='grid grid-rows-4 gap-2'>
      {
        images?.map((ele)=>{
          return (
            <figure key={ele?.id}>
              <img src={ele?.url} alt={ele?.filename} className='h-20 lg:h-24 w-28 lg:w-32 xl:w-40 xl:h-28' onClick={()=> setSelectedImg(ele)} />
            </figure>
          )
        })
      }
    </div>

    <div className="">
      <figure>
        <img className='w-72 h-36 md:h-32 lg:h-44 xl:w-[26rem] xl:h-52 2xl:h-64' src={selectedImg?.url} alt={selectedImg?.filename} />
      </figure>
    </div>
    </div>
  )
}

export default Images
