"use client";
import { useState, useEffect } from "react";

function Carform({ car }: any) {
  const [formValue, setFormValue] = useState<any>({
    fullname: "",
    number: "",
    email: "",
    pickup: "",
    dropoff: "",
    carname: ""
  });

  const handlechange = (event: any) => {
    if (car) {
      setFormValue({
        ...formValue,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-6">
      {/* Full name*/}
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Full name</label>
        <input
          type="name"
          name="fullname"
          value={formValue.fullname}
          onChange={handlechange}
          placeholder="Contact Number"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      {/* Email*/}
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">E-mail</label>
        <input
          type="email"
          name="email"
          value={formValue.email}
          onChange={handlechange}
          placeholder="Contact Number"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      {/* Contact Number */}
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="phone"
          name="number"
          value={formValue.number}
          onChange={handlechange}
          placeholder="Contact Number"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      {/* carname */}
      <div className="hidden">
        <input
          type="text"
          placeholder={car?.title}
          value={car?.carname}
          name="carname"
          onChange={handlechange}
        />
      </div>
      {/* Pick Up / Drop Off Dates */}
      <div className="flex flex-row w-full mb-5 gap-x-4">
        <div className="flex flex-col w-1/2">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            name="pickup"
            value={formValue.pickup}
            onChange={handlechange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            name="dropoff"
            value={formValue.dropoff}
            onChange={handlechange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="modal-action">
        <button className="btn px-6 text-black bg-gray-300">Close</button>
        <button
          className="btn px-6 text-white hover:bg-blue-800 bg-blue-600"
          onClick={handleSubmit}
        >
          Rent Now!
        </button>
      </div>

      {/* Buttons */}
    </div>
  );
}

export default Carform;
