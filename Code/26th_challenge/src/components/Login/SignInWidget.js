import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

import { Wrapper } from './styles';

import logo from 'assets/logo.png';

// This is a simple widget created by octa
// We can customize it using our own css
class SignInWidget extends Component {

	componentDidMount() {
		const el = ReactDOM.findDOMNode(this);
		this.widget = new OktaSignIn({
			baseUrl: this.props.baseUrl,
			logo: logo,
		});
		this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
	}

	componentWillUnmount() {
		this.widget.remove();
	}

	render() {
		return <Wrapper />
	}
}

export default SignInWidget;