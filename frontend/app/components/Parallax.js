'use strict';

import React, { PropTypes } from 'react';

import '../../styles/parallax.less';

class Parallax extends React.Component {
    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        const scrolledHeight= window.pageYOffset;
        const limit = this.background.offsetTop  + this.background.offsetHeight;

        if(scrolledHeight >= this.background.offsetTop && scrolledHeight <= limit) {
            this.background.style.backgroundPositionY = `${(scrolledHeight - this.background.offsetTop) / 2}px`;
        }
        else { this.background.style.backgroundPositionY = '0' };
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
                <div className="parallax__content">Hi, what's up. dude!</div>
            </div>
        );
    }
}

Parallax.propTypes = {
    fullHeight: PropTypes.bool,
    backgroundStyle: PropTypes.string.isRequired,
    speed: PropTypes.number
};

Parallax.defaultProps = {
    fullHeight: false,
    speed: 2
};

export default Parallax;