import { Component } from "react";

class CardList extends Component {

    render() {
        const { robots } = this.props;

        return (
            <div className="card-list">
                {robots.map(robot => {
                    const { first_name, last_name, avatar, uid } = robot;
                    const { title, key_skill } = robot.employment;
                    const { city, state } = robot.address;

                    return (<div className="card-container" key={uid}>
                        <img src={avatar.replace("set1", "set3")} alt={`Robot head of ${first_name}`} />
                        <h3 >{first_name} {last_name} </h3>
                        <p>Job: {title}</p>
                        <p>Key skill: {key_skill}</p>
                        <p>Location: {city}, {state}</p>
                    </div>);
                })}
            </div>);
    }
}

export default CardList;
