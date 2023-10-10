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
      <p>Job: {title}</p>
      <p>Key skill: {key_skill}</p>
      <p>Location: {city}, {state}</p>
    </div>);
  }
}

export default Card;
