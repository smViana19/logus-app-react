import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, className = '', children, ...props }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            {...props}
            className={
                'inline-flex items-center px-2 leading-5 ease-in-out focus:outline-none text-gray-400 transition-all duration-150 ' +
                (isActive
                    ? 'border-b-2 border-purplePrimary text-purplePrimary '
                    : 'border-b-2 border-transparent hover:text-gray-800 hover:border-gray-300') +
                className
            }
        >
            {children}
        </Link>
    );
}
