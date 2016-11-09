import React from "react";
import styles from "./styles.json";
import { color } from "../settings.json";

function Colors() {
  const colors = [];

  Object.keys(color).forEach((name) => {
    if (color[name]) {
      const light = color[name].startsWith("d", 1) ||
        color[name].startsWith("e", 1) ||
        color[name].startsWith("f", 1);

      colors.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: color[name],
              color: !light && "#fff",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "90px",
              }}
            >
              <span style={{ userSelect: "none" }}>{color[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }
  });

  return (
    <div style={styles.main}>
      <h1>Colors</h1>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {colors.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${color.gray}` }}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
