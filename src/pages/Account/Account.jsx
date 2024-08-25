import Button from "@components/Button";
import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs sm:text-sm font-medium flex gap-4 justify-between">
            <div>
              <span className="opacity-60 font-normal">Home / </span>
              <span>My Account</span>
            </div>
            <div>
              Welcome! <span className="text-secondary2">Md Rimel</span>
            </div>
          </div>

          <div className="my-14 flex max-md:flex-col gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="space-y-3">
                <h2>
                  <Link to="#">Manage My Account</Link>
                </h2>
                <ul className="text-black/50 ml-4 space-y-2">
                  <li>
                    <Link to="" className="text-secondary2">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link to="">Address Book</Link>
                  </li>
                  <li>
                    <Link to="">My Payment Options</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2>
                  <Link to="#">My Orders</Link>
                </h2>
                <ul className="text-black/50 ml-4 space-y-2">
                  <li>
                    <Link to="">My Returns</Link>
                  </li>
                  <li>
                    <Link to="">My Cancellations</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h2>
                  <Link to="#">My WishList</Link>
                </h2>
              </div>
            </div>
            <div className="flex-1 max-sm:p-6 p-8 md:px-12 shadow-md rounded-md space-y-4">
              <h2 className="text-secondary2 text-xl">Edit Your Profile</h2>
              <form className="space-y-4">
                <div className="flex max-sm:flex-col gap-4 lg:gap-10">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                      placeholder="Md"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                      placeholder="Rimel"
                    />
                  </div>
                </div>
                <div className="flex max-sm:flex-col gap-4 lg:gap-10">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                      placeholder="rimel1111@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="currentPassword">Password Changes</label>
                    <input
                      type="password"
                      className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                      id="currentPassword"
                      placeholder="Current Password"
                    />
                  </div>
                  <input
                    type="password"
                    className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                    placeholder="New Password"
                  />
                  <input
                    type="password"
                    className="bg-secondary rounded-md p-2 pl-4 outline-none min-w-28 w-full"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div>
                  <div className="flex gap-4 w-fit ml-auto">
                    <button>Cancel</button>
                    <Button variant="primary" text="Save Changes" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
