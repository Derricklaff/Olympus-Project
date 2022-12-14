import { useEffect } from "react"
import Header from "../../components/Header/Header"
import greencheck from '../../components/images/greencheck.png'

import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    Center,
    useColorMode,
    Divider,

} from '@chakra-ui/react'

export default function DonationThanks() {
    const { colorMode } = useColorMode();

    useEffect(() => {
        setTimeout(() => {
            window.location.assign(`/`)
        }, 5000)
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
                                Thank you!
                            </Text>
                            <Center mt="25px">
                                <img
                                    width="100px"
                                    src={greencheck} alt='green check' />
                            </Center>
                        </CardBody>
                    </Card>
                </Center>
            </div>

        </>
    )
}