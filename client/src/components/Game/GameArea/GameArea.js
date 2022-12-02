import { Image, Card, CardBody, Flex, Button } from '@chakra-ui/react';
import background from '../../images/background.png';
import ComputerGreen from '../../images/ComputerGreen.gif'
import ComputerRed from '../../images/ComputerRed.gif'

function GameArea({ onOpen, GameEnd }) {
    return (
        <>
            <Card mt={50} bgColor='none' border='none' align='center' justify='center'>
                <CardBody>
                    <Flex align='center' justify='center' >
                        <Image
                            rounded='3xl'
                            boxShadow='dark-lg'
                            src={background}
                            alt='Space Station'
                        />
                    </Flex>
                </CardBody>
                <Flex justify='center'>
                    <Button _hover='none' bg='none' onClick={onOpen}> <Image src={!GameEnd ? ComputerRed : ComputerGreen} /></Button>
                </Flex>
            </Card>
        </>
    );
}

export default GameArea;