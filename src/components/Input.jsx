export default function Input({ type = 'text', ...props }) {
    return (
        <input
            {...props}
            className={
                'border-slate-300 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 transition duration-300 px-4 py-2'
            }
        />
    );
}
