import React from "react";
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-text pt-20 pb-8 px-12 font-light">
        <div className="max-w-6xl mx-auto flex justify-center gap-x-20 gap-y-8 flex-wrap max-md:text-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-col gap-3 md:gap-6">
              <h4 className="text-2xl font-medium tracking-wide">Exclusive</h4>
              <a href="#" className="text-xl font-normal">
                Subscribe
              </a>
              <a href="#">Get 10% off your first order</a>
            </div>
            <div className="bg-inherit relative text-xs rounded-md border">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent focus:outline-none p-2 pl-4 pr-10"
              />
              <VscSend className="absolute right-2 top-1/2 -translate-y-1/2 text-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <h4 className="text-xl font-normal">Support</h4>
            <div className="flex flex-col gap-2 md:gap-4">
              <p>
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </p>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <h4 className="text-xl font-normal">Account</h4>
            <div className="flex flex-col gap-2 md:gap-4">
              <a href="#">My Account</a>
              <a href="#">Login / Register</a>
              <a href="#">Cart</a>
              <a href="#">Wishlist</a>
              <a href="#">Shop</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <h4 className="text-xl font-normal">Quick Link</h4>
            <div className="flex flex-col gap-2 md:gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 md:gap-6">
              <h4 className="text-xl font-normal">Download App</h4>
              <div className="flex flex-col gap-2">
                <p>Save $3 with App New User Only</p>
                <div className="flex gap-2">
                  <img src="/src/assets/images/Qrcode1.png" alt="" />
                  <div className="flex flex-col gap-2">
                    <img
                      src="/src/assets/images/google-play-store-logo.png"
                      alt=""
                    />
                    <img
                      src="/src/assets/images/download-appstore.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-6">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FiTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white/50 mt-12">
          <span className="mr-1">&copy;</span>
          <span>Copyright Rimel 2022. All right reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
