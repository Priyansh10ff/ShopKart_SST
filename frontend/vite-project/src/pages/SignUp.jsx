import React from "react";
import image1 from "../assets/image1.png";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#D8D0C4] flex items-center justify-center p-8">

      {/* Main Card */}
      <div className="w-full max-w-[1080px] h-[768px] bg-white rounded-[52px] p-4 flex overflow-hidden">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-1/2 flex items-center justify-center">

          <div className="w-[340px]">

            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-[34px] font-semibold text-[#303030] tracking-[-1.5px]">
                SignUp 👋
              </h1>

              <p className="text-[11px] text-[#999999] mt-4">
                Please enter your details.
              </p>
            </div>

            {/* Name */}
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  h-[44px]
                  rounded-full
                  border
                  border-[#d5d5d5]
                  px-6
                  text-[11px]
                  text-[#333]
                  outline-none
                  focus:border-[#aaaaaa]
                  placeholder:text-[#c4c4c4]
                "
              />
            </div>

            {/* Email */}
            <div className="relative mb-3">
              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  h-[44px]
                  rounded-full
                  border
                  border-[#d5d5d5]
                  px-6
                  pr-12
                  text-[11px]
                  text-[#333]
                  outline-none
                  focus:border-[#aaaaaa]
                  placeholder:text-[#c4c4c4]
                "
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ✉
              </span>
            </div>

            {/* Phone */}
            <div className="relative mb-3">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="
                  w-full
                  h-[44px]
                  rounded-full
                  border
                  border-[#d5d5d5]
                  px-6
                  pr-12
                  text-[11px]
                  text-[#333]
                  outline-none
                  focus:border-[#aaaaaa]
                  placeholder:text-[#c4c4c4]
                "
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ☎
              </span>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  h-[44px]
                  rounded-full
                  border
                  border-[#d5d5d5]
                  px-6
                  pr-12
                  text-[11px]
                  text-[#333]
                  outline-none
                  focus:border-[#aaaaaa]
                  placeholder:text-[#c4c4c4]
                "
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ◉
              </span>
            </div>

            {/* SignUp Button */}
            <button
              className="
                w-full
                h-[44px]
                rounded-full
                bg-[#ff9918]
                hover:bg-[#f58c08]
                text-white
                text-[12px]
                font-medium
                mt-6
                transition
              "
            >
              SignUp
            </button>

            {/* Login */}
            <p className="text-center text-[11px] text-[#aaaaaa] mt-5">
              Already have an account?{" "}
              <button className="text-[#333333] font-medium">
                LogIn
              </button>
            </p>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-1/2 p-0">

          <div className="w-full h-full rounded-[38px] overflow-hidden">

            <img
              src={image1}
              alt="Landscape"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUp;