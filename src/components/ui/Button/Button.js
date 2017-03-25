import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import './Button.scss';

class Button extends Component {
    static propTypes = {
        href: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { href, className } = this.props;
        const cssclasses = classNames('Button', className);

        return href ? <a {...this.props} className={cssclasses} /> : <button {...this.props} className={cssclasses} />;
    }
}

export default Button;