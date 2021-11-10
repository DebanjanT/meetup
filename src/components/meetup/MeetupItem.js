export default function MeetupItem(props) {
  return (
    <div className="w-full sm:w-full md:w-1/2 mx-auto pt-3 px-4 ">
      <div className=" rounded-md shadow-md bg-coolGray-900 text-coolGray-200 border-l-2 border-yellow-600">
        {props.image ? (
          <img
            src={props.image}
            alt={props.title}
            className="object-contain object-center w-full rounded-t-md h-72 bg-coolGray-700"
          />
        ) : null}

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide text-yellow-600">
              {props.title}
            </h2>
            <p className="text-coolGray-100 text-md">{props.description}</p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center -py-1 font-semibold  rounded-lg border border-2 border-yellow-600 hover:bg-yellow-600 transform transition-all hover:scale-105 hover:text-coolGray-200 text-gray-100 w-1/2"
            >
              View Details
            </button>
            <button
              type="button"
              className="flex items-center justify-center -px-2 ml-10 py-1 font-semibold  rounded-lg bg-yellow-600 hover:bg-yellow-600 transform transition-all hover:scale-105 hover:text-coolGray-200 text-gray-100 w-1/2"
            >
              Favourite +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
