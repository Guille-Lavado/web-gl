import { useEffect, useRef, useState } from "react";
import "./Typer.css";

function Typer({text, repeat = true, onComplete = () => {}}) {
    const [positions, setPositions] = useState([]);
    const [count, setCount] = useState(0);
    
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

    // Intervalo simple para avanzar el contador de letras
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 250);

        return () => clearInterval(timer);
    }, []);

    // Notifica al padre en un efecto separado cuando se completa
    useEffect(() => {
        if (count >= text.length) {
            repeat ? setCount(0) : onComplete();
        }
    }, [count, text.length, repeat, onComplete]);

    // Mueve el cursor a la posición de la letra activa
    useEffect(() => {
        if (!barRef.current) return;

        if (count === 0) {
            barRef.current.style.left = "0px";
        } else if (positions[count - 1] !== undefined) {
            barRef.current.style.left = `${positions[count - 1].left}px`;
            barRef.current.style.top = `${positions[count - 1].top + 2}px`;
        }
    }, [count, positions]);

    return (
        <h2 
            className={count < text.length ? 'typing': ''}
            style={{ position: "relative" }}
        >
            <div ref={barRef} className="cursorBar"></div>
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
        </h2>
    );
}

function MultiTyper({ texts, repeat = true }) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Avanza al siguiente texto al finalizar el activo
    const handleComplete = () => {
        setActiveIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= texts.length) {
                return repeat ? 0 : prev;
            }
            return nextIndex;
        });
    };

    return (
        <>
            {texts[activeIndex] && (
                <Typer
                    key={activeIndex}
                    repeat={false}
                    text={texts[activeIndex]}
                    onComplete={handleComplete}
                />
            )}
        </>
    );
}

export { Typer, MultiTyper };