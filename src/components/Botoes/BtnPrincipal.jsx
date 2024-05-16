export default function BtnPrincipal({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `justify-center w-96 items-center py-2 bg-violet-800 hover:bg-violet-600 border border-transparent rounded-md font-medium text-white  tracking-widest hover:bg-gray-200 focus:bg-violet-700 active:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}

        >
            {children}
        </button>
    );
}
