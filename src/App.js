import { useEffect, useState } from "react";
// import styles from "./App.module.css";
import Button from "./button/Button";

function App() {
  const [counter, setCounter] = useState(0);
  const onClickPlus = () => setCounter(counter + 1);
  const onClickMinus = () => setCounter(counter - 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("change counter", counter);
  }, [counter]);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log("search for", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search"
      />
      <h1>{counter}</h1>
      <Button plusClick={onClickPlus} minusClick={onClickMinus} />
    </div>
  );
}
//hello

export default App;
