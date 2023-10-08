import { Component } from "react";

class CardList extends Component {

    render() {
        const { user } = this.props;
        return (
            <div key={user.uid}>
                <span>
                    {user.first_name} {user.last_name}
                </span>
            </div>);
    }
}

export default CardList;
