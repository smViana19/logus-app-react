export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-yellow-600 ' + className}>
            {message}
        </p>
    ) : null;
}
