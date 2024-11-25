export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-base text-zinc-700 mb-1 dark:text-white ` + className}>
            {value ? value : children}
        </label>
    );
}
