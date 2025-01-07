import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
     
      

<nav class="bg-customBrown ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <img src={`${process.env.PUBLIC_URL}/logo/des.png`} className=" h-12 w-auto" alt="logo" />
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-customBrown md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link to="/">  <a href="#" class="block py-2 px-3 text-gray-100  rounded font-serif md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500" >Home</a></Link>
        </li>
        
        <li>
        <Link to="work"> <a href="#" class="block py-2 px-3 text-gray-100 rounded font-serif  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 ">Work</a></Link>
        </li>
        <li>
        <Link to="about"> <a href="#" class="block py-2 px-3 text-gray-100 rounded font-serif  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 ">About</a></Link>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/Cv.pdf`} class="block py-2 px-3 text-gray-100 rounded font-serif  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 ">Cv</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      
    );
  };
  
  export default Nav;