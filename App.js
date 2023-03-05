import Home from "./src/pages/Home";
import EqualName from "./src/pages/EqualName";
import { useState } from "react";


export default function App() {

  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [equal, setEqual] = useState(false);

  const backPage = () => {
    setEqual(false);

    items.pop();

    setCount(items.length);
  };

  return (
    <>
      {!equal ? (
        <Home
          count={count}
          setCount={setCount}
          items={items}
          setItems={setItems}
          equal={equal}
          setEqual={setEqual}
        />
      ) : (
        <EqualName backPage={backPage} />
      )}
    </>
  );
}
