import { useState } from "react";

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [storedValues, setStoredValues] = useState<string[]>([]);

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setStoredValues((prev) => [...prev, trimmed]);
    setInputValue("");
  };

  return (
    <main style={styles.main}>
      <h1 style={styles.heading}>Value Collector</h1>
      <section style={styles.formSection} aria-label="Add a value">
        <label htmlFor="value-input" style={styles.label}>
          Enter a value
        </label>
        <div style={styles.inputRow}>
          <input
            id="value-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
            }}
            placeholder="Type something..."
            style={styles.input}
            aria-label="Text input for a new value"
          />
          <button
            type="button"
            onClick={handleAdd}
            style={styles.button}
            aria-label="Add value to list"
          >
            Add
          </button>
        </div>
      </section>
      <section aria-label="Stored values" style={styles.listSection}>
        <h2 style={styles.listHeading}>
          Stored values ({storedValues.length})
        </h2>
        {storedValues.length === 0 ? (
          <p style={styles.emptyMessage}>No values stored yet.</p>
        ) : (
          <ul style={styles.list}>
            {storedValues.map((value, index) => (
              <li key={`${value}-${index}`} style={styles.listItem}>
                {value}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 600,
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: "system-ui, -apple-system, sans-serif",
    color: "#1a1a1a",
  },
  heading: {
    fontSize: "1.75rem",
    marginBottom: "1.5rem",
  },
  formSection: {
    marginBottom: "2rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: 600,
  },
  inputRow: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 200px",
    padding: "0.6rem 0.75rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: 4,
    outline: "none",
  },
  button: {
    padding: "0.6rem 1.25rem",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "#2563eb",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  listSection: {},
  listHeading: {
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
  },
  emptyMessage: {
    color: "#666",
    fontStyle: "italic",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.5rem 0.75rem",
    marginBottom: "0.25rem",
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    wordBreak: "break-word",
  },
};
