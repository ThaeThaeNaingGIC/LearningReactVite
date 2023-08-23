import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirm: "",
    terms: "",
    employment: "",
    partTime: "",
    fullTime: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match!");
    }

    if (formData.terms) {
      console.log("You agree to the terms and conditions");
    }
    if (formData.employment) {
      console.log("status is unemployment");
    }
    if (formData.partTime) {
      console.log("status is partTime");
    }
    if (formData.fullTime) {
      console.log("status is fullTime");
    }
  }

  return (
    <div className="bg-purple-900">
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-red-100 p-6 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.email}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.password}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={FormData.confirm}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="terms" className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                onChange={handleChange}
                checked={FormData.terms}
              />
              <span className="text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>
          <fieldset className="flex-column">
            <legend>Current employee status</legend>
            <div>
              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="unemployed">Unemployed</label>
            </div>
            <div>
              <input
                type="radio"
                id="part-time"
                name="partTime"
                value="part-time"
                checked={formData.partTime}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="part-time">Part-time</label>
            </div>
            <div>
              <input
                type="radio"
                id="full-time"
                name="fullTime"
                value="full-time"
                checked={formData.fullTime}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="full-time">Full-time</label>
            </div>
          </fieldset>
          <label htmlFor="favColor">What is your favourite color?</label>
          <div className="my-2">
            <select
              id="favColor"
              value={formData.favColor}
              onChange={handleChange}
              name="favColor"
            >
              <option value="">--Choose--</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div className="mb-6">
            <button className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
