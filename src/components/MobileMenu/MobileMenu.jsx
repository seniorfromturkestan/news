import React from "react";
import Button from "../Button/Button";


const MobileMenu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      />
      <div className={`absolute right-0 top-0 w-1/2 bg-white justify-center z-20 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }` }>
        <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
                  <ul className="flex flex-col font-semibold  text-xl md:text-2xl">
                    <li className="border-b p-3">Actual News</li>
                    <li className="border-b p-3">Company</li>
                    <li className="border-b p-3">Careers</li>
                    <li className="border-b p-3">About us</li>
                  </ul>
           
                  <div className="flex flex-col space-y-5">
                      <Button>Login</Button>
                      <Button>Register</Button>

                  </div>


        </nav>
      </div>
    

    </>
  );
};

export default MobileMenu;