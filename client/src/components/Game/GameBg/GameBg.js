import { Box, Flex, Heading } from '@chakra-ui/react';
import backdrop from '../../images/backdrop.png';
import GameArea from '../GameArea/GameArea';;

function GameBg({ onOpen, loading }) {
    return (
        <>
        <Box
        bgImage={backdrop}
        bgPosition="center"
        bgRepeat="no-repeat"
        pos="fixed" 
        w="100%"
        h='100%'
        zIndex={-1}
        >
            { loading ? <Heading as='h2'>Loading</Heading> : 
            <Flex align='center' justify='center' >
                <GameArea onOpen={onOpen} />
            </Flex>
            }
        </Box>
        </>
    )
}

export default GameBg;