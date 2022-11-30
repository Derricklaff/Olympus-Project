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
  useToast,
} from '@chakra-ui/react';

const SignUpForm = () => {

  const [ addUser ] = useMutation(ADD_USER);
  const [show, setShow] = useState(false);
  const [modTxt, setModTxt] = useState('');
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    try {
      const toastId = 'signup-toast';
      const { username, email, password } = values;
      const { data } = await addUser({
        variables: { username, email, password }
      });

      Auth.login(data.addUser.token);

      if(!toast.isActive(toastId)) {
        toast({
          id: toastId,
          title: 'Account created.',
          description: "Your account has been created.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      setModTxt(err.message);
      onOpen();
    }
  }

  const handleClick = () => setShow(!show)

  return (
    <>
    <Card>
      <CardHeader>
        <Heading as='h2' size='lg'>
          Sign Up
        </Heading>
      </CardHeader>
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
                    <FormLabel>Enter Username</FormLabel>
                    <Input {...field} placeholder='username' type='text'/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
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
    <SignUpModal modTxt={modTxt} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default SignUpForm;






//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor='username'>Username</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your username'
//             name='username'
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Your email address'
//             name='email'
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//       </Form>
//     </>