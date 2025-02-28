// import React from "react";
// import {
//   FaPinterest,
//   FaFacebookF,
//   FaInstagram,
//   FaTiktok,
// } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// const FooterSection = () => {
//   return (
//     <footer className="bg-white w-full py-14 border-t border-gray-200 min-h-screen flex flex-col justify-between">
//       {/* Top Section with Logo, Social Links, and Search */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 pb-12">
//         {/* Social Links */}
//         <div className="flex gap-6 text-gray-700 text-2xl">
//           <a href="#" aria-label="Pinterest" className="hover:text-gray-500">
//             <FaPinterest />
//           </a>
//           <a href="#" aria-label="Facebook" className="hover:text-gray-500">
//             <FaFacebookF />
//           </a>
//           <a href="#" aria-label="Instagram" className="hover:text-gray-500">
//             <FaInstagram />
//           </a>
//           <a href="#" aria-label="TikTok" className="hover:text-gray-500">
//             <FaTiktok />
//           </a>
//         </div>

//         {/* Logo */}
//         <div className="text-center">
//           <img
//             src="/images/logo.png"
//             alt="Bridal Bliss Logo"
//             className="w-28 mx-auto"
//           />
//           <p className="text-gray-600 text-sm mt-3">EST. 2002</p>
//         </div>

//         {/* Search Bar */}
//         <div className="w-full max-w-sm">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             />
//             <FiSearch className="absolute left-4 top-3 text-gray-500 text-lg" />
//           </div>
//         </div>
//       </div>

//       {/* Image Gallery */}
//       <div className="bg-gray-800 py-10 flex-grow">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-5">
//           {["wp8.jpg", "wp7.jpg", "wp6.jpg", "wp5.jpg", "wp1.jpg"].map(
//             (image, idx) => (
//               <img
//                 key={idx}
//                 src={`/images/${image}`}
//                 alt={`Gallery ${idx + 1}`}
//                 className="w-full h-60 object-cover rounded-xl"
//               />
//             )
//           )}
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="bg-gray-800 py-5 text-center">
//         <nav className="space-x-5 text-gray-200 text-sm">
//           <a href="#" className="hover:underline">
//             Portland Wedding Planners
//           </a>
//           <span>|</span>
//           <a href="#" className="hover:underline">
//             Seattle Wedding Planners
//           </a>
//           <span>|</span>
//           <a href="#" className="hover:underline">
//             Bend Wedding Planners
//           </a>
//           <span>|</span>
//           <a href="#" className="hover:underline">
//             Contact Us
//           </a>
//         </nav>
//       </div>

//       {/* Footer Bottom */}
//       <div className="bg-gray-800 py-3 border-t border-gray-700 text-center text-gray-300 text-xs space-y-2">
//         <p>© 2025 Bridal Bliss, INC. All rights reserved</p>
//         <p>
//           <a href="mailto:nora@bridalbliss.com" className="hover:underline">
//             nora@bridalbliss.com
//           </a>{" "}
//           |
//           <a href="tel:5038044901" className="hover:underline">
//             {" "}
//             5038044901{" "}
//           </a>{" "}
//           |
//           <a href="#" className="hover:underline">
//             Site Design
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;

import React from "react";
import {
  FaPinterest,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-white w-full py-14 border-t border-gray-200 min-h-screen flex flex-col justify-between max-h-[600px]">
      {/* Top Section with Logo, Social Links, and Search */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between md:items-center gap-10 pb-12">
        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 text-gray-700 text-3xl w-full md:w-auto">
          <Link href="#" aria-label="Pinterest" className="hover:text-gray-500">
            <FaPinterest />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-gray-500">
            <FaFacebookF />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-500">
            <FaInstagram />
          </Link>
          <Link href="#" aria-label="TikTok" className="hover:text-gray-500">
            <FaTiktok />
          </Link>
        </div>

        {/* Logo */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="text-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/569fb1fccbced6e361e09b11/1665604480023-K3JNBUGYYX5Z4R4SVJ2H/BB%252BColor%252BNumbers.jpg"
              alt="Bridal Bliss Logo"
              className="w-28 mx-auto"
            />
            <p className="text-gray-600 text-sm mt-3">EST. 2002</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-sm flex justify-center md:justify-end">
          <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-gray-800 py-10 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-5">
          {["wp8.jpg", "wp7.jpg", "wp6.jpg", "wp5.jpg", "wp1.jpg"].map(
            (image, idx) => (
              <img
                key={idx}
                src={`/images/${image}`}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
            )
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-gray-800 py-9 text-center">
        <nav className="space-x-5 text-gray-200 text-sm">
          <a href="#" className="hover:underline">
            Portland Wedding Planners
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Seattle Wedding Planners
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Bend Wedding Planners
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-7 border-t border-gray-700 text-center text-gray-300 text-xs space-y-2">
        <p>© 2025 Bridal Bliss, INC. All rights reserved</p>
        <p>
          <a href="mailto:nora@bridalbliss.com" className="hover:underline">
            nora@bridalbliss.com
          </a>{" "}
          |
          <a href="tel:5038044901" className="hover:underline">
            {" "}
            5038044901{" "}
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            Site Design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
