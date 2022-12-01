// import React, { useState } from 'react'
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios";
// import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Link, Flex, Avatar, Box } from '@chakra-ui/react'
// import './PaymentForm.css'

// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: '#c4f0ff',
//             color: '#808080',
//             fontweight: 500,
//             fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serof',
//             fontSize: '16px',
//             fontSmoothing: 'antialiased',
//             ':-webkit-autofill': { color: '#808080' },
//             '::placeholder': { color: '#87bbfd' }
//         },
//         invalid: {
//             iconColor: '#ffc7ee',
//             color: '#ffc7ee'
//         }
//     }
// }

// export default function PaymentForm(props) {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//         if (!error) {
//             try {
//                 const id = paymentMethod
//                 const response = await fetch('https://localhost:3001/payment', {
//                     method: 'POST',
//                     headers: {
//                         Accept: 'applicaton/json', 
//                         'Content-Type':'applicaton/json', 
//                     },
//                     body: JSON.stringify({ amount: 500, id: id })
//                 })
//                 console.log(response)
//                 if (response.ok) {
//                     console.log("Successful Payment")
//                     setSuccess(true)
//                 }

//             } catch (error) {
//                 console.log("Error", error)
//             }
//         } else {
//             console.log(error.message)
//         }
//     }

//     return (
//         <>
//             {!success ?
//                 <form onSubmit={handleSubmit}>
//                     <fieldset className='FormGroup'>
//                         <div className='FormRow'>
//                             <CardElement options={CARD_OPTIONS}></CardElement>
//                         </div>
//                         <div id='stripeButton'>
//                             <Button type='submit' id="payment">Submit</Button>
//                         </div>
//                     </fieldset>
//                 </form>
//                 :
//                 <div>
//                     <h2>You just bought the developers a coffee. Thank you!</h2>
//                 </div>
//             }
//             <Button onClick={() => props.setShowItem(false)}>Close</Button>

//         </>
//     )
// }
