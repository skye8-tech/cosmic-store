import SectionTitle from "@components/SectionTitle";
import CategoryItem from "@pages/Home/components/CategoryItem";
import { useEffect, useState } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiDesktop } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";

const categories = [
  {
    icon: <IoIosPhonePortrait />,
    text: "Phones",
  },
  {
    icon: <CiDesktop />,
    text: "Computers",
  },
  {
    icon: <BsSmartwatch />,
    text: "SmartWatch",
  },
  {
    icon: <IoCameraOutline />,
    text: "Camera",
  },
  {
    icon: <PiHeadphones />,
    text: "Headphones",
  },
  {
    icon: <GrGamepad />,
    text: "Gaming",
  },
];

function getSomethingThatWillResolvetoAPromise() {
  return new Promise((resolve, reject) => {
    // resolve("Everthing went well");
    reject("Something went wrong");
  });
}

const Categories = () => {
  // this returns a promise
  //
  // fetch("");

  const endpoint = "http://localhost:8000/v1/api/categories";
  const [data, setData] = useState();
  /**
   * [
   *  {
   *  name: "John",
   * id: "123",
   * }
   * ]
   */

  // then -> resolves
  // catch -> rejects
  // finally -> always runs

  const values = {
    isLoggedIn: true,
    LogIn: () => {},
    LogOut: () => {},
  };

  // a custom hook that returns the context.

  // useEffect(() => {
  //   getSomethingThatWillResolvetoAPromise()
  //     .then((data) => {
  //       console.log("Promise resolved", data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // 1. Promises
  // 2. async/await
  // var = data ?? ""

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((categories) => {
        console.log("Promise resolved", data);
        setData(categories?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    async function fetchData() {
      const response = await fetch(endpoint);
      return await response.json();
    }

    // fetchData().then((categories) => {
    //   setData(categories);
    // });
  }, []);

  return (
    <>
      {/* Categories */}
      <section className="px-4 my-16">
        <div className="mx-auto max-w-6xl">
          <>
            <SectionTitle title="categories" />
            <div className="flex gap-4 justify-between items-center mb-14">
              <h3 className="text-xl md:text-3xl font-medium md:tracking-wide">
                Browse By Category
              </h3>
              <div className="flex gap-1">
                <span className="bg-secondary p-2 rounded-full">
                  <FaArrowLeft />
                </span>
                <span className="bg-secondary p-2 rounded-full">
                  <FaArrowRight />
                </span>
              </div>
            </div>
            <div className="flex gap-6 flex-wrap justify-center mb-14">
              {data &&
                data.map((category, index) => (
                  <CategoryItem text={category.name} key={index} />
                ))}
            </div>
          </>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Categories;
