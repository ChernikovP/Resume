'use strict';

import React, { PropTypes } from 'react';

import throttle from '../../utils/throttle';
import coordinates from '../../utils/coordinates';

import '../../styles/parallax.less';

class Parallax extends React.Component {
    static throttleFrequency = 10;

    constructor(props) {
        super(props);

        this.onScroll = throttle(this.onScroll, Parallax.throttleFrequency).bind(this);
    }

    onScroll() {
        const scrolledHeight = window.pageYOffset;

        const offsetTop = coordinates(this.background).top;
        const offsetBottom = offsetTop + this.background.offsetHeight;

        if(scrolledHeight >= offsetTop && scrolledHeight <= offsetBottom) {
            this.background.style.backgroundPositionY = `${(scrolledHeight - offsetTop) / this.props.speed}px`;
        }
        else { this.background.style.backgroundPositionY = '0'; }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    render() {
        const {fullHeight, backgroundStyle} = this.props;

        const classNames = fullHeight ? `${backgroundStyle} parallax__background_full-height` : `${backgroundStyle}`;

        return (
            <div className="parallax">
                <div className={classNames} ref={(e) => this.background = e}></div>
                <div className="parallax__content">{this.props.children}</div>
            </div>
        );
    }
}

Parallax.propTypes = {
    backgroundStyle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    fullHeight: PropTypes.bool,
    speed: PropTypes.number
};

Parallax.defaultProps = {
    fullHeight: false,
    speed: 2
};

export default Parallax;