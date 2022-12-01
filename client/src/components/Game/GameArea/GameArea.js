import { Image, Card, CardBody, Flex, Button } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import background from '../../images/background.png';
import ComputerGreen from '../../images/ComputerGreen.gif'
import ComputerRed from '../../images/ComputerRed.gif'
function GameArea({ onOpen }) {
    return (
        <>
            <Card align='center' justify='center'>
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
                        <Card>
                            <CardBody>
                                <button onClick={() => onOpen()} src={ComputerRed}> <Image src={ComputerRed} /></button>
                            </CardBody>
                        </Card>
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}

export default GameArea;