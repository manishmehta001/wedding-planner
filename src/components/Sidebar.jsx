import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed right-0 top-1/4 w-64 bg-white shadow-lg p-4">
      <h3 className="text-lg font-semibold">Wedding Planner Tips</h3>
      <ul className="mt-2">
        <li>
          <a href="#" className="block py-2 text-gray-700">
            Bridal Dress Ideas
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 text-gray-700">
            Top 10 Wedding Destinations
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 text-gray-700">
            Budget Planning
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
