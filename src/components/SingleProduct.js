import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSingleLoadingTrue, setSingleLoadingFalse, addSingleData } from "../store/appSlice";
import { SINGLE_PRODUCT_API } from "../helper/constants";

const SingleProduct = () => {
  const {id} = useParams()
  const isSingleLoading = useSelector(store=> store.app.isSingleLoading)
  const singleData = useSelector(store=> store.app.singleData)
  const dispatch = useDispatch()

  useEffect(()=>{
  async function a() {
    dispatch(setSingleLoadingTrue())
    try {
      const data = await fetch(SINGLE_PRODUCT_API + id)
      const json = await data.json()
      console.log(json);
      dispatch(addSingleData(json))
  } catch (error) {
      console.log(error);
  }
    dispatch(setSingleLoadingFalse())
  }
  a()
  }, [dispatch, id])


  // const {id: alias, name, company, price, description, category, stock, stars, reviews, image,} = singleData;

  if(isSingleLoading) return <div className="mt-20">Loading...</div>

  return <div className="mt-20">SingleProduct SingleProduct</div>;
};

export default SingleProduct;
