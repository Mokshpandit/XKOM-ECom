import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({isOpen,closeDrawer}) => {
  


  return (

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Menu
          </h5>
          <button
            onClick={closeDrawer}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <AiOutlineClose className="w-5 h-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Drawer Items */}
        <ul className="space-y-2 font-medium">
          {[
            { label: 'Dashboard' },
            { label: 'Kanban', badge: 'Pro' },
            { label: 'Inbox', badge: '3' },
            { label: 'Users' },
            { label: 'Products' },
            { label: 'Sign In' },
            { label: 'Sign Up' },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="shrink-0 w-5 h-5 bg-gray-300 rounded-full mr-2" />
                <span className="flex-1 whitespace-nowrap">{item.label}</span>
                {item.badge && (
                  <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium rounded-full 
                    bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    
  );
};

export default Sidebar;
