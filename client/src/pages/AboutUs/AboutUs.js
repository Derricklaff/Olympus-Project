import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import StripeContainer from '../../components/Stripe/StripeContainer';
import { Box, Button, Center, Container, Heading, Flex, Text, Stack, Card } from '@chakra-ui/react';
import { Link } from 'react-router-dom';




export default function AboutUs() {
    const [showItem, setShowItem] = useState(false)
    return (
        <div>
            <Header />
            <Heading as='h1' fontSize='5xl' pt='24px'>About Us</Heading>
            <Container maxW='container.lg' pt='100px'>
                <Heading as='h2' fontSize='2xl' textAlign='center' >About The Game</Heading >
                <Text fontSize='lg' align='center' >
                    Hello, and welcome to the Olympus-project. A fun and interactive video that reviews coding concepts covered in a coding bootcamp. The best way to learn about a new concept in anything is to turn it into a game. With the Olympus project, a player can review important concepts in coding to ensure that they are learning and retaining the content taught. If you like what we have created support us by buying us a cup of coffee.
                </Text>
            </Container>
            <Container maxW='container.lg' pt='100px'>
                <Heading as='h2' fontSize='2xl' textAlign='center' >About The Developers</Heading >
                <Text fontSize='lg' align='center'>
                    This program was created by three talented full stack web developers; Tristan Saragosa, Derrick Lafforthun, and Gayle Hoefer. This team are recent graduates of the University of Arizona coding bootcamp. If you like what we have created, please checkout our  GitHub pages.
                </Text>
                <Stack pt='24px'>
                    <Text align='center'>Tristan Saragosa</Text><Link href="https://github.com/trufl" align='center'>GitHub</Link>
                    <Text align='center'> Derrick Lafforthun </Text><Link align='center' href="https://github.com/derricklaff">Github</Link>
                    <Text align='center'>Gayle Hoefer</Text><Link href="https://github.com/hoeferg" align='center'>GitHub</Link>
                </Stack>
            </Container>
            <Center>
                <Card maxW='lg' mt='100px' p='20px'>
                    {showItem ? <StripeContainer /> : <> <Heading as='h4' fontSize='xl' align='center'>Donate</Heading> <img src=''></img></>} <Text align='center'>We appreciate everyone who plays and enjoys our game! If you enjoyed it feel free to donate to future development of this game and hopefully many more like it!</Text><Button mt='10px' onClick={() => setShowItem(true)}>Donate here</Button>
                </Card>
            </Center>
        </div >

    )
}
