import { Box, Stack, Heading, Container } from '@chakra-ui/react';
import background2 from '../../images/Background2.jpg';
import GameArea from '../GameArea/GameArea';;

function GameBg({ onOpen, loading, GameEnd }) {
    return (
        <>
            <Container
                bgImage={background2}
                bgPosition="center"
                bgRepeat="no-repeat"

                minH='100vh'
                minW='100vw'
                zIndex={-1}
            >
                <Stack justify='center'>
                    {loading ? <Heading fontFamily='Roboto' color='white' as='h2'>Loading</Heading> : <GameArea onOpen={onOpen} GameEnd={GameEnd} />}
                </Stack>
            </Container>

        </>
    )
}

export default GameBg;