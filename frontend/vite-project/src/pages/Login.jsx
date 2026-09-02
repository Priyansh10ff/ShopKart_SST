import React, { useState } from "react";
import image1 from "../assets/image1.png";
import axiosInstance from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoader(true);
    try {
      await axiosInstance.post("/customers/login", form);
      navigate("/home");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#D8D0C4] flex items-center justify-center p-8">
      {/* Main Card */}
      <div className="w-full max-w-[1080px] h-[768px] bg-white rounded-[52px] p-4 flex overflow-hidden">
        {/* ================= LEFT SIDE ================= */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[340px]">
            {/* Heading */}
            <div className="text-center mb-20">
              <h1 className="text-[34px] font-semibold text-[#303030] tracking-[-1.5px]">
                Welcome back👋
              </h1>
            </div>

            {/* Small Description */}
            <p className="text-center text-[11px] text-[#303030] mb-5">
              Please enter your details.
            </p>

            {/* Email */}
            <div className="relative mb-3">
              <input
                type="email"
                placeholder="Email"
                name = "email"
                value={form.email}
                onChange={handleChange}
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

              {/* Email Icon */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ✉
              </span>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                name = "password"
                value={form.password}
                onChange={handleChange}
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

              {/* Eye Icon */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ◉
              </span>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              className="
                w-full
                h-[44px]
                rounded-full
                bg-[#ff9918]
                hover:bg-[#f58c08]
                text-white
                text-[12px]
                font-medium
                mt-8
                transition
              "
            >
              Log In
            </button>

            {/* Sign Up */}
            <p className="text-center text-[11px] text-[#aaaaaa] mt-5">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#333333] font-medium">
                Sign Up
              </Link>
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

export default Login;
