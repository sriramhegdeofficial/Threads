"use client";

import CustomAvatar from "../CustomAvatar/CustomAvatar";

const FeedItemPlain = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-max px-2">
          <CustomAvatar src="https://github.com/shadcn.png" alt="@shadcn" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between py-[4px]">
            <h5 className="font-semibold text-md line-clamp-1 max-w-[150px] ">
              Adani Green Enterprise Adani Green Enterprise Adani Green
              Enterprise
            </h5>
            <h6 className="font-medium text-md line-clamp-1 max-w-[80px] text-gray-400">
              @adaniMuskAmbani
            </h6>

            <span className="text-xl text-gray-400 translate-y-[-8px]">.</span>
            <span className="text-gray-400 ">1hr</span>

            <sup className="text-xl text-gray-400">...</sup>
          </div>
          <p className="text-sm leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            eaque rerum optio, sit soluta dignissimos aspernatur possimus
            officiis aliquam! Laborum labore, laboriosam nisi optio voluptatibus
            quia nesciunt voluptatem corporis totam?
          </p>
        </div>
      </div>
    </>
  );
};

export default FeedItemPlain;
