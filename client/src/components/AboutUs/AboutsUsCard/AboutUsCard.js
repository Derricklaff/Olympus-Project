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
    useColorModeValue,
    HStack,
    VStack
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../../utils/queries';



const stripePromise = loadStripe("pk_test_51M9b6wJfacGwExOb03mskYA5m8ElF0FDU4U5c6wu88RNJUklfvxKofupCKOd5UVBOw2w6XwbuXtRaoFiV3MUFST800jLUmyltK")


function AboutUsCard() {
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
        console.log('hello world')
        try {
            await getCheckout()
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <>
            <Box >
                <Card >
                    <CardHeader>
                        <Heading as='h2' size='lg' align='center'>
                            About Us
                        </Heading>
                    </CardHeader>
                    <CardBody >
                        <Center>
                            <Stack direction={['column', 'row']} spacing='24px'>
                                <Flex justify='space-evenly'>
                                    <Center>
                                        <Card boxShadow='dark-lg' bgColor='tomato'>
                                            <CardHeader>
                                                <Heading as='h3' size='md' align='center'>
                                                    About The Game
                                                </Heading>
                                            </CardHeader>
                                            <CardBody>
                                                <Text align='center' fontSize='md'>
                                                    Hello, and welcome to the Olympus-project. A fun and interactive video that reviews
                                                    coding concepts covered in a coding bootcamp. The best way to learn about a new concept
                                                    in anything is to turn it into a game. With the Olympus project, a player can review important
                                                    concepts in coding to ensure that they are learning and retaining the content taught. If you
                                                    like what we have created support us by buying us a cup of coffee.
                                                </Text>
                                            </CardBody>
                                        </Card>
                                    </Center>
                                </Flex>
                                <Card boxShadow='dark-lg' bgColor='tomato'>
                                    <CardHeader>
                                        <Heading as='h3' size='md' align='center'>
                                            About The Developers
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text align='center' fontSize='md'>
                                            This program was created by three talented full stack web developers; Tristan Saragosa,
                                            Derrick Lafforthun, and Gayle Hoefer. This team are recent graduates of the University of
                                            Arizona coding bootcamp. If you like what we have created, please checkout our  GitHub pages.
                                        </Text>
                                    </CardBody>
                                </Card>
                            </Stack>
                        </Center>
                    </CardBody>
                    <Center>

                        <CardFooter>
    
                            <VStack>
                                <HStack wrap='wrap'>
                                <Card maxW='md' boxShadow='dark-lg' bgColor='tomato'>
                                    <CardHeader>
                                        <Flex spacing='4'>
                                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                <Avatar name='Gayle Hoefer' alt='profile picture' src='https://picsum.photos/id/237/200/300' />
                                                <Box>
                                                    <Heading size='sm'>Gayle Hoefer</Heading>
                                                    <Text>Creator, Full Stack Web Developer</Text>
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
                                            <Button flex='1' variant='ghost' >
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
                                                    <Heading size='sm'>Derrick Lafforthun</Heading>
                                                    <Text>Creator, Full Stack Web Developer</Text>
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
                                            <Button flex='1' variant='ghost' >
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
                                                    <Heading size='sm'>Tristan Saragosa</Heading>
                                                    <Text>Creator, Full Stack Web Developer</Text>
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
                                            <Button flex='1' variant='ghost' >
                                                Go to Tristan's GitHub
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                                </HStack>
                        <Button
                            onClick={handleDonateSubmit}
                            bgColor={useColorMode === 'dark' ? 'white' : 'black'}
                            textColor={useColorMode === 'dark' ? 'black' : 'white'}
                        >
                            Buy the developers a coffee
                        </Button>
                            </VStack>
                        </CardFooter>
                    </Center>
                </Card>

            </Box>

        </>
    );
}

export default AboutUsCard;