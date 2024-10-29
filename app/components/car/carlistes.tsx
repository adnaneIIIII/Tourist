"use client";
import { useState } from "react";
import Carcard from "./carcard";
import Bookingmodel from "./carbooking/bookingmodel";

function Carlistes(props: any) {
  const [selectedcar, setSelectedcar] = useState<any>([]);
  return (
    // <div className="mt-10 block items-center justify-between">
    <div className="mt-10 block items-center justify-between">
      <div className="ml-5 mt-10">
        <h2 className="text-4xl font-bold">Cars Catalog</h2>
        <h2>Explore our Cars</h2>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {props.data.map((car: any) => (
          <div
            className="cursor-pointer bg-white rounded-lg p-4 text-gray-700 space-y-3"
            key={car.id}
            onClick={() => {
              (document as any).getElementById("my_modal_4").showModal();
              setSelectedcar(car);
            }}
          >
            <Carcard key={car.id} car={car} />
          </div>
        ))}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_4" className="modal">
          <Bookingmodel car={selectedcar} />
        </dialog>
      </div>
    </div>
  );
}

export default Carlistes;
