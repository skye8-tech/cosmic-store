import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "@components/Button";

const Contact = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 md:flex ">
          <h1 className="md:text-xl">
            Home /<span className="text-xl font-bold">Contact</span>
          </h1>
        </div>

        <div className=" flex gap-7 max-md:flex-wrap  pb-24 pt-14 ">
          <div className="bg-white shadow-lg w-full md:w-1/2">
            <div className=" px-14 py-8 md:py-4">
              <div className="flex items-center gap-6">
                <div className="bg-secondary2 w-14 h-14 mt-12 rounded-full flex  justify-center">
                  <FiPhone className="w-8 h-8 mt-3 text-white" />
                </div>

                <p className="text-xl max-md:text-xl font-bold mt-12">
                  Call To us
                </p>
              </div>
              <p className="font-semibold text-xl mt-6">
                We are available 24/7, 7 days a week
              </p>
              <p className="font-semibold text-xl mb-8 mt-6">
                Phone: +8B01611112222
              </p>
              <div className="border border-bottom w-80  text-slate-300 max-md:w-64 max-sm:w-48 md:w-[80%]  "></div>
            </div>

            <div className="px-14 py-8 md:py-4">
              <div className="flex gap-6 items-center mt-10 ">
                <div className="bg-secondary2 w-14 h-14 rounded-full flex justify-center">
                  <FaRegEnvelope className="w-8 h-8 mt-3 text-white" />
                </div>

                <p className="text-2xl font-bold">Write To Us</p>
              </div>

              <div className="">
                <p className="font-semibold sm:text-xl pb-3">
                  Fil out our form and we will contact you within 23hours
                </p>
                <p className="font-semibold sm:text-xl pb-3">
                  Emails:customer@exclusive.com
                </p>
                <p className="font-semibold sm:text-xl pb-3">
                  Emails:support@exclusive.com
                </p>
              </div>

              {/* <FaRegEnvelope /> 
                     <p>Write To Us</p>
                     </div> */}
            </div>
          </div>

          <div className="w-full ">
            <form>
              <div className="bg-white shadow-lg ">
                <div className="pt-12 mx-6 flex gap-4 max-md:flex-col">
                  <input
                    type="text"
                    value=""
                    placeholder="Your Name"
                    className="bg-secondary py-2 px-1 w-full md:w-[48%] lg:w-[32%]"
                  />
                  <input
                    type="Email"
                    value=""
                    placeholder="Your Email"
                    className="bg-secondary py-2 px- w-full md:w-[48%] lg:w-[32%]"
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="Your Phone  "
                    className="bg-secondary  py-2 px-1w-full md:w-[48%] lg:w-[32%]  "
                  />
                </div>

                <div className="mt-32 max-md:mt-6">
                  <textarea
                    type="message"
                    placeholder="Your Message"
                    className=" w-[40rem] max-md:w-[84%] max-lg:w-[32%] h-[16rem]  bg-secondary py-8 mx-6 max-md:mx-6 mr-6 px-2"
                  ></textarea>
                  {/* md:w-[40rem] w-[19rem] h-[16rem] */}
                </div>

                <div className="md:flex justify-end  mt-8 mr-6 pb-5  ">
                  <Button className="" text="Send Message" variant="primary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

