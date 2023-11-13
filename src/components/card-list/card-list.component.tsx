import "./card-list.styles.css";
import Card from "../card/card.component";
import { Robot } from "../../App";

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => (
  <div className="card-list">
    {robots.map((robot) => {
      return <Card robot={robot} />;
    })}
  </div>
);

export default CardList;
