import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            // window.scrollTo(0, 0)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);