import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, useColorModeValue, Center, Box, Stack, StackDivider } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";

function Greeting() {
    return (
        <>
            <Center>
                <Card
                    m={[20]}
                    py={12}
                    role={'group'}
                    p={6}
                    maxW={'1500px'}
                    w={'full'}
                    bg={useColorModeValue('gray', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'30'}
                    pos={'relative'}
                    zIndex={1}>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <CardHeader>
                            <Heading as='h2' size='lg' align='center'>
                                Welcome to Olympus Project!
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Text align='center' fontSize='4xl'>
                                    Welcome to our game!
                                </Text>
                            </Stack>
                            <Text align='center' fontSize='4xl'>Your rocket has lost power and is stuck on an unkown planet in a far away star system!</Text>
                            <Text align='center' fontSize='4xl'>Solve all the tasks, restore power to your ship, and get home!</Text>
                            <Text align='center' fontSize='4xl'><Link fontSize='4xl' colorScheme='red'>Log In </Link>or <Link colorScheme='red' fontSize='4xl'>Sign Up</Link> to save your mission progress! Or just play as a guest!</Text>
                        </CardBody>
                        <CardFooter>
                            <Center>
                                <Box m={[10]} pl={[625]}>
                                    <Link as={ReactLink} to='/play-game'>
                                        <Button id="startHacking">
                                            Start Hacking
                                        </Button>
                                    </Link>
                                </Box>
                            </Center>
                        </CardFooter>
                    </Stack>
                </Card>
            </Center>
        </>
    );
}

export default Greeting;