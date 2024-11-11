import Profile from  "./Profile.jsx";
import React from "react";
import "./App.css";

export default function App() {
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <div className="people">
                <main>
                    <p>Hello React!</p>
                    <Profile name="Anita"/>
                    <Profile name="Ben"/>
                    <Profile name="Adwaina"/>
                    <Profile name="Laciesha"/>
                    <Profile name="Wanda"/>
                    <Profile name="Carl"/>
                </main>
            </div>
        </>
    );
}