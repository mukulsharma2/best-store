import React, { useEffect, useState } from "react";
import Container from "./Container";
import GridView from "./GridView";
import { API } from "../helper/constants";
import spinner from "../images/spinner.gif";

const About = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(API);
        const json = await res.json();
        // setting data with first 5 products
        setData(json.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    fetchData();

    // Adding event listener for infinite scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup of event listener on component unmounting
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = async () => {
    // Only run if scrollbar has reached the end
    // viewport height + scrolled height = total height
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // Removing scrollbar from end to prevent multiple calling of API
      document.documentElement.scrollTop -= 10;
      setIsLoading(true);
      try {
        const res = await fetch(API);
        const json = await res.json();
        // setting data to => previous data + new data (only first 5 products of new data)
        setData((prev) => [...prev, ...json.slice(0, 5)]);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <div className="mt-20 min-h-[70vh]">
      <Container name="Our Ecommerce Site" />
      <h3 className="mt-16 mb-5 mx-auto w-fit text-2xl lg:text-3xl font-semibold text-center">
        Infinite Scroll
      </h3>
      <GridView products={data} />

      {isLoading && (
        <img
          src={spinner}
          alt="Loading..."
          className="w-20 my-6 fixed z-20 bottom-0 left-[45%]"
        />
      )}
      <div className="h-20"></div>
    </div>
  );
};

export default About;
