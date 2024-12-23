import { useContext } from "react";
import { TitleColorContext } from "../Context/TitleColorContext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);
  if (!context) {
    console.log("Contesto não encontrado.");
  }
  return context;
};
