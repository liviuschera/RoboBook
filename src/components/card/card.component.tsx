import "./card.styles.css";
import { Robot } from "../../App";
type CardProps = {
  robot: Robot;
};

const Card = ({ robot }: CardProps) => {
  const { first_name, last_name, avatar, uid } = robot;
  const {
    employment: { title, key_skill },
    address: { city, state },
  } = robot;
  return (
    <div className="card-container" key={uid}>
      <img
        src={avatar.replace("set1", "set3")}
        alt={`Robot head of ${first_name}`}
      />
      <h3>
        {first_name} {last_name}{" "}
      </h3>
      <p>
        <span className="text-bold">Job: </span> {title}
      </p>
      <p>
        <span className="text-bold">Key skill: </span> {key_skill}
      </p>
      <p>
        <span className="text-bold">Whereabouts: </span> {city}, {state}
      </p>
    </div>
  );
};

export default Card;
