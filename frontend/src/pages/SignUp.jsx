import React from "react";
import image1 from "../assets/image1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../services/api";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const { setCustomer } = useAuth();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoader(true);
    try {
      const response = await axiosInstance.post("/customers/register", form);
      setCustomer(response.data.newCustomer);
      navigate("/home");
    } catch (error) {
      setErr(error.response.data.message || "Login falied");
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
            <div className="text-center mb-12">
              <h1 className="text-[34px] font-semibold text-[#303030] tracking-[-1.5px]">
                SignUp 👋
              </h1>

              <p className="text-[11px] text-[#999999] mt-4">
                Please enter your details.
              </p>
            </div>

            {err && <p className="text-center text-red-500">{err}</p>}

            {/* Name */}
            <div className="relative mb-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
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
                name="email"
                placeholder="Email"
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

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ✉
              </span>
            </div>

            {/* Phone */}
            <div className="relative mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
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

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ☎
              </span>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                name="password"
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

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d3d3d3] text-[12px]">
                ◉
              </span>
            </div>

            {/* SignUp Button */}
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
                mt-6
                transition
              "
            >
              SignUp
            </button>

            {/* Login */}
            <p className="text-center text-[11px] text-[#aaaaaa] mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-[#333333] font-medium">
                LogIn
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

export default SignUp;
