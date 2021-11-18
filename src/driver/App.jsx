import { useState } from "react";

const fruits = [
  { id: "apple", value: "Äpple", icon: "🍏" },
  { id: "banana", value: "Banan", icon: "🍌" },
  { id: "tomato", value: "Tomat", icon: "🍅" },
  { id: "strawberry", value: "Jordgubbe", icon: "🍓" },
];

const App = () => {
  const [basket, setFruits] = useState(fruits);
  const usePrimaryKey = window.location.search === "?withKey";

  const addFruit = () => {
    console.log(fruits.filter((fruit) => !basket.includes(fruit)));
    setFruits([...basket, ...fruits.filter((fruit) => !basket.includes(fruit))]);
  };

  const removeFruit = (id) => {
    setFruits(basket.filter((fruit) => fruit.id !== id));
  };

  return (
    <div>
      <ul>
        {basket.map(({ id, value, icon }, index) => (
          <li
            key={usePrimaryKey ? id : index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <div style={{ width: "85px" }}>{usePrimaryKey ? id : index}</div>
            <div style={{ width: "30px" }}>{icon}</div>
            <input defaultValue={value} />
            <button style={{ marginLeft: "0.5rem" }} onClick={() => removeFruit(id)}>
              Eat
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginLeft: "40px" }}>
        <button disabled={basket.length >= fruits.length} onClick={addFruit}>
          Fill with {fruits.map((fruit) => fruit.icon).join(" ")}
        </button>

        <div style={{ marginTop: "1rem" }}>
          <a href={usePrimaryKey ? "/" : "/?withKey"}>
            {usePrimaryKey ? "without key (using index)" : "with key (using id)"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
