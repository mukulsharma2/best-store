import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 p-5 bg-black text-white">
      <section className="my-4">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="mb-3">Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <Link to="/">
              <button className="bg-[#6254F3] p-2 font-semibold text-xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <hr className="my-7" />
      </section>

      <footer>
        <div className="grid sm:grid-cols-4 gap-5 w-4/5 sm:w-full">
          <div className="mr-2">
            <h3 className="mb-3 font-bold text-lg">Best Store</h3>
            <p>
              Best Store is an e-commerce website for all your shopping needs.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-lg">Follow Us</h3>
            <div className="flex flex-row sm:flex-col md:flex-row gap-4 sm:gap-0 md:gap-4 lg:gap-12 mt-2">
              <div>
                <FaDiscord size='2.5rem' />
              </div>
              <div>
                <FaInstagram size='2.5rem' />
              </div>
              <div>
                <FaYoutube size='2.5rem' />
              </div>
            </div>
          </div>

          <div className="sm:-ml-9">
            <h3 className="mb-3 font-bold text-lg">Subscribe to get important updates</h3>
              <input type="email" name="email" autoComplete="off" placeholder="YOUR E-MAIL" className="px-2 text-black outline-none" />
              <input type="submit" value="Subscribe" className="bg-[#6254F3] px-1 font-medium" />
          </div>

          <div>
            <h3 className="mb-3 font-bold text-lg">Call Us</h3>
            <h3>+91 123456789</h3>
          </div>
        </div>

        <div className="my-3">
          <hr className="my-4" />
          <div className="grid sm:grid-cols-2 gap-2">
            <p>@{new Date().getFullYear()} BestStore. All Rights Reserved</p>
            <div>
              <p className="mb-3">PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
