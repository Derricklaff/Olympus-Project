import { Heading } from '@chakra-ui/react';
import LinkMenu from './LinkMenu/LinkMenu';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <Heading as='h1' size='2xl'>
                        Olympus Project
                    </Heading>
                </Link>
                <div>
                    <LinkMenu />
                </div>
            </div>
        </header>
    )
}

export default Header;