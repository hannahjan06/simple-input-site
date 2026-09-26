import { useState } from "react";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setEntries((prev) => [...prev, trimmed]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "#f5f5f5",
      color: "#1a1a1a",
    },
    card: {
      width: "100%",
      maxWidth: "480px",
      background: "#ffffff",
      borderRadius: "12px",
      padding: "32px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "16px",
      textAlign: "center",
    },
    inputRow: {
      display: "flex",
      gap: "8px",
      marginBottom: "24px",
    },
    input: {
      flex: 1,
      padding: "10px 12px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#ffffff",
      background: "#2563eb",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: "10px 12px",
      marginBottom: "8px",
      background: "#f0f4ff",
      borderRadius: "8px",
      fontSize: "1rem",
      wordBreak: "break-word",
    },
    empty: {
      textAlign: "center",
      color: "#888",
      fontSize: "0.95rem",
    },
  };

  return (
    <main style={styles.page}>
      <section style={styles.card} aria-label="Text entry form">
        <h1 style={styles.heading}>Text Collector</h1>
        <div style={styles.inputRow}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type something..."
            aria-label="Text to store"
            style={styles.input}
          />
          <button
            onClick={handleAdd}
            aria-label="Add text entry"
            style={styles.button}
          >
            Add
          </button>
        </div>
        {entries.length === 0 ? (
          <p style={styles.empty}>No entries yet.</p>
        ) : (
          <ul style={styles.list} aria-label="Stored entries">
            {entries.map((entry, index) => (
              <li key={index} style={styles.listItem}>
                {entry}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
