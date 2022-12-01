import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, Flex, Avatar, Box } from '@chakra-ui/react'

function Success() {
    return (
        <p> Thank you for buying the develops a cup of coffee!</p>
    )
}

export default Success;