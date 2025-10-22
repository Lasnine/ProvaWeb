import { useEffect, useState } from "react";

export default function Inatividade() {
    const [text, setText] = useState("");
    const [isTyping, setTyping] = useState(false);
    const [lastTyped, setLastTyped] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
        if (isTyping && Date.now() - lastTyped > 2000) {
            setTyping(false);
        }
        }, 500);

        return () => clearInterval(interval);
    }, [isTyping, lastTyped]);

    const handleChange = (e) => {
        setText(e.target.value);
        setTyping(true);
        setLastTyped(Date.now());
    };

    return (
        <>
        {!isTyping && <h1>DIGITE ALGO</h1>}
        {isTyping && <h1>{text}</h1>}

        <input
            id="input"
            type="text"
            onChange={handleChange}
        />
        </>
    );
}
