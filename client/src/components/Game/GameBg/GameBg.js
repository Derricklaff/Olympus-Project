import { Box, Stack, Heading } from '@chakra-ui/react';
import backdrop from '../../images/backdrop.png';
import GameArea from '../GameArea/GameArea';;

function GameBg({ onOpen, loading, GameEnd }) {
    return (
        <>
            <Box
                bgImage={backdrop}
                bgPosition="center"
                bgRepeat="no-repeat"
                minW="100vw"
                minH='100vh'
                zIndex={-1}
            >
                <Stack justify='center'>
                    {loading ? <Heading fontFamily='Roboto' color='white' as='h2'>Loading</Heading> : <GameArea onOpen={onOpen} GameEnd={GameEnd} />}
                </Stack>
            </Box>
        </>
    )
}

export default GameBg;