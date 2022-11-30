import Auth from '../../utils/auth';
import { useState } from 'react';
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
import GameModal from './GameModal/GameModal';

function GameContainer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modTxt, setModTxt] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <GameModal modTxt={modTxt} isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default GameContainer;