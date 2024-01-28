'use client'

import { useState } from "react";
import ImageData from "./imageData";
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [voteSuccess, setVoteSuccess] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    // Your fetch logic for user registration

    // Update the state to show success message
    setVoteSuccess(true);

    // Reset the form fields
    setEmail('');
    setPassword('');
  }

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Reset success message when modal is closed
    setVoteSuccess(false);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-semibold  text-slate-800">Hello, Annalectuals🤘</h1>

      <Link href="/"><button className="px-5 my-5 bg-fuchsia-700 text-white font-semibold rounded-md py-1.5 hover:bg-fuchsia-950">Go back</button></Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ImageData.map((image) => (
          <div key={image.id} className="relative">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-cover mb-2"
              />
              <div className="p-4">
                <p className="text-xl font-semibold">{image.title}</p>
                <p className="text-gray-600">{image.artist}</p>
                <button
                  type="button"
                  onClick={() => openModal(image)}
                  className="w-full mt-2 bg-indigo-600 text-white font-semibold rounded-md py-1.5 hover:bg-indigo-500"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white w-96 p-6 rounded-md shadow-lg z-50 overflow-y-auto max-h-screen">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                   {selectedImage.title}
                </h3>
              </div>
              <div className="">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-md mb-4"
            />

            <div className="mb-2">
              <p className="text-gray-600 font-bold text-2xl">By {selectedImage.artist} - ID {selectedImage.id}</p>
            </div>

            <p>{selectedImage.details}</p>
            <a className="text-blue-600 font-medium inline-block mt-3" href={selectedImage.rawl} target="_blank">Click for full image</a>

            {/* Success message */}
            {voteSuccess && (
              <div className="bg-green-200 text-green-800 p-3 rounded-md mt-4">
                Vote successfully registered!
              </div>
            )}

            <form className="space-y-3" onSubmit={registerUser}>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    placeholder="Type in your name"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    autoComplete="current-password"
                    required
                    value={password}
                    placeholder="Type in above ID number"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Vote❤️
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
