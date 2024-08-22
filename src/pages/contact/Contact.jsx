import Button from "@components/Button";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="px-4">
      <div className="max-w-6xl  md:mx-auto mx-2">
        <div className="mt-8 md:mb-0 mb-4   flex ">
          <h1 className="text-xl">
            Home /<span className="text-xl font-bold">Contact</span>
          </h1>
        </div>

        <div className="mt-16 md:mt-16 md:flex grid-flow-col mb-5 md:mb-24">
          <div className="bg-white shadow-lg  w-[30rem] h-[40rem] ">
            <div className="px-16">
              <div className="flex gap-4 items-center">
                <div className="bg-secondary2 w-14 h-14 mt-12 rounded-full flex justify-center">
                  <FiPhone className="w-8 h-8 mt-3 text-white" />
                </div>

                <p className="text-xl font-semibold mt-12">Call To us</p>
              </div>
              <p className="font-medium mt-6">
                We are available 24/7, 7 days a week
              </p>
              <p className="font-medium mb-8 mt-6">Phone: +8B01611112222</p>
              <div className="border border-bottom w-80   text-slate-300 "></div>
            </div>

            <div></div>
            <div className=" px-16">
              <div className="flex gap-4 mt-10 items-center">
                <div className="bg-secondary2 w-14 h-14 rounded-full flex justify-center">
                  <FaRegEnvelope className="w-8 h-8 mt-3 text-white" />
                </div>

                <p className="text-xl font-semibold">Write To Us</p>
              </div>

              <div>
                <p className="font-medium mt-6">
                  Fil out our form and we will contact you within 23hours
                </p>
                <p className="font-medium mb-6 mt-6">
                  Emails:customer@exclusive.com
                </p>
                <p className="font-medium mb-6 mt-6">
                  Emails:support@exclusive.com
                </p>
              </div>
              {/* <FaRegEnvelope /> 
                     <p>Write To Us</p>
                     </div> */}
            </div>
          </div>

          <div className="md:shrink-0 md:mt-0 mt-10">
            <form>
              <div className="bg-white shadow-lg h-[38rem] md:h-[40rem] w-[30rem] md:w-[43rem]  mx-auto p-3">
                <div className=" pt-12 flex gap-2 items-center py-2">
                  <input
                    type="text"
                    value=""
                    placeholder="Your Name"
                    className="bg-secondary p-2 px"
                  />
                  <input
                    type="Email"
                    value=""
                    placeholder="Your Email"
                    className="bg-secondary  p-2"
                  />
                  <input
                    type="text"
                    value=""
                    placeholder="Your Phone"
                    className="bg-secondary p-2  flex-grow"
                  />
                </div>

                <div className="">
                  <textarea
                    type="message"
                    placeholder="Your Message"
                    className=" w-full h-[16rem] bg-secondary py-8 px-2"
                  ></textarea>
                </div>

                <div className="md:flex justify-end  mt-8 mr-6  mx-44 md:mx-10">
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
