import Header from "../components/Header/Header";
import { Box, Button, Center, Container, Heading, Flex, Text, Stack } from '@chakra-ui/react';

import Greeting from "../components/Greeting/Greeting";

function HomePage() {
    return (
        <>
            <body className="HomepageBody">
                <Header />
                <Greeting />
            </body>
        </>


    );
}

export default HomePage;