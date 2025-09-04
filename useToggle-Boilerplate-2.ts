import { useState, useEffect } from "react";

export function useToggle(initial: boolean): [boolean, () => void] {
  // your code here
}

function FunnyImage({ isVisible }: { isVisible: boolean }) {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!isVisible) return
    (async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data: { message: string; status: string } = await res.json()
        setSrc(data.message)
      } catch {
        setSrc(null)
      }
    })();
    return () => {}
  }, [isVisible])

  if (!isVisible) return null
  if (!src) return <div>Loading…</div>
  return <img src={src} alt="Random dog" width={300} />
}

export function App() {
  return (
    <div id="app" style={{display: 'flex', flexDirection: 'column', maxWidth: '320px'}}>
      // insert code here that executes the toggle
      // i've included FunnyImage as a component you can use to demonstrate that the toggle is working
    </div>
  )
}
