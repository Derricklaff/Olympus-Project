import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";

function Greeting() {
    return (
        <>
        <Card>
            <CardHeader>
                <Heading as='h2' size='lg' align='center'>
                    Welcome to Olympus Project!
                </Heading>
            </CardHeader>
            <CardBody>
                <Text align='center' fontSize='2xl'>Your rocket has lost power and is stuck on an unkown planet in a far away star system!</Text>
                <Text align='center' fontSize='2xl'>Solve all the tasks, restore power to your ship, and get home!</Text>
                <Text align='center' fontSize='2xl'><Link fontSize='3xl' colorScheme='red'>Log In </Link>or <Link colorScheme='red' fontSize='3xl'>Sign Up</Link> to save your mission progress! Or just play as a guest!</Text>
            </CardBody>
            <CardFooter>
                <Link as={ReactLink} to='/play-game'>
                    <Button>
                        Start Hacking
                    </Button>
                </Link>
            </CardFooter>
        </Card>
        </>
    );
}

export default Greeting;