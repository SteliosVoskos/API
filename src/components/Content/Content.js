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
        const styles = {
            padding: '16px',
            margin: '8px',
            border: '1px solid #EAE9E9',
            borderRadius: '8px',
            width: '30%',
            height: 'auto',
            backgroundColor: '#EFF9FF',
            fontWeight: '300',
            fontFamily: 'Helvetica',
            fontSize: '16px'
        }
        if (this.props.type === 'user') {
            return (
                <div style={styles}>
                    <span>{this.props.name}</span>
                    <span>{this.props.surname}</span>
                </div>
            );
        }

        return null;
    }

    renderComments() {
        const styles = {
            container: {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                border: '1px solid #EAE9E9',
                padding: '16px',
                width: '25%',
                fontFamily: 'Helvetica',
                height: 'auto',
                personalDetails: {
                    fontWeight: '500',
                    fontSize: '16px'
                },
                postContent: {
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '300',
                    margin: '8px'
                }
            }
        };
        if (this.props.type === 'post') {
            return (
                <div style={styles.container}>
                    <span style={styles.container.personalDetails}>Stelios Voskos</span>
                    <span style={styles.container.postContent}>Hello world</span>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderUser()}
                {this.renderComments()}
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