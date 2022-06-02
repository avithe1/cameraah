import { useRouter } from 'next/router';
import CameraahHeader from './CameraahHeader';
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    return (
        router.pathname === "/" ? null : 
        router.pathname === "/weather" ?
            <Link href="/">
                <a>Home</a>
            </Link> : 
            <CameraahHeader />
    )
}

export default Header;
