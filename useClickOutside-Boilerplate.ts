import React, { useRef, useState } from "react";
 
function useClickOutside(ref: React.RefObject<HTMLElement>, onClickOutside: () => void) {
  // your code here
}

const SLEPPY_CAT = "🐱"
const HAPPY_CAT = "😻"
const ANGRY_CAT = "😾"

export  function App() {
  const [mood, setMood] = useState(SLEPPY_CAT);
  const catRef = useRef<HTMLDivElement>(null);

  useClickOutside(catRef, () => {
    // If user clicks outside → cat gets angry
  });

  const handleCatClick = () => {
    setMood(HAPPY_CAT);
    resetMood();
  };

  const resetMood = () => {
    setTimeout(() => setMood(SLEPPY_CAT), 2000);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}> 
      <div
        ref={catRef} 
        onClick={handleCatClick}
        style={{
          display: "inline-block",
          padding: "40px",
          border: "3px solid gray",
          borderRadius: "20px",
          background: "#eee",
          fontSize: "60px",
        }}
      >
        {mood}
      </div>
    </div>
  );
}
