import React, { PropTypes, Component } from 'react';

export default class Content extends Component {
    static defaultProps = {
        type: 'user',
        name: '',
        surname: '',
        replies: 0,
        commentTitle: '',
        commentText: ''
    };

    renderUser() {
        if (this.props.type === 'user') {
            return (
                <div>
                    <span>{this.props.name}</span>
                    <span>{this.props.surname}</span>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderUser()}
            </div>
        )
    }
}

Content.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    surname: PropTypes.string,
    replies: PropTypes.number,
    commentTitle: PropTypes.string,
    commentText: PropTypes.string
};