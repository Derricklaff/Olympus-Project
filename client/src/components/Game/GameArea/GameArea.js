import { Image, Card, CardBody, Flex, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import background from '../../images/background.png';

function GameArea({ onOpen }) {
    return (
        <>
            <Card bgColor='none' align='center' justify='center'>
                <CardBody>
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
                    />
                </Flex>
                <Flex align='baseline' justify='center' >
                    <Card bgColor='none'>
                        <CardBody>
                            <IconButton colorScheme='blue' aria-label='Open game terminal' icon={<SettingsIcon />} size='lg' onClick={() => onOpen()}/>
                        </CardBody>
                    </Card>
                </Flex>
                </CardBody>
            </Card>
        </>
    );
}

export default GameArea;