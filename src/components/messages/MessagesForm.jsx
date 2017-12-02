import React from 'react';

export class MessagesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.activeChannel, this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Enter your message'
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}