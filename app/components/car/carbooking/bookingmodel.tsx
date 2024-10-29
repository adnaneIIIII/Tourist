import React from "react";
import Carcard from "../carcard";
import Carform from "../carbooking/carform";
function Bookingmodel({ car }: any) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 flex justify-between">
        <h3 className="text-[30px] font-medium text-gray-600">
          Rent A Car Now!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Carcard car={car} />
        </div>
        <div>
          <Carform car={car} />
        </div>
      </div>
    
    </form>
  );
}

export default Bookingmodel;
