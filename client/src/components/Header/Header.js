import { Heading, HStack, IconButton, Button, useColorMode} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import LinkMenu from './LinkMenu/LinkMenu';
import { Link } from "react-router-dom"; 

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <header>
            <HStack bgColor={colorMode === 'dark' ? 'black' : 'white'} width='100%' wrap='wrap' boxShadow='base' p={7} justify='space-between'>
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
                    <HStack justify='center' align='center'>
                        <Button size='lg' bgColor='tomato' as={IconButton} onClick={toggleColorMode} icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon /> }/>
                        <LinkMenu />
                    </HStack>
                </div>
            </HStack>
        </header>
    )
}

export default Header;