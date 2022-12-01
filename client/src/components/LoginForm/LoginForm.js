import Auth from '../../utils/auth';
import LoginModal from './LoginModal';
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
  InputGroup,
  useDisclosure,
  Flex,
  useColorMode,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';


const LoginForm = () => {
  const [ login ] = useMutation(LOGIN_USER);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const handleFormSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    try {
      const { data } = await login({
        variables: { ...values }
      });
      console.log(data)
      Auth.login(data.login.token);
    } catch (err) {
      onOpen();
    }
  }

  const handleClick = () => setShow(!show)

  return (
    <>
    <Flex align='center' justify='center' mt={100}>
    <Card boxShadow='dark-lg' bgColor='tomato' width={500} >
      <CardHeader>
        <Heading as='h2' size='lg'>
          Sign In
        </Heading>
      </CardHeader>
      <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'}/>
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
                    <Input {...field} placeholder='email' type='email' bgColor={colorMode === 'light' ? 'white' : 'none'} borderColor='white' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Enter Password</FormLabel>
                    <InputGroup>
                      <Input {...field} placeholder='password' type={show ? 'text' : 'password'} bgColor={colorMode === 'light' ? 'white' : 'none'} borderColor='white'/>
                      <InputRightElement width='4.5rem'>
                        <Button bgColor={colorMode === 'dark' ? 'white' : 'black'} h='1.75rem' size='sm'  onClick={handleClick} textColor={colorMode === 'dark' ? 'black' : 'white'}>
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
                bgColor={colorMode === 'dark' ? 'white' : 'black'}
                isLoading={props.isSubmitting}
                textColor={colorMode === 'dark' ? 'black' : 'white'}
                type='submit'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default LoginForm;