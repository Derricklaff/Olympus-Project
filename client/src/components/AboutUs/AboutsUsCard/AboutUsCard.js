import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Link,
    Flex,
    Avatar,
    Box,
    Center,
    Stack,
    useColorMode,
    Divider,
    HStack,
    VStack
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../../utils/queries';



const stripePromise = loadStripe("pk_test_51M9b6wJfacGwExOb03mskYA5m8ElF0FDU4U5c6wu88RNJUklfvxKofupCKOd5UVBOw2w6XwbuXtRaoFiV3MUFST800jLUmyltK")



function AboutUsCard() {
    const { colorMode } = useColorMode();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT)
    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data])

    async function handleDonateSubmit(e) {
        e.preventDefault();
        try {
            await getCheckout()
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>

            <Flex align='center' justify='center'>
                <Card boxShadow='dark-lg' mt={50} maxW={1500}>
                    <CardHeader>
                        <Heading fontFamily='Roboto Mono' as='h2' size='lg' align='center'>
                            About Us
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Center>
                            <Stack wrap='wrap' direction={['row', 'column']} gap={5}>
                                <div>
                                    <Card boxShadow='dark-lg' bgColor='tomato'>
                                        <CardHeader>
                                            <Heading fontFamily='Roboto Mono' as='h3' size='md' align='center' >
                                                About The Game
                                            </Heading>
                                        </CardHeader>
                                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                                        <CardBody>
                                            <Text fontFamily='Roboto Mono' align='center' fontSize='md'>
                                                Hello, and welcome to the Olympus-Project. A fun and interactive quiz that reviews
                                                coding concepts covered in a coding bootcamp. The best way to learn about a new concept
                                                in anything is to turn it into a game. With the Olympus project, a player can review important
                                                concepts in coding to ensure that they are learning and retaining the content taught. If you
                                                like what we have created support us by buying us a cup of coffee.
                                            </Text>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card boxShadow='dark-lg' bgColor='tomato' >
                                        <CardHeader>
                                            <Heading fontFamily='Roboto Mono' as='h3' size='md' align='center'>
                                                About The Developers
                                            </Heading>
                                        </CardHeader>
                                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                                        <CardBody>
                                            <Text fontFamily='Roboto Mono' align='center' fontSize='md'>
                                                This program was created by three talented developers; Tristan Saragosa,
                                                Derrick Lafforthun, and Gayle Hoefer. This team recently graduated from the University of
                                                Arizona coding bootcamp. If you like what we have created, please checkout our GitHub pages.
                                            </Text>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Stack>
                        </Center>

                    </CardBody>
                    <Center>

                        <CardFooter>

                            <VStack>
                                <HStack direction={['column', 'row']} gap={1} wrap='wrap'>
                                    <Card maxW='md' boxShadow='dark-lg' bgColor='tomato'>
                                        <CardHeader>
                                            <Flex spacing='4'>
                                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                    <Avatar name='Gayle Hoefer' alt='profile picture' src='https://picsum.photos/id/237/200/300' />
                                                    <Box>
                                                        <Heading fontFamily='Roboto Mono' size='sm'>Gayle Hoefer</Heading>
                                                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                                                        <Text fontFamily='Roboto Mono'>Full Stack Web Developer</Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </CardHeader>
                                        <CardFooter
                                            justify='space-between'
                                            flexWrap='wrap'
                                            sx={{
                                                '& > button': {
                                                    minW: '136px',
                                                },
                                            }}
                                        >
                                            <Link href='https://github.com/hoeferg' isExternal>
                                                <Button fontFamily='Roboto Mono' bgColor={colorMode === 'dark' ? 'white' : 'black'} textColor={colorMode === 'dark' ? 'black' : 'white'} flex='1'  >
                                                    Go to Gayle's GitHub
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                    <Card maxW='md' boxShadow='dark-lg' bgColor='tomato'>
                                        <CardHeader>
                                            <Flex spacing='4'>
                                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                    <Avatar name='Derrick Lafforthun' alt='profile picture' src='https://picsum.photos/id/433/200/300' />
                                                    <Box>
                                                        <Heading fontFamily='Roboto Mono' size='sm'>Derrick Lafforthun</Heading>
                                                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                                                        <Text fontFamily='Roboto Mono'>Full Stack Web Developer</Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </CardHeader>
                                        <CardFooter
                                            justify='space-between'
                                            flexWrap='wrap'
                                            sx={{
                                                '& > button': {
                                                    minW: '136px',
                                                },
                                            }}
                                        >
                                            <Link href='https://github.com/derricklaff' isExternal>
                                                <Button fontFamily='Roboto Mono' bgColor={colorMode === 'dark' ? 'white' : 'black'} textColor={colorMode === 'dark' ? 'black' : 'white'} flex='1'  >
                                                    Go to Derrick's GitHub
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                    <Card maxW='md' boxShadow='dark-lg' bgColor='tomato'>
                                        <CardHeader>
                                            <Flex spacing='4'>
                                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                    <Avatar name='Tristan Saragosa' alt='profile picture' src='https://picsum.photos/id/274/200/300/' />
                                                    <Box>
                                                        <Heading fontFamily='Roboto Mono' size='sm'>Tristan Saragosa</Heading>
                                                        <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                                                        <Text fontFamily='Roboto Mono'>Full Stack Web Developer</Text>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </CardHeader>
                                        <CardFooter
                                            justify='space-between'
                                            flexWrap='wrap'
                                            sx={{
                                                '& > button': {
                                                    minW: '136px',
                                                },
                                            }}
                                        >
                                            <Link href='https://github.com/trufl' isExternal>
                                                <Button fontFamily='Roboto Mono' bgColor={colorMode === 'dark' ? 'white' : 'black'} textColor={colorMode === 'dark' ? 'black' : 'white'} flex='1'  >
                                                    Go to Tristan's GitHub
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </HStack>
                                <Button
                                    onClick={handleDonateSubmit}
                                    bgColor={colorMode === 'dark' ? 'white' : 'black'}
                                    textColor={colorMode === 'dark' ? 'black' : 'white'}
                                >
                                    Buy the developers a coffee
                                </Button>
                            </VStack>
                        </CardFooter>
                    </Center>
                </Card>
            </Flex>



        </>
    );
}

export default AboutUsCard;