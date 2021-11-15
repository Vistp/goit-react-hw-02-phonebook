import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.name);
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        
        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    
    render() {
        return (
<form onSubmit={this.handleSubmit}>
            <label>
              Имя<input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            </label>
            <label>
                    Tелефон
              <input
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                />
            </label>
            <button type="submit">Add contact</button>
          </form>
        )
    }
}

export default Form;