import Login from './Login';
import { withAuth } from '@okta/okta-react';

export default withAuth(Login);