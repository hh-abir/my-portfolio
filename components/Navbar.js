'use client'
import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleMoreMenu = () => {
//     setIsMoreMenuOpen(!isMoreMenuOpen);
//   };

//   return (
//     <nav className="fixed w-full top-0 z-10 bg-black py-4 px-4 md:px-0">
//       <div className="  container mx-auto flex justify-between items-center">
//         <div className="text-white text-lg font-semibold">My Website</div>
//         <div className="md:hidden relative">
//           <button onClick={toggleMenu} className="text-white">
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//           <div className={`absolute right-0 mt-2 w-36 bg-white border text-center rounded-lg py-2 ${isMenuOpen ? '' : 'hidden'} md:block`}>
//             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
//             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About</a>
//             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Projects</a>
//             <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
//             <div className="mt-2">
//               <button onClick={toggleMoreMenu} className="px-4 py-2 text-gray-800 text-center hover:bg-gray-100 w-full flex flex-row justify-center items-center">More {isMoreMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform rotate-180">
//                 <path d="M12 5v14M18 11L12 17 6 11" />
//               </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className='ml-2' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 5v14M18 11L12 17 6 11" />
//               </svg>}
//               </button>
//               <div className={`mt-2 ${isMoreMenuOpen ? 'block' : 'hidden'} `}>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Gallery</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Achivements</a>
//                 <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="hidden md:flex space-x-4 md:ml-auto pl-">

//           <a href="#" className="text-white">Home</a>
//           <a href="#" className="text-white">About</a>
//           <a href="#" className="text-white">Projects</a>
//           <a href="#" className="text-white">Contact</a>
//           <div className="relative">
//             <button onClick={toggleMoreMenu} className="text-white">Others</button>
//             <div className={`absolute right-0 mt-2 w-36 text-center bg-white border rounded-lg py-2 ${isMoreMenuOpen ? 'block' : 'hidden'}`}>
//               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Gallery</a>
//               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Achivements</a>
//               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// function Navbar() {
//   return (
//     <div className="drawer drawer-end px-3 bg-black ">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col">
//         {/* Navbar */}
//         <div className="w-full navbar bg-black">
//           <div className="flex-1 px-2 mx-2 text-white text-xl">Navbar Title</div>
//           <div className="flex-none lg:hidden">
//             <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//             </label>
//           </div>

//           <div className="flex-none hidden lg:block">

//             <ul className="text-white menu menu-horizontal">
//               {/* Navbar menu content here */}
//               <li><a>Navbar Item 1</a></li>
//               <li><a>Navbar Item 2</a></li>
//               <div className="dropdown dropdown-hover mx-3 my-2">
//                 <label tabIndex={0} className="">Hover</label>
//                 <ul tabIndex={0} className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
//                   <li><a>Item 1</a></li>
//                   <li><a>Item 2</a></li>
//                 </ul>
//               </div>
//               <li><a>Navbar Item 3</a></li>
//               <li><a>Navbar Item 4</a></li>

//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
//         <ul className="menu p-4 w-64 h-full bg-base-200">
//           {/* Sidebar content here */}
//           <li><a>Sidebar Item 1</a></li>
//           <li><a>Sidebar Item 2</a></li>
//           <div className="dropdown dropdown-hover mx-4 py-2">
//             <label tabIndex={0} className="">Hover</label>
//             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
//               <li><a>Item 1</a></li>
//               <li><a>Item 2</a></li>
//             </ul>
//           </div>

//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

export default function Navbar() {
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};