import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cameraah</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}
export default Layout;