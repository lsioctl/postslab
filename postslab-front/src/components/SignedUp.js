
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './AuthForm';

function SignedUp() {
  
  return (
    <Card>
      Sign up succeeded, you can now proceed to: 
      <Link to="/login">Login</Link>
    </Card>
  );
}

export default SignedUp;