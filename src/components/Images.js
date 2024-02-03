import React, { useState } from 'react'

const Images = ({images}) => {
  console.log(images);
  const [selectedImg, setSelectedImg] = useState(images[0])

  return (
    <div className='grid grid-cols-2 place-items-center'>
    <div className='grid grid-rows-4 gap-2'>
      {
        images?.map((ele)=>{
          return (
            <figure key={ele?.id}>
              <img src={ele?.url} alt={ele?.filename} className='h-24 w-32' onClick={()=> setSelectedImg(ele)} />
            </figure>
          )
        })
      }
    </div>

    <div className="">
      <figure>
        <img className='w-72 h-44' src={selectedImg?.url} alt={selectedImg?.filename} />
      </figure>
    </div>
    </div>
  )
}

export default Images
