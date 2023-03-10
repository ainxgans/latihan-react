import clsx from 'clsx';
export default function Button(props) {
    const { children, text, className = 'bg-blue-600' } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                'text-white [&>svg]:w-5 [&>svg]:h-10 [&>svg]:stroke-1 inline-flex justify-center whitespace-nowrap gap-x-2 item-center px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
