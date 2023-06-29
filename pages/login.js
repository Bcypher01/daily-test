import React from "react";
import Image from "next/image";

export default function login() {
  return (
    <div className="container grid place-items-center h-screen">
      <div className="flex border w-full lg:w-[900px] lg:h-[564px] rounded-md shadow-md">
        <div className="hidden lg:block w-6/12">
          <Image
            alt="background"
            width={450}
            height={564}
            className="object-fill rounded w-full"
            src={"/static/images/Rectangle-38.png"}
          />
        </div>
        <div className="block w-full lg:w-6/12">
          <div className="px-8 py-8">
            <h1 className="font-bold text-2xl">Login</h1>
            <p className="text-xl font-light">
              Donec tortor quam at duis tortor.
            </p>
            <div className="py-8">
              {/* Email field */}
              <label htmlFor="Email" className="font-light text-xl">
                Email
              </label>
              <div className="py-1 pb-5">
                <input
                  type="email"
                  name="email"
                  className="w-full py-1 px-2 focus:outline-none rounded border border-gray-200"
                />
              </div>

              {/* Password field */}
              <label htmlFor="Email" className="font-light text-xl">
                Password
              </label>
              <div className="py-1">
                <input
                  type="password"
                  name="password"
                  className="w-full py-1 px-2 focus:outline-none rounded border border-gray-200"
                />
              </div>
              <p className="text-right text-gray-700 py-3 font-semibold">
                Forgot password?
              </p>
              <button
                type="submit"
                className="w-full bg-blue-500 py-2 my-2 rounded text-white"
              >
                Login
              </button>
              <div className="mt-20">
                <button
                  type="submit"
                  className="w-full border border-gray-500 py-2 my-2 rounded text-gray-500"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
