import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { BiMenuAltLeft } from "react-icons/bi";


const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Custom Build', to: '/build' },
  {
    name: 'Components',
    to: '/components',
    dropdown: [
      { name: 'CPU', to: '/components/cpu' },
      { name: 'MOTHERBOARD', to: '/components/mobo' },
      { name: 'RAM', to: '/components/ram' },
      { name: 'COOLER / AIO', to: '/components/cooler' },
      { name: 'POWER SUPPLY', to: '/components/psu' },
      { name: 'CABINET', to: '/components/cabinet' },
      { name: 'STORAGE', to: '/components/storage' },
      { name: 'GPU', to: '/components/gpu' },
      // ... other categories
    ],
  },
  { name: 'Accessories', to: '/accessories'}
];

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);



  return (
    <nav className={`${props.isOverVideo ? 'bg-transparent' : 'bg-white shadow-sm' } md:px-20 z-30 sticky top-0 w-full `} >
      <div className="max-w-fill flex items-center justify-between h-16">
        <div className="text-center flex items-center">
          <button
            className="hidden md:inline mx-4 text-blue-500 bg-gray-600 hover:bg-gray-800 focus:ring-2 focus:ring-gray-300 rounded-lg text-md   p-1 dark:bg-gray-200 dark:hover:bg-gray-300 focus:outline-none dark:focus:ring-blue-500"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
            onClick= {props.sidebarOpen}
          >
            <BiMenuAltLeft className='size-6' />
          </button>
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-bold text-blue-500">
            XKOM PC
          </NavLink>
        </div>

        {/* Desktop Nav */}
                <ul className="hidden font-normal text-sm md:text-lg md:flex items-center space-x-2 md:space-x-6">
          {navItems.map(item => (
            item.dropdown ? (
              <li key={item.name} className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {item.name}
                </button>
                {/* Dropdown */}
                {dropdownOpen && (
                  <ul
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onClick={() => setDropdownOpen(false)}
                    className="absolute top-full bg-white border rounded shadow text-xs md:text-base"
                  >
                    {item.dropdown.map(sub =>
                      <li key={sub.name}>
                        <NavLink to={sub.to} className="block px-2 py-1 md:px-4 md:py-2 hover:bg-gray-100">
                          {sub.name}
                        </NavLink>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.name}>
                <NavLink to={item.to} className="navItem text-blue-500 hover:text-blue-600">
                  {item.name}
                </NavLink>
              </li>
            )
          ))}
        </ul>

        {/* Search, Auth, Cart (always visible, flex for mobile and desktop) */}
          <div className="flex items-center bg-gray-200 rounded-lg overflow-hidden max-w-1/3 w-full">
            <button className="px-2 text-gray-600">
              <AiOutlineSearch className='text-blue-500'/>
            </button>
            <input type="text" placeholder="Search components..." className="px-2 py-2 outline-none bg-gray-200 w-full" />
          </div>
        <div className="flex items-center gap-2 ">
          {/* Search Box */}
          {/* Sign Up / Sign In */}
          <NavLink to="/signin" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-md font-medium">Sign In</NavLink>
          <NavLink to="/signup" className="px-4 py-2 rounded-lg bg-gray-200 text-blue-600 hover:bg-blue-100 text-md font-medium">Sign Up</NavLink>
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative px-2 py">
            <AiOutlineShoppingCart size={27} className="cursor-pointer text-blue-500" />
            {/* Example cart count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button className="block md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose className='text-blue-500' size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (only nav links) */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map(item => (
              <li key={item.name}>
                <NavLink to={item.to} className="block text-gray-700">{item.name}</NavLink>
                {item.dropdown && (
                  <ul className="pl-4 mt-1 space-y-1">
                    {item.dropdown.map(sub =>
                      <li key={sub.name}>
                        <NavLink to={sub.to} className="block text-gray-600">{sub.name}</NavLink>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;