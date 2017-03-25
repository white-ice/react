import React, {Component, PropTypes} from 'react';
import './Suggest.scss';

class Suggest extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string)
    };

    constructor(props) {
        super(props);

        this.state = {value: props.defaultValue};
    };

    getValue() {
        return this.state.value;
    }

    render() {
        const randomid = Math.random().toString(16).substring(2);
        return(
            <div className="Suggest">
                <input
                    list={randomid}
                    defaultValue={this.props.defaultValue}
                    onChange={ event => this.setState({value: event.target.value}) }
                    id={this.props.id}
                />
                <datalist id={randomid}>
                    { this.props.options.map((item, idx) => <option value={item} key={idx} />) }
                </datalist>
            </div>
        );
    }
}

export default Suggest;