import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";

function Greeting() {
    return (
        <Card>
            <CardHeader>
                <Heading as='h2' size='lg'>
                    Welcome to Olympus Project!
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    Welcome to our game!
                </Text>
            </CardBody>
            <CardFooter>
                <Button>
                    <Link as={ReactLink} to='/play-game'>
                        Start Hacking
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Greeting;