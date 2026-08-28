import { useEffect, useRef, useState } from "react";
import "./Typer.css";

function Typer({ text, repeat = true, onComplete = () => {} }) {
    const [positions, setPositions] = useState([]);
    const [count, setCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const spansRef = useRef([]);        // Referencias a los span de las letras
    const barRef = useRef(false);       // Referencia a la barra
    const medidoRef = useRef(false);    // Bandera para evitar que se ejecute la lógica de medición más de una vez

    // Mide y guarda la posición final de cada letra
    useEffect(() => {
        if (medidoRef.current) return;

        const spanPositions = spansRef.current.map((span) => {
            return {
                left: span.offsetLeft + span.offsetWidth,
                top: span.offsetTop
            };
        });

        setPositions(spanPositions);
        medidoRef.current = true;
    }, []);

    // Intervalo para gestionar la escritura, el borrado y la finalización
    useEffect(() => {
        const speed = isDeleting ? 75 : 150;

        const timer = setInterval(() => {
            setCount((prev) => {
                // Modo Escritura
                if (!isDeleting) {
                    if (prev <= text.length) return prev + 1;

                    // Fin de escritura
                    if (!repeat) {
                        clearInterval(timer);
                        return prev;
                    }

                    setIsDeleting(true);
                    return prev;
                }

                // Modo Borrado
                if (prev > 0) return prev - 1;

                // Fin de borrado
                setIsDeleting(false);
                return 0;
            });
        }, speed);

        return () => clearInterval(timer);
    }, [text.length, isDeleting, repeat]);

    // Efecto aislado para notificar la finalización cuando el borrado llega a 0
    useEffect(() => {
        if (isDeleting && count === 0) {
            onComplete();
        }
    }, [count, isDeleting, onComplete]);

    // Mueve el cursor a la posición de la letra activa
    useEffect(() => {
        if (!barRef.current) return;

        if (count === 0) {
            barRef.current.style.left = "0px";
        } else if (positions[count - 1] !== undefined) {
            barRef.current.style.left = `${positions[count - 1].left}px`;
            barRef.current.style.top = `${positions[count - 1].top}px`;
        }
    }, [count, positions]);

    return (
        <div 
            className={count < text.length ? 'typing': ''}
            style={{ position: "relative" }}
        >
            {Array.from(text).map((char, index) => (
                <span 
                    key={index}
                    ref={(el) => (spansRef.current[index] = el)}
                    style={{
                        visibility: index < count ? "visible" : "hidden",
                    }}
                >
                    {char === '\n' ? <br/> : char}
                </span>
            ))}
            <span ref={barRef} className="cursorBar">|</span>
        </div>
    );
}

function MultiTyper({ texts, repeat = true }) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Avanza al siguiente texto al finalizar el activo
    const handleComplete = () => {
        setActiveIndex((prev) => {
            if (prev >= texts.length - 1) {
                return repeat ? 0 : prev;
            }
            return prev + 1;
        });
    };

    return (
        <>
            {texts[activeIndex] && (
                <Typer
                    key={activeIndex}
                    repeat={repeat || activeIndex < texts.length - 1}
                    text={texts[activeIndex]}
                    onComplete={handleComplete}
                />
            )}
        </>
    );
}

export { Typer, MultiTyper };