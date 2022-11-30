import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontweight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serof',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {color: '#fce883'},
            '::placeholder': {color: '#87bbfd'}
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = userStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const responce = await axios.post('https://localhost:200/payment', {
                    amount: 500,
                    id
                })

                if (responce.data.success) {
                    console.log("Successful Payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='FormRow'>
                            <CardElement options={CARD_OPTIONS}></CardElement>
                        </div>
                    </fieldset>
                </form>
                :
                <div>
                    <h2>You just bought the developers a coffee. Thank you!</h2>
                </div>
    }


        </>
    )
}
