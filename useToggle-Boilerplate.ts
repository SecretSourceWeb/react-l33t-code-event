import * as React from "react";
 
export function useToggle(initial: boolean): [boolean, () => void] {
  // your code here
}
 
export function App() { 
  const on = false; // update me!

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: on ? "#fffbea" : "#0f172a",
        transition: "background 200ms ease"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          aria-hidden
          style={{
            width: 140,
            height: 140,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: on
              ? "radial-gradient(circle at 50% 40%, #ffe066, #ffec99 60%, #fffbea 75%)"
              : "#1f2937",
            boxShadow: on
              ? "0 0 40px 12px rgba(255,224,102,.45)"
              : "inset 0 0 0 2px #334155",
            transition: "all 200ms ease"
          }}
        />
        <button
          role="switch"
          aria-checked={on} 
          onClick={() => {}} // update me! 
          onKeyDown={() => {}} // update me!
          style={{
            fontSize: 18,
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: on ? "#fff3bf" : "#111827",
            color: on ? "#111827" : "#e5e7eb",
            cursor: "pointer"
          }}
          title="Click, Space, or Enter to toggle"
        >
          {on ? "💡 Light: ON" : "🌑 Light: OFF"}
        </button>
      </div>
    </div>
  );
}
 
