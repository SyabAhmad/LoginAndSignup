import React from "react";
import Link from "next/link";
const Signup = () => {
  return (
    <>
      <main className="flex fle-col justify-center  mt-40">
        <div className=" flex flex-row items-center flex-wrap gap-20 rounded-2xl transition .2s ease-out hover:shadow-2xl p-5 border  border-blue-50 ">
          <div className="w-96">
            <img
              className="w-full rounded-xl mr-20"
              src="https://media.pocketgamer.biz/2014/11/22890/imga-logo-r225x.jpg"
              alt=""
            />
          </div>
          <hr className="w-0 h-3/4 border border-blue-50" />
          <div className="flex flex-col items-center text-center flex-wrap">
            <div className="flex flex-col justify-center items-center  p-20">
              <div>
                <h2 className="text-4xl p-1">Welcome</h2>
              </div>
              <div className="flex flex-col justify-center flex-wrap items-center  p-2 gap-4">
                <label htmlFor="userName">User Name </label>
                <input
                  className="border-y-2 border-blue-50 shadow-light-50 p-1"
                  type="text"
                  placeholder="user name"
                  id="userName"
                />
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  className="border-y-2 border-blue-50 shadow-light-50 p-1"
                  type="text"
                  placeholder="user name"
                  id="emailAddress"
                />
                <label htmlFor="password">Password</label>
                <input
                  className="border-y-2 border-blue-50 shadow-light-50 p-1"
                  type="password"
                  placeholder="user name"
                  id="password"
                />
                <button className="bg-blue-50 p-3 border border-blue-50 rounded-xl shadow hover:bg-blue-200">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
