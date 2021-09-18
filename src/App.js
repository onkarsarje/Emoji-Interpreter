import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "✌️": "Victory Hand",
  "🎉": "Party Popper",
  "😎": "Smiling Face with Sunglasses",
  "🌺": "Hibiscus",
  "❤️": "Love",
  "😑": "Annoyance",
  "😇": "Smiling Face with Halo"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this is in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}

      <div className="footer">
        <h1>
          This is an app used to learn the meaning of the emojis displayed.{" "}
        </h1>
      </div>
    </div>
  );
}
