import { useRef } from "react";

function AddMeetupform(props) {
  const titleRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();

  //form submission handler
  function submitHandler(e) {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descRef.current.value;
    const enteredImage = imageRef.current.value;

    const meetupFormData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription,
      image: enteredImage,
    };
    props.onAddMeetup(meetupFormData);
  }
  return (
    <div className="pt-10">
      <form
        onSubmit={submitHandler}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid text-white"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-3xl text-purple-400">
              Add Meetup event
            </p>
            <p className="text-xs">
              Enter meetup details to add to dashboard! <br /> @Debanjan_Tewary
              2021 | All rights are reserved
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="meetuptitle" className="text-sm">
                Meetup Title
              </label>
              <input
                required
                ref={titleRef}
                id="meetuptitle"
                type="text"
                placeholder="Title"
                className="w-full px-2  rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-400 border-coolGray-700 text-coolGray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                required
                ref={addressRef}
                id="address"
                type="text"
                placeholder="Address"
                className="w-full px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-400 border-coolGray-700 text-coolGray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-6">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea
                required
                ref={descRef}
                id="description"
                type="text"
                placeholder="Meeting Desription..."
                className="w-full px-2 mt-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-400 border-coolGray-700 text-coolGray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="image" className="text-sm">
                Image Url
              </label>
              <input
                required
                ref={imageRef}
                id="image"
                type="url"
                placeholder="Enter Image url"
                className="w-full px-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-400 border-coolGray-700 text-coolGray-900"
              />
            </div>
            <div className="flex justify-end col-span-6">
              <button className="px-6 border border-purple-400 py-2 hover:bg-purple-500 hover:border-0 transform transition-all hover:scale-110 duration-300">
                Add Meeting
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddMeetupform;
