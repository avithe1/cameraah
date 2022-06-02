import Image from "next/image";
import classes from './CameraahHeader.module.css';
import Link from "next/link";
import { useContext } from 'react';
import { UserContext } from '../../lib/UserContext';
import { magic } from "../../lib/magic";

const CameraahHeader = () => {
    const [user, setUser] = useContext(UserContext);


    const logout =  async () => {
        try {
            await magic.user.logout();
            console.log(await magic.user.isLoggedIn()); // => `false`
            setUser({ user: null });
        } catch {
            // Handle errors if required!
        }
    }


    return (
        <div className={classes.headercontainer}>
            <div className={classes.containerleft}>
                <div className={classes.headerimage} >
                    <Image src="https://assets.website-files.com/6049feb0a862ecb2aaeba05e/612c9b5885836264ee781a91_cameraah%20logo.png"
                        height="40px"
                        width="154px" />
                </div>
                <div className={classes.navlinks}>
                    <div className={classes.navtext}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className={classes.navtext}>I'm a Creator</div>
                    <div className={classes.navtext}>Product</div>
                    <div className={classes.navtext}>Our work</div>
                    <div className={classes.navtext}>About Cameraah</div>
                </div>

            </div>
            <div className={classes.containerright}>
                <>{user?.loading ? "Wait..." : user?.issuer ? <button className={classes.signinbutton} onClick={logout}>Log out</button> : null}</>
            </div>
        </div>
    )
}

export default CameraahHeader;