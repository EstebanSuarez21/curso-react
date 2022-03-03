import React, { useEffect, useState } from 'react'

function useScreenSize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(window.addEventListener("resize", handleResize))

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    
        return width
}

export default useScreenSize