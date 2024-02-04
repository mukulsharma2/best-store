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
        console.log(json);
        dispatch(addSingleData(json));
      } catch (error) {
        console.log(error);
      }
      dispatch(setSingleLoadingFalse());
    }
    a();
  }, [dispatch, id]);
  
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleData;

  if (isSingleLoading) return <div className="mt-20">Loading...</div>;

  return (
    <div className="mt-20">
      {/* Page Navigation */}
      <div className="text-2xl font-semibold p-3 my-3 bg-slate-200">
        <Link to="/" className="text-green-700">
          Home
        </Link>
        /{name}
      </div>

      <div className="grid grid-cols-2 gap-20 mx-auto w-4/5">
        {/* Images */}
        {image && <Images images={image} />}

        {/* Product Data */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">{name}</h2>
        {stars && <Stars stars={stars} reviews={reviews} />}

          <p className="">
              MRP:
              <del>
              {formatPrice(price+250000)}
              </del>
            </p>
            <p className="">
              Deal of the Day: {formatPrice(price)}
            </p>
            <p>{description}</p>
            <div className="flex gap-5 my-2">
              <div className="flex flex-col place-items-center">
                <TbTruckDelivery className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p>Free Delivery</p>
              </div>

              <div className="flex flex-col place-items-center">
                <TbReplace className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p>30 Days Replacement</p>
              </div>

              <div className="flex flex-col place-items-center">
                <TbTruckDelivery className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p>Delivered By Best Store</p>
              </div>

              <div className="flex flex-col place-items-center">
                <MdSecurity className="bg-slate-100 p-2 rounded-xl" size='3rem' />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="">
              <p>
                Availability:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr className="bg-black h-[3px] my-4"/>
            {stock > 0 && <AddToCart product={singleData} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
