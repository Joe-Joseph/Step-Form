import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Send Data to API
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>{`Thank you ${firstName} for your submission`}</h1>
                    <p>Your will get an email with further instruction</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
