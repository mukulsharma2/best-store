import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  setSingleLoadingTrue,
  setSingleLoadingFalse,
  addSingleData,
} from "../store/appSlice";
import { SINGLE_PRODUCT_API, formatPrice } from "../helper/constants";
import Images from "./Images";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "./Stars";
import AddToCart from "./AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const isSingleLoading = useSelector((store) => store.app.isSingleLoading);
  const singleData = useSelector((store) => store.app.singleData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function a() {
      dispatch(setSingleLoadingTrue());
      try {
        const data = await fetch(SINGLE_PRODUCT_API + id);
        const json = await data.json();
        dispatch(addSingleData(json));
      } catch (error) {
        console.log(error);
      }
      dispatch(setSingleLoadingFalse());
    }
    a();
  }, [dispatch, id]);
  
  const {
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleData;

  if (isSingleLoading) return <div className="mt-20">Loading...</div>;

  return (
    <div className="mt-20">
      {/* Page Navigation */}
      <div className="text-2xl font-semibold p-3 my-7 md:my-3 bg-slate-200">
        <Link to="/" className="text-green-700">
          Home
        </Link>
        /{name}
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 mx-auto w-[95%] 2xl:w-4/5">
        {/* Images */}
        {image && <Images images={image} />}

        {/* Product Data */}
        <div className="mx-2 sm:mx-0">
          <h2 className="text-3xl font-semibold mb-3">{name}</h2>
        {stars && <Stars stars={stars} reviews={reviews} />}

          <p className="">
          <span className="font-semibold">MRP: </span>
              <del>
              {formatPrice(price+250000)}
              </del>
            </p>
            <p className="my-3">
            <span className="font-semibold">Deal of the Day: </span>{formatPrice(price)}
            </p>
            <p className='text-justify'>{description}</p>
            <div className="flex gap-5 my-6">
              <div className="flex flex-col place-items-center">
                <TbTruckDelivery className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p className='text-center text-sm'>Free Delivery</p>
              </div>

              <div className="flex flex-col place-items-center">
                <TbReplace className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p className='text-center text-sm'>30 Days Replacement</p>
              </div>

              <div className="flex flex-col place-items-center">
                <TbTruckDelivery className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p className='text-center text-sm'>Delivered By Best Store</p>
              </div>

              <div className="flex flex-col place-items-center">
                <MdSecurity className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p className='text-center text-sm'>2 Year Warranty </p>
              </div>
            </div>

            <div className="">
              <p>
                <span className="font-semibold">Availability: </span>
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p className="my-3">
                <span className="font-semibold">ID : </span><span> {id} </span>
              </p>
              <p>
                <span className="font-semibold">Brand :</span><span> {company} </span>
              </p>
            </div>
            <hr className="bg-black h-[3px] my-6"/>
            {stock > 0 && <AddToCart product={singleData} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
