import { Component } from "react";
import "./card.styles.css";

class Card extends Component {

  render() {
    const { first_name, last_name, avatar, uid } = this.props.robot;
    const { title, key_skill } = this.props.robot.employment;
    const { city, state } = this.props.robot.address;

    return (<div className="card-container" key={uid}>
      <img src={avatar.replace("set1", "set3")} alt={`Robot head of ${first_name}`} />
      <h3 >{first_name} {last_name} </h3>
      <p><span className="text-bold">Job: </span> {title}</p>
      <p><span className="text-bold">Key skill: </span> {key_skill}</p>
      <p><span className="text-bold">Whereabouts: </span> {city}, {state}</p>
    </div>);
  }
}

export default Card;
