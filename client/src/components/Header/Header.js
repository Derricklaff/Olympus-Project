import { Heading, HStack, IconButton, Button, useColorMode} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import LinkMenu from './LinkMenu/LinkMenu';
import { Link } from "react-router-dom";

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <header>
            <HStack boxShadow='base' p={7} justify='space-between'>
                <div>
                    <Link to="/">
                        <HStack align='center'>
                            <Heading color='tomato' as='h1' size='2xl'>
                                Olympus
                            </Heading>
                            <Heading as='h1' size='2xl'>
                                Project
                            </Heading>
                        </HStack>
                    </Link>
                </div>
                <div>
                    <HStack align='center'>
                        <Button bgColor='tomato' color={colorMode === 'light' ? 'black' : 'white'} as={IconButton} onClick={toggleColorMode} icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon /> }/>
                        <LinkMenu />
                    </HStack>
                </div>
            </HStack>
        </header>
    )
}

export default Header;