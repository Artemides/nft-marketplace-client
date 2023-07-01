import React, { PropsWithChildren, ReactNode } from "react";

type IconButtonProps = PropsWithChildren & {
  loading?: boolean;
};

export const IconButton = ({ children, loading }: IconButtonProps) => {
  return (
    <button className=" relative p-2 grid place-items-center rounded-full hover:bg-gray-500/30 transition-colors duration-200 ease-in-out">
      {loading && (
        <div className="absolute bottom-0 right-0 w-4 h-4 animate-spin border-x-green-500 border-green-500/50 rounded-full border-[3px] border-solid"></div>
      )}
      {children}
    </button>
  );
};
