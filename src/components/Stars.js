import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({stars, reviews}) => {
    const arr = [0,1,2,3,4]

    return(
      <>
      <div className="flex items-center gap-1">
        {
          arr.map((i)=>{
            return (
              <span key={i}>
                {stars >= i + 1 ? (
                  <FaStar size='1.5rem' />
                ) : (stars >= i + 0.5) ? (
                  <FaStarHalfAlt size='1.5rem' />
                ) : (
                  <AiOutlineStar size='1.5rem' />
                )}
              </span>
            );
          })
        }
        <span>{stars}</span>
      </div>
        <p>{reviews} customer reviews</p>
        </>
    )
};

export default Stars
