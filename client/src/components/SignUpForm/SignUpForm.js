import { useState } from 'react';
import Auth from '../../utils/auth';
import SignUpModal from './SignUpModal';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
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

const SignUpForm = () => {
  const [ addUser ] = useMutation(ADD_USER);
  const [show, setShow] = useState(false);
  const [modTxt, setModTxt] = useState('');
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    try {
      const { username, email, password } = values;
      const { data } = await addUser({
        variables: { username, email, password }
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      setModTxt(err.message);
      onOpen();
    }
  }

  const handleClick = () => setShow(!show)

  return (
    <>
    <Flex align='center' justify='center' mt={50}>
    <Card boxShadow='dark-lg' bgColor='tomato' width={500}>
      <CardHeader>
        <Heading fontFamily='Roboto Mono' as='h2' size='lg'>
          Sign Up
        </Heading>
      </CardHeader>
      <Divider bgColor={colorMode === 'dark' ? 'black' : 'white'} />
      <CardBody>
        <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleFormSubmit}
        >
          {(props) => (
            <Form>
              <Field name='username'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel fontFamily='Roboto Mono'>Enter Username</FormLabel>
                    <Input {...field} placeholder='username' type='text' bgColor={colorMode === 'light' ? 'white' : 'none'} borderColor='white' fontFamily='Roboto Mono'/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='email'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel fontFamily='Roboto Mono'>Enter Email</FormLabel>
                    <Input {...field} placeholder='email' type='email' bgColor={colorMode === 'light' ? 'white' : 'none'} borderColor='white' fontFamily='Roboto Mono'/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password'>
                {({ field, form }) => (
                  <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel fontFamily='Roboto Mono'>Enter Password</FormLabel>
                    <InputGroup>
                      <Input {...field} placeholder='password' type={show ? 'text' : 'password'} bgColor={colorMode === 'light' ? 'white' : 'none'} borderColor='white' fontFamily='Roboto Mono'/>
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={colorMode === 'dark' ? 'white' : 'black'} textColor={colorMode === 'dark' ? 'black' : 'white'} fontFamily='Roboto Mono'>
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
                textColor={colorMode === 'dark' ? 'black' : 'white'}
                fontFamily='Roboto Mono'
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
    </Flex>
    <SignUpModal modTxt={modTxt} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default SignUpForm;