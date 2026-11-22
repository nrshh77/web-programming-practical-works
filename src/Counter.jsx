
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Практична робота №8</h1>
      <h2>Робота з useState</h2>

      <div className="counter">
        <h3>Лічильник: {count}</h3>

        <button onClick={() => setCount(count + 1)}>
          +1
        </button>

        <button onClick={() => setCount(Math.max(0, count - 1))}>
          -1
        </button>

        <button onClick={() => setCount(0)}>
          Скинути
        </button>
      </div>

      <div className="text-input">
        <h3>Поле введення</h3>

        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Напишіть щось..."
        />

        <p>Ви ввели: {text}</p>
      </div>
    </div>
  );
}

export default Counter;
