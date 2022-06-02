import { useContext } from 'react';
import { UserContext } from '../../lib/UserContext';
import EmailForm from '../../components/UI/Signin';
import { magic } from '../../lib/magic';
import Admin from '../../components/UI/Admin';

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    async function handleLoginWithEmail(email) {
        try {
            //setDisabled(true); // disable login button to prevent multiple emails from being triggered

            // Trigger Magic link to be sent to user
            let didToken = await magic.auth.loginWithMagicLink({
                email,
                redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
            });

            // Validate didToken with server
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + didToken,
                },
            });

            if (res.status === 200) {
                // Set the UserContext to the now logged in user
                let userMetadata = await magic.user.getMetadata();
                await setUser(userMetadata);
                //Router.push('/profile');
            }
        } catch (error) {
            //setDisabled(false); // re-enable login button - user may have requested to edit their email
            console.log(error);
        }
    }

    return (
        <>{user?.loading ? "Loading..." : user?.issuer ? <Admin/> : <EmailForm onEmailSubmit={handleLoginWithEmail} />}</>
    )

}

export default Login;