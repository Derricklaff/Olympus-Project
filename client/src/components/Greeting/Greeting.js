import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Link,
    Center,
    Box,
    useColorMode,
    Divider,
} from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";

function Greeting() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box >
                <Center>
                    <Card
                        mt={50}
                        p={6}
                        maxW={'1500px'}
                        bgColor='tomato'
                        boxShadow='dark-lg'
                        rounded={'30'}
                        pos={'relative'}
                    >
                        <CardHeader>
                            <Heading fontFamily='Roboto Mono' as='h2' fontSize='4xl' align='center'>
                                Welcome to Olympus Project!
                            </Heading>
                            <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                        </CardHeader>
                        <CardBody>
                            <Text fontFamily='Roboto Mono' align='center' fontSize='2xl'>
                            Congratulations on landing your dream job as a software engineer here on the Olympus Space Station! Now that you signed your contract, it seems
                            appropriate to let you know that we have just laid off 80% of our sowftware engineers and have an obscene amount of errors showing up
                            in our code that may or may not cause an explosion on the Olympus.
                            </Text>
                            <Text fontFamily='Roboto Mono' align='center' fontSize='2xl'>
                            Help the AI review the code in our system and fix what is needed. You will be asked a series of questions and it is up
                            to you to pick the right solution. Solve all the problems and the Olympus probably won't explode.
                            </Text>
                            <Text fontFamily='Roboto Mono' align='center' fontSize='2xl'>
                                Good Luck!
                            </Text>
                            <Text fontFamily='Roboto Mono' align='center' fontSize='2xl'><Link fontSize='4xl' colorScheme='red'>Log In </Link>or <Link colorScheme='red' fontSize='4xl'>Sign Up</Link> to save your mission progress! Or just play as a guest!</Text>
                        </CardBody>
                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                        <CardFooter align='center' justify='center'>
                            <Link as={ReactLink} to='/play-game'>
                                <Button
                                    bgColor={colorMode === 'dark' ? 'white' : 'black'}
                                    textColor={colorMode === 'dark' ? 'black' : 'white'}
                                    fontFamily='Roboto Mono'
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