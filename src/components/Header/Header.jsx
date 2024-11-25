import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Header = ({ user, handleThemeChange, isDarkMode, handleLogout }) => {
  return (
    <header className="flex items-center h-14 px-4 bg-white dark:bg-zinc-900 shadow-md justify-center">
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={handleThemeChange}
          className="p-3 rounded-full shadow-md bg-purplePrimary text-white dark:bg-purple-400 hover:bg-purple-500 dark:hover:bg-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-600"
          aria-label="Alternar tema"
        >
          {isDarkMode ? (
            <IoSunnyOutline size={24} />
          ) : (
            <IoMoonOutline size={24} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
