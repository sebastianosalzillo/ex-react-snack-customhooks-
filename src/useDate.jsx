import { useState, useEffect } from "react"

function useDate() {
  const [data, setData] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setData(new Date())
    }, 1000)

    
    return () => clearInterval(timer)
  }, [])

  return data
}

export default useDate
