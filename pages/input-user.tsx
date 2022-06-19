import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constant";

const InputUser = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/students?group=mipa`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data)
      .then((data) => setStudents(data));
  }, []);

  return (
    <>
      <div>{students}</div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Group"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Group
              </label>
              <input
                type="text"
                name="Group"
                id="Group"
                placeholder="Enter your group"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputUser;
