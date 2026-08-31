import { useState } from "react";
import emailjs from "@emailjs/browser";
import './Formulario.css';

export function Formulario() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        time: ''
    });

    const [loading, setLoading] = useState(false);
    const [messageState, setMessageState] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessageState(null);

        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(
                () => {
                    setLoading(false);
                    setMessageState({ type: "success", text: "¡Mensaje enviado con éxito!" });
                    setFormData({ name: "", email: "", message: "", time: "" });
                },
                (error) => {
                    setLoading(false);
                    setMessageState({ type: "error", text: "Ocurrió un error al enviar. Inténtalo de nuevo." });
                    console.error("Error EmailJS:", error);
                }
            );
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button type="submit" className="submit-btn">{loading ? "Enviando..." : "Enviar"}</button>

            {messageState && (
                <p 
                    className="submit-messaje"
                    style={{ color: messageState.type === "success" ? "var(--primary-accent)" : "var(--error-msj)" }}>
                    {messageState.text}
                </p>
            )}
        </form>
    );
}