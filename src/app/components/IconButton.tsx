import React, { PropsWithChildren, ReactNode } from "react";

export const IconButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="p-2 grid place-items-center rounded-full hover:bg-gray-500/30 transition-colors duration-200 ease-in-out">
      {children}
    </button>
  );
};
