import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[50vh] mt-28 mx-auto w-fit text-center">
      <h2 className="text-6xl font-bold">404</h2>
      <h3 className="text-4xl font-semibold my-4">Seems like you are lost</h3>
      <p className="my-6 text-lg">
        The page you are looking for does not exist. <br />
        But you can click on the button below to go to home page.
      </p>
      <Link to="/">
        <button className="text-white bg-[#6254F3] py-2 px-4 font-semibold text-xl">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
