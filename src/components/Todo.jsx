import Card from './Card.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import React, { useState } from 'react';
export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    function handleAddTask(e) {
        e.preventDefault();
        console.log('sasa');
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ]);
    }
    return (
        <div>
            <Card>
                <Card.Title>Todo</Card.Title>
                <Card.Body>
                    <form>
                        <div className='flex items-center gap-x-2'>
                            <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                            <Button text={'Tambah'} type={'submit'} onClick={handleAddTask} />
                        </div>
                    </form>
                    {tasks.length > 0 ? (
                        <ol className='space-y-2'>
                            {tasks.map((task) => (
                                <li key={task.id}>{task}</li>
                            ))}
                        </ol>
                    ) : null}
                </Card.Body>
                <Card.Footer>You have {tasks.length} tasks</Card.Footer>
            </Card>
        </div>
    );
}
