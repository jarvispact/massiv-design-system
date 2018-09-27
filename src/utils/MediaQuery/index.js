import { Component } from 'react';
import { string, func, node } from 'prop-types';

const propTypes = {
    query: string.isRequired,
    render: func,
    children: node,
};

const defaultProps = {
    render: undefined,
    children: undefined,
};

class MediaQuery extends Component {
    state = {
        mediaQueryRef: null,
        matches: false,
    };

    componentDidMount() {
        const { query } = this.props;
        const { mediaQueryRef } = this.state;
        if (!mediaQueryRef) {
            const qryRef = window.matchMedia(query);
            qryRef.addListener(this.listenerFunction);
            this.listenerFunction(qryRef);
            this.setState({ mediaQueryRef: qryRef });
        }
    }

    componentWillUnmount() {
        const { mediaQueryRef } = this.state;
        if (mediaQueryRef) mediaQueryRef.removeListener(this.listenerFunction);
    }

    listenerFunction = ({ matches }) => {
        this.setState({ matches });
    }

    render() {
        const { render, children } = this.props;
        const { matches } = this.state;
        return render ? render(matches) : children(matches);
    }
}

MediaQuery.propTypes = propTypes;
MediaQuery.defaultProps = defaultProps;

export default MediaQuery;
