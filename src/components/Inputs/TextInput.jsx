import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'py-3 px-4 block w-full border-gray-600 rounded-lg text-sm focus:border-purple-500 focus:ring-purple-500  disabled:pointer-events-none  ' +
                className
            }
            ref={input}
        />
    );
});