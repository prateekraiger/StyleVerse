import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add email submission logic here
  };

  return (
    <div className="text-center p-6">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe for 20% off on your next purchase.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-md p-2"
      >
        <input
          className="w-full outline-none px-3 py-2 text-sm"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
