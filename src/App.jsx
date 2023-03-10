import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import { useState } from 'react';
import Todo from './components/Todo';
export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });
    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    return (
        <PlaceContentCenter>
            <Todo />
        </PlaceContentCenter>
    );
}
