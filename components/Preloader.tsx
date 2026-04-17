"use client"

import { useEffect, useState, useRef } from "react"

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [textOpacity, setTextOpacity] = useState(1)
  const loaderRef = useRef<HTMLDivElement>(null)

  // Multilingual greetings
  const greetings = [
    "Hola",
    "Bonjour",
    "你好",
    "Salut",
    "Namaste",
    "مرحبا",
    "Ciao",
    "Olá",
  ]

  // ═══════════════════════════════════════════════════════════════════
  // MAIN ANIMATION SEQUENCE
  // ═══════════════════════════════════════════════════════════════════
  useEffect(() => {
    const hello = "Hello"
    const timeouts: NodeJS.Timeout[] = []
    
    // PHASE 1: Show "Hello" letter by letter
    let currentText = ""
    hello.split("").forEach((letter, index) => {
      const id = setTimeout(() => {
        currentText += letter
        setDisplayText(currentText)
      }, index * 120)
      timeouts.push(id)
    })

    // PHASE 2: Keep "Hello" visible for 600ms, then show greetings
    const helloCompleteId = setTimeout(() => {
      let greetingIndex = 0

      const showGreeting = () => {
        const greeting = greetings[greetingIndex]
        const isLastGreeting = greetingIndex === greetings.length - 1

        // Fade out
        setTextOpacity(0)

        // Show new greeting
        const showId = setTimeout(() => {
          setDisplayText(greeting)
          setTextOpacity(1)
        }, 100)
        timeouts.push(showId)

        if (isLastGreeting) {
          // Fade out after last greeting
          const fadeOutId = setTimeout(() => {
            if (loaderRef.current) {
              loaderRef.current.style.opacity = "0"
              loaderRef.current.style.transition = "opacity 0.6s ease"

              const removeId = setTimeout(() => {
                setIsVisible(false)
              }, 300)
              timeouts.push(removeId)
            }
          }, 300) // Display last greeting for 300ms
          timeouts.push(fadeOutId)
        } else {
          // Show next greeting
          const nextId = setTimeout(() => {
            greetingIndex = greetingIndex + 1
            showGreeting()
          }, 300) // Display each greeting for 300ms
          timeouts.push(nextId)
        }
      }

      showGreeting()
    }, hello.length * 100 + 600) // After all letters + 600ms pause

    timeouts.push(helloCompleteId)

    return () => {
      timeouts.forEach(id => clearTimeout(id))
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style>{`
        body {
          overflow: hidden;
        }

        .preloader-text {
          animation: fadeInSmooth 0.3s ease-out forwards;
          will-change: opacity;
        }

        @keyframes fadeInSmooth {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div
        ref={loaderRef}
        id="custom-preloader"
        role="status"
        aria-live="polite"
        aria-label="Loading"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="text-center select-none">
          <span
            className="preloader-text text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide text-white block"
            style={{
              opacity: textOpacity,
              transition: "opacity 0.4s ease",
            }}
          >
            {displayText}
          </span>
        </div>
      </div>
    </>
  )
}
