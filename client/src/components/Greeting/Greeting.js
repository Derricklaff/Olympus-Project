import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, Center, Box, Stack, StackDivider, useColorMode, Divider, HStack, Flex } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";

function Greeting() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box >
                <Center>
                    <Card
                        m={[20]}
                        p={6}
                        maxW={'1500px'}
                        bgColor='tomato'
                        boxShadow='dark-lg'
                        rounded={'30'}
                        pos={'relative'}
                    >

                        <CardHeader>
                            <Heading as='h2' size='lg' align='center'>
                                Welcome to Olympus Project!
                            </Heading>
                            <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                        </CardHeader>
                        <CardBody>
                            <Text align='center' fontSize='4xl'>
                                Welcome to our game!
                            </Text>
                            <Text align='center' fontSize='4xl'>Your rocket has lost power and is stuck on an unkown planet in a far away star system!</Text>
                            <Text align='center' fontSize='4xl'>Solve all the tasks, restore power to your ship, and get home!</Text>
                            <Text align='center' fontSize='4xl'><Link fontSize='4xl' colorScheme='red'>Log In </Link>or <Link colorScheme='red' fontSize='4xl'>Sign Up</Link> to save your mission progress! Or just play as a guest!</Text>
                        </CardBody>
                        <CardFooter align='center'  justify='center'>
                           
                                
                                    <Link as={ReactLink} to='/play-game'>
                                        <Button
                                            bgColor={colorMode === 'dark' ? 'white' : 'black'}
                                            textColor={colorMode === 'dark' ? 'black' : 'white'}
                                        >
                                            Start Hacking
                                        </Button>
                                    </Link>
                                
                            
                        </CardFooter>
                    </Card>
                </Center>
            </Box>
        </>
    );
}

export default Greeting;