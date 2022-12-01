import { Image, Flex } from '@chakra-ui/react';
import background from '../../images/background.png';

function GameArea() {
    return (
        <>
        <Flex align='center' justify='center' >
            <Image
            rounded='3xl'
            boxShadow='dark-lg'
            mt={105}
            htmlHeight='60%'
            htmlWidth='90%'
            objectFit='scale-down'
            src={background}
            alt='Dan Abramov'
            >
            </Image>
        </Flex>
        </>
    );
}

export default GameArea;