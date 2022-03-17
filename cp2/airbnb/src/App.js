import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dataBase from "./components/data"
import "./style.css"

export default function App() {
    
    // Her bir liste itemi için tek tek işlem yapıyor (ForEach)
    const cards = dataBase.map(db => {
        return <Card
            key={db.id}
            db={db}
            // {...db} // without using db keyword to card.js
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-section">
                {cards}
            </div>
        </div>
    )
}