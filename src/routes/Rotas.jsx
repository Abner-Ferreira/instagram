import React from "react"
import { Routes, Route } from "react-router-dom"
import TelaLogin from "../pages/TelaLogin"
import TelaLoginPT from "../pages/TelaLoginPT"


export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TelaLogin/>} />
                <Route path="/pt" element={<TelaLoginPT/>}/>
            </Routes>
        </>
    )
}