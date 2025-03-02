import { useParams } from "react-router-dom";
import { inserts } from "../../data/data";
import { PagesTitleAndSubtitle } from "../PagesTitleAndSubtitle/PagesTitleAndSubtitle";

export const Insert = () => {
  const { id } = useParams();

  const insert = inserts.find((item) => item.id === id);

  return (
    <>
      <PagesTitleAndSubtitle title={insert.name} subtitle={""} />
    </>
  );
};
