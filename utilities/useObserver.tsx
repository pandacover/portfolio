import React, { useEffect, useState, useCallback, createContext } from 'react'

interface ContextInterface {
    scrollY: number
}

export const ScrollContext = createContext<ContextInterface>({ scrollY: 0 })

interface Props {
    children: React.ReactNode
}

const ScrollObserver: React.FC<Props> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0)
    const observe = useCallback(() => {
        setScrollY(window.scrollY)
    }, [scrollY])

    useEffect(() => {
        document.addEventListener('scroll', observe, { passive: true })
        return () => document.removeEventListener('scroll', observe)
    }, [])

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            { children }
        </ScrollContext.Provider>
    )
}

export default ScrollObserver
