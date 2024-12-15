import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({ title }) {
     return (
        <h1>{title ? title : "Default title"}</h1>
    );
}

function Button() {
    const [likes, setLikes] = useState(0);
    function handleClick() {
        setLikes(likes + 1);
        console.log("increment like count");
    }
    return (
        <button onClick={handleClick}>Like({likes})</button>
    );
}

function Homepage() {
    const names = ['Kerik Poloparaziticky', 'Hat Stihaci', 'Kocicka Nozicka'];

    return (
        <div>
            <Header title="Like contest" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}<Button /></li>
                ))}
            </ul>
        </div>
    );
}
