// app/error/[error]/page.jsx

import React from 'react';

const SignInError = ({ params }) => {
    const { error } = params;

    let errorMessage;

    switch (error) {
        case 'OAuthAccountNotLinked':
            errorMessage = 'To confirm your identity, sign in with the same account you used originally.';
            break;
        case 'CredentialsSignin':
            errorMessage = 'Sign in failed. Check the details you provided are correct.';
            break;
        // Add other cases as needed
        default:
            errorMessage = 'An unknown error occurred. Please try again.';
    }

    return (
        <div>
            <h1>Sign In Error</h1>
            <p>{errorMessage}</p>
        </div>
    );
};

export default SignInError;
