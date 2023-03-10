export default function Label({ value, children, ...props }) {
    return (
        <label className='block mb-1 text-slate-600' {...props}>
            {value || children}
        </label>
    );
}
