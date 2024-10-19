export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-zinc-300 text-indigo-600 shadow-sm focus:ring-indigo-500 w-5 h-5' +
                className
            }
        />
    );
}