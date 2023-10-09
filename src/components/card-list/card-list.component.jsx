import { Component } from "react";

class CardList extends Component {

    render() {
        const { users } = this.props;

        return (
            <div >
                {users.map(user =>
                (<h1 key={user.uid}>
                    {user.first_name} {user.last_name}
                </h1>)
                )}
            </div>);
    }
}

export default CardList;
