export default function MeetupItem(props) {
  return (
    <div className="w-full sm:w-full md:w-1/2 mx-auto pt-2 px-4">
      <div className=" rounded-md shadow-md bg-coolGray-900 text-coolGray-200">
        <img
          src={props.image}
          alt={props.title}
          className="object-contain object-center w-full rounded-t-md h-72 bg-coolGray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {props.title}
            </h2>
            <p className="text-coolGray-100 text-md">{props.description}</p>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center justify-center px-3 py-1 font-semibold rounded-md bg-purple-400 hover:bg-purple-500 hover:text-coolGray-200 text-coolGray-900 w-1/2"
            >
              Favourite +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
