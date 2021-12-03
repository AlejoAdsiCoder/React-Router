import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CategoriesPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get("skip")) || 0
    const limit = parseInt(query.get("limit")) || 15
    console.log(location.search)

    const handleNext = () => {
        console.log("Next")
        query.set("skip", skip + limit)
        // query.set("limit", 200)
        navigate({pathname: "/contact", search:"?sabor=chocolate&color=blanco"})
    }

    return (
        <div>
            <h1>categoriesPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>
        

        <button onClick={handleNext}>
            Next
        </button>
        </div>
    )
}