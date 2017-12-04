import React from 'react';
import { LoginForm } from '../../containers-redux/login/LoginForm';
import { Loader } from '../../containers-redux/shared/Loader'
import Link from 'react-router-dom/es/Link'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login page</h1>
            <Loader stateLoadingSelector={state => state.authentication.isAuthenticating}>
                <LoginForm />
            </Loader>
            Don't have an account? <Link to={'/register'}>Register here!</Link>
        </div>
    );
};