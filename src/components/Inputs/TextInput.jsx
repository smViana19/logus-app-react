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
                'py-3 px-4 block w-full rounded-lg text-base focus:ring-purple-500 border focus:outline-none dark:bg-zinc-700 dark:text-white' +
                className
            }
            ref={input}
        />
    );
});