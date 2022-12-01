import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, Flex, Avatar, Box } from '@chakra-ui/react'

function Success() {
    return (
        <p> Your payment has been canceled</p>
    )
}

export default Success;