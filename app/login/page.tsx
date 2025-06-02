'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple validation
        if (email === 'admin@example.com' && password === 'password') {
            setError('');
            router.push('/login/polo');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '100px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Correo electrónico
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Contraseña
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                        />
                    </label>
                </div>
                {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
                <button
                    type="submit"
                    style={{ width: '100%', padding: 10 }}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default LoginPage;