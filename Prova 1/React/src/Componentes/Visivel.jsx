import {useEffect, useState } from "react";

function Visivel(){
    const [isTyping, setTyping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping ) {
                setTyping(false);
            }
            });
            return () => clearInterval(interval);

        }, [isTyping, lastTyped]);
    
        const handleChange = (e) => {
            setText(e.target.value);
            setTyping(true);
            setLastTyped(Date.now());
        };

    return (
        <>
        {!isTyping && <h1>Oiii</h1>}
        {isTyping && <h1></h1>}
        <button onClick={handleChange}>
            Visivel
        </button>
        </>
    );
}
export default Visivel