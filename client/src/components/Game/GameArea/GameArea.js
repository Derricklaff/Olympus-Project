import { Image, Card, CardBody, Flex, Button, Container } from '@chakra-ui/react';
import ComputerGreen from '../../images/ComputerGreen.gif'
import ComputerRed from '../../images/ComputerRed.gif'

function GameArea({ onOpen, GameEnd }) {
    return (
        <>
            <Container mt={50} bgColor='none' border='none' align='center' justify='center'>
                <Flex justify='center'>
                    <Button _hover='none' bg='none' onClick={onOpen}> <Image
                        position='relative'
                        left='-3px'
                        top='679px'
                        w='212px'
                        src={!GameEnd ? ComputerRed : ComputerGreen} /></Button>
                </Flex>
            </Container>
        </>
    );
}

export default GameArea;