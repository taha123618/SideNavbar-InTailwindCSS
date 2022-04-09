import React, { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!open ? (
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <svg className="text-black">this SVg</svg>
        </button>
      ) : (
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="text-white text-xl fixed top-4 right-4 z-10"
        >
          X
        </button>
      )}

      <div
        className={`top-0 right-0 bg-red-400 w-[35vw] h-full p-10 fixed
        ${
          open ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h1 className="text-white text-2xl ">This side bar</h1>
      </div>
    </>
  );
}

export default SideBar;
