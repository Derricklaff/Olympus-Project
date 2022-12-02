import { Image, Card, CardBody, Flex, Button } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import background from '../../images/background.png';
import ComputerGreen from '../../images/ComputerGreen.gif'
import ComputerRed from '../../images/ComputerRed.gif'

function GameArea({ onOpen, GameEnd }) {
    return (
        <>
            <Card bgColor='none' border='none' align='center' justify='center'>
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
                </CardBody>
                <Flex justify='center'>
                    <button onClick={() => onOpen()} src={ComputerRed}> <Image src={!GameEnd ? ComputerRed : ComputerGreen} /></button>
                </Flex>
            </Card>
        </>
    );
}

export default GameArea;