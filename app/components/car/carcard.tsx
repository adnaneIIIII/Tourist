
function Carcard(props: any) {
  const car = props.car;

  return (

      <div
        key={car.id}
        className="flex flex-col items-center bg-white rounded-lg p-4 text-gray-700 space-y-3"
      >
        <img
          src={car.image}
          alt={car.carname}
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
        <div className="w-full flex justify-between">
          <div>
            <p className="text-lg font-semibold">{car.carname}</p>
            <p className="text-sm text-gray-500">{car.brand}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">${car.price}</p>
            <p className="text-sm text-gray-500">Per Day</p>
          </div>
        </div>

      </div>

  );
}

export default Carcard;
