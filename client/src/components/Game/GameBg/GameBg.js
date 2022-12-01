import { Box, Flex } from '@chakra-ui/react';
import backdrop from '../../images/backdrop.png';
import GameArea from '../GameArea/GameArea';;

function GameBg() {
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
            <Flex align='center' justify='center' >
                <GameArea />
            </Flex>
            
        </Box>
        </>
    )
}

export default GameBg;