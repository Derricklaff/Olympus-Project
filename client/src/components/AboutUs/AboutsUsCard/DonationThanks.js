import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../../Header/Header"

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

export default function DonationThanks() {
    const { colorMode } = useColorMode();

        useEffect(() => {
            setTimeout(() => {
                window.location.assign(`/`)
            }, 10000)
        }, [])


    return (

        <>
            <div>
                <Header />
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
                                Donation Received
                            </Heading>
                            <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
                        </CardHeader>
                        <CardBody>
                            <Text fontFamily='Roboto Mono' align='center' fontSize='2xl'>
                                <p>Thank you!</p>
                            </Text>
                            {/* <img src='../../assets/' alt='green check'/> */}
                        </CardBody>
                    </Card>
                </Center>
            </div>

        </>
    )
}