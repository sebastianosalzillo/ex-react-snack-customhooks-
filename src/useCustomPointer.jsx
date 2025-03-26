import { useEffect, useState } from "react"

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", update)
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", update)
      document.body.style.cursor = "auto"
    }
  }, [])

  const pointerStyle = {
    position: "fixed",
    left: position.x,
    top: position.y,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    fontSize: "24px"
  }

  return <div style={pointerStyle}>{content}</div>
}

export default useCustomPointer
