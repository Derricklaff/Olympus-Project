import { Box, Button, Center, Container, Heading, Flex } from '@chakra-ui/react';
import React from 'react';

export default function Homepage() {
    return (
        <Container>
            <Text>Oh no! Your rocket has lost power and is stuck on an unkown planet in a far away star system!</Text>
            <Text>Solve all the tasks, restore power to your ship, and get home!</Text>
            <Text><Button colorScheme='Red 600' variant='solid'>Log In</Button> or<Button colorScheme='Red 600' variant='solid'>Sign Up</Button> to save your mission progress! Or just play as a guest!</Text>

            <Box as='button'
                height='42px'
                border='2px'
                borderRadius='20%'>
                Start Mission!</Box>
        </Container>
    )
}