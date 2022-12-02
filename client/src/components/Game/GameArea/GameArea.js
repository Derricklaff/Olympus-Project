import { Image, Card, CardBody, VStack, IconButton } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import background from '../../images/background.png';

function GameArea({ onOpen }) {
    return (
        <>
            <Card mt={105} bgColor='none' >
                <VStack>
                    <Image
                        rounded='3xl'
                        position='relative'
                        boxShadow='dark-lg'
                        htmlHeight='60%'
                        htmlWidth='90%'
                        objectFit='scale-down'
                        src={background}
                        alt='Dan Abramov'
                    />
                    <Card bgColor='none'>
                        <CardBody>
                            <IconButton colorScheme='blue' aria-label='Open game terminal' icon={<SettingsIcon />} size='lg' onClick={() => onOpen()}/>
                        </CardBody>
                    </Card>
                    </VStack>
            </Card>
        </>
    );
}

export default GameArea;