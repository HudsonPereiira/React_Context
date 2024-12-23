// import { useContext } from "react"; Importando na unha
// import { CounterContext } from "../Context/CounterContext"; importando na unha
import ChangeCounter from "../Components/ChangeCounter";

// importando com hook
import { useCounterContext } from "../Hooks/useCounterContext";
import { useTitleColorContext } from "../Hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext); utilizando o que foi inmportado na unha

  const { counter } = useCounterContext();
  const { color, dispatch} = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({type:color})
  }

  return (
    <div>
      <p style={{ color: color }}>Home</p>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
