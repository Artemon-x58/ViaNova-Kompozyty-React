import { useParams } from "react-router-dom";
import { vatsInfoArr } from "../../data/data";

export const DefiniteVat = () => {
  const { id } = useParams();

  const vat = vatsInfoArr.find((item) => item.id === id);
  console.log(vat);

  return;
};
