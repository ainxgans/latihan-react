export default function PlaceContentCenter({ children }) {
    return (
        <div className={'bg-black'}>
            <div className={'bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-tight'}>
                <div className={'w-full max-w-lg'}>{children}</div>
            </div>
        </div>
    );
}
