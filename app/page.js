
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className=" container mx-auto px-8 items-center my-20">
      <h1 className="text-3xl font-semibold pl-10">Hello, Annalectuals🤘</h1>

      <div className="flex mt-8 items-center justify-self-end ">
        {/* Column for the paragraph */}
        <div className="w-3/4 pr-8 pl-10">
        <h3 className="text-3xl font-semibold mb-5">Guidelines!!!👇</h3>
          <p className="text-lg ">
          Welcome to our vibrant gallery! Step into the artistic realm by clicking the button below, explore a myriad of captivating artworks and photographs. If a piece catches your eye, delve into its details to experience the artist's perspective. You can also view a larger version of the image.

            Enter your name and the accompanying ID number located near the name into the designated fields, then click the button to cast your vote for your favorite artist's creation. Embark on this visual journey with us, and thank you for being an integral part of our creative community!
          </p>
          <Link href="/register"><button className="px-5 my-5 bg-fuchsia-700 text-white font-semibold rounded-md py-1.5 hover:bg-fuchsia-950">Enter Gallery</button></Link>
        </div>

        {/* Column for the image */}
        <div className="w-1/3 justify-self-end">
          <img src="./web-logo.png" alt="Gallery" className="w-90 h-auto" />
        </div>
      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-8 ">
            {/* Image 1 */}
            <div className="relative">
              <div>
                <img
                  src="./crp-img/dance-crp.png"
                  alt="Image 1"
                  className="w-full rounded-md md:w-auto mx-auto"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <div>
                <img
                  src="./crp-img/flower-crp.png"
                  alt="Image 1"
                  className="w-full rounded-md md:w-auto mx-auto"
                />
              </div>
            </div>

        {/* Image 3 */}
        <div className="relative">
          <div>
            <img
              src="./crp-img/flowers-crp.png"
              alt="Image 1"
              className="w-full rounded-md md:w-auto mx-auto"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative">
          <div>
            <img
              src="./crp-img/girl-crp.png"
              alt="Image 1"
              className="w-full rounded-md md:w-auto mx-auto"
            />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Page;
