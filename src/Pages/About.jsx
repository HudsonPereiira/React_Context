import ChangeCounter from "../Components/ChangeCounter";
// import { useContext } from "react";
// import { CounterContext } from "../Context/CounterContext";
import { useCounterContext } from "../Hooks/useCounterContext";
import { useTitleColorContext } from "../Hooks/useTitleColorContext";
 

const About = () => {
  // const {counter} = useContext(CounterContext)

  const { counter } = useCounterContext();
  const { color, dispatch} = useTitleColorContext();
  const setTitleColor = (color) => {
    dispatch({type:color})
  }
  return (
    <div>
      <p style = {{color:color}}>Sobre</p>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default About;
