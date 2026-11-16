import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion() {
    return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(QUERY).matches;
}

export default function useReducedMotion() {
    const [reduced, setReduced] = useState(prefersReducedMotion);

    useEffect(() => {
        if (!window.matchMedia) return;
        const mql = window.matchMedia(QUERY);
        const onChange = () => setReduced(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return reduced;
}
