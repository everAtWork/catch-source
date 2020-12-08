import React from 'react';
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    myInput = React.createRef();


    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };


    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Name</h2>

                <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()} />

                <button type="submit">Lessgo!</button>
            </form>
        )
    }
}
export default StorePicker;