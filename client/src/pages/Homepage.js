import Header from "../components/Header/Header";
import { Box, Button, Center, Container, Heading, Flex, Text, Stack } from '@chakra-ui/react';
function HomePage() {
    return (
        <>
            <Flex>
                <Header />
            </Flex>


            <Container bgGradient=''>
                <Stack>
                    <Text align='center' fontSize='4xl'>Oh no! Your rocket has lost power and is stuck on an unkown planet in a far away star system!</Text>
                    <Text align='center' fontSize='4xl'>Solve all the tasks, restore power to your ship, and get home!</Text>
                    <Text align='center' fontSize='4xl'><Button fontSize='4xl' colorScheme='red' variant='ghost'>Log In</Button>or<Button colorScheme='red' variant='ghost' fontSize='4xl'>Sign Up</Button> to save your mission progress! Or just play as a guest!</Text>
                </Stack>
            </Container>
            <Center>

                <Box as='button'
                    height='42px'
                    border='2px'
                    borderRadius='11%'
                    fontSize='3xl'>
                    Start Mission!</Box>
            </Center>

        </>


    );
}

export default HomePage;