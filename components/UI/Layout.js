import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'
import { UserContext } from '../../lib/UserContext';
import { useState, useEffect } from 'react';
import { magic } from '../../lib/magic';

const Layout = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser({ loading: true });
        magic.user.isLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                console.log("logged in")
                magic.user.getMetadata().then((userData) => setUser(userData));
            } else {
                //Router.push('/login');
                setUser({ user: null });
                console.log("logged out")
            }
        });
    }, []);

    return (
        <>
            <UserContext.Provider value={[user, setUser]}>
                <Head>
                    <title>Cameraah</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <div style={{width:"100%",marginTop:"4px"}}>{children}</div>
                <Footer />
            </UserContext.Provider>
        </>
    )
}
export default Layout;