import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = "pk_test_51M9b6wJfacGwExOb03mskYA5m8ElF0FDU4U5c6wu88RNJUklfvxKofupCKOd5UVBOw2w6XwbuXtRaoFiV3MUFST800jLUmyltK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
