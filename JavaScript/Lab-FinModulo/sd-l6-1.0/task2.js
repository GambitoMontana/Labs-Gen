// Task 2: listUsers()

import { json } from "express";

// import { getServerURL } from "./task1.js";

export async function listUsers() {
    const PROMESA = await fetch(`http://localhost:3000/users`);
    const RESPUESTA_CORRECTA = await PROMESA.json();
    console.log(RESPUESTA_CORRECTA);
}
