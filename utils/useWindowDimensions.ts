import React, { useState, useEffect } from 'react';

export function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : "0px";
        const height = hasWindow ? window.innerHeight : "0px";
        return {
            width,
            height,
        };
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }
    useEffect(() => {
        if (hasWindow) {


            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);
    console.log(windowDimensions)
    return windowDimensions;
}