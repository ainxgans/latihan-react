import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandTwitter } from '@tabler/icons-react';
export default function App() {
    return (
        <div
            className={
                'bg-slate-900 grid place-content-center min-h-screen text-white'
            }
        >
            <div className='flex gap-x-2'>
                <Button>
                    <IconBrandFacebook className='w-5 h-5 my-auto stroke-1' />
                    Facebook
                </Button>
                <Button>
                    <IconBrandTwitter className='w-5 h-5 my-auto stroke-1' />
                    Login
                </Button>
            </div>
        </div>
    );
}
function Button(props) {
    return (
        <button
            className={'flex gap-x-2 item-center bg-blue-600 px-4 py-2 rounded'}
        >
            {props.text || props.children}
        </button>
    );
}
