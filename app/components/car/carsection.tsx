"use client";
import { useState, useEffect } from "react";
import Carlistes from "./carlistes";
function Carsection() {
  const [data, setData] = useState<any[]>([]);
  const carList_ = async function fetchCarList() {
    try {
      const cars = await fetch("api/cars", { method: "GET", headers: { "Content-Type": "application/json",},
      });
      setData(await cars.json());
      console.log(data);
      // const carList = await fetchCarList();
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };
  useEffect(() => {
    carList_();
  }, []);
  return (
    <div>
      <Carlistes data={data} />
    </div>
  );
}

export default Carsection;
