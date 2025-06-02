import React from "react";

export default function Card() {
    return (
        <div style={{
            maxWidth: 320,
            margin: "2rem auto",
            padding: "1.5rem",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            background: "#fff",
            textAlign: "center"
        }}>
            <h2 style={{ marginBottom: "1rem" }}>Bienvenido</h2>
            <p style={{ color: "#555" }}>
                Inicia sesión para continuar con el diagnóstico vehicular.
            </p>
        </div>
    );
}