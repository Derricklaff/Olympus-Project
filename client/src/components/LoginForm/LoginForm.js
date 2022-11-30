import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { Field, Form, Formik } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  Heading,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react';
import { useState } from 'react';


const LoginForm = () => {
  const [ login ] = useMutation(LOGIN_USER);
  const [show, setShow] = useState(false);

  const handleFormSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)

    try {
      const { data } = await login({
        variables: { ...values }
      });
      console.log(data)
      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }
  }

  const handleClick = () => setShow(!show)

  return (
    <Card>
      <CardHeader>
        <Heading as='h2' size='lg'>
          Log In
        </Heading>
      </CardHeader>
      <CardBody>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleFormSubmit}
        >
          {(props) => (
            <Form>
              <Field name='email'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Enter Email</FormLabel>
                    <Input {...field} placeholder='email' type='email' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Enter Password</FormLabel>
                    <InputGroup>
                      <Input {...field} placeholder='password' type={show ? 'text' : 'password'} />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}

export default LoginForm;