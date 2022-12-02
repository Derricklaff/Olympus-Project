import Auth from '../../utils/auth';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { SAVE_CHECKPOINT } from '../../utils/mutations';
import {
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import GameModal from './GameModal/GameModal';
import GameBg from './GameBg/GameBg';

function GameContainer() {
    const questions = [
        {
            id: 1,
            topic: "Your first task to get back home is to replace the hackerCode with the computer's processor.",
            choices:
                [
                    "computerParts.splice(1, 2, `processor`);",
                    "computerParts.splice(2, 1, `processor`);",
                    "computerParts.pop(2, 1, `processor`);",
                    "computerParts.slice(2, 1, processor);"
                ],
            answer: "computerParts.splice(2, 1, `processor`);"
        },
        {
            id: 2,
            topic: "The hacker lowered the power levels of the ship. It looks like everything is only at half power. How would you double them? Const powerLevels = [ 11, 16, 14, 9];",
            choices:
                [
                    "const powerLevels = powerLevels.map(x => x*2)",
                    "const powerLevels = powerLevels.map(x => x/2)",
                    "const powerLevels = powerLevels*2)",
                    "const powerLevels = x*2"
                ],
            answer: "const powerLevels = powerLevels.map(x => x*2)"
        },
        {
            id: 3,
            topic: "Now that the power levels are doubled, check your math to make sure the total is 100 using the spread method. We started the code for you: Function sum(22, 32, 28, 18) {Return 22 + 32 + 28 + 18;}Const number = [22, 32, 28, 18];",
            choices:
                [
                    "console.log(sum(...numbers));console.log(apply(null, numbers));",
                    "console.log(sum);console.log(sum.apply(null, numbers));",
                    "console.log(...numbers));console.log(sum.apply(null, numbers));",
                    "console.log(sum(...numbers)); console.log(sum.apply(null, numbers));"
                ],
            answer: "console.log(sum(...numbers)); console.log(sum.apply(null, numbers));"
        },
        {
            id: 4,
            topic: "Oh no. The hackers have taken complete control of communications. Try to filter everything out so that the hacker parts are isolated. Const communications:  [`radio`, `hackerTransmitter`, `wires`, `hackerCopyMessage`, `alienComputerChip`]",
            choices:
                [
                    "const filtered= arr.filter(element => 1 || element 3);console.log(filtered);",
                    "const filtered= arr.filter(1 || 3);console.log(filtered);",
                    "const filtered= arr.filter(element => === 1 || element === 3);console.log(filtered);",
                    "const filtered= arr.filter(element => === 1 && element === 3);console.log(filtered);"
                ],
            answer: "const filtered= arr.filter(element => === 1 || element === 3);console.log(filtered);"
        },
        {
            id: 5,
            topic: "The last step to fix the rocket ship is to reverse and combine the super secret password. Const password = [`f`, `f` ,`o`, `t`, `s`,`a` `l`, `b`]",
            choices:
                [
                    "arr.reverse.join();console.log(arr.join(``))",
                    "arr.reverse();console.log(arr(``))",
                    "arr.reverse();console.log(arr.join(``));",
                    "arr.reverse();sum(arr.join(``))"
                ],
            answer: "arr.reverse();console.log(arr.join(``));"
        },
    ]
    const { loading, data } = useQuery(QUERY_USER);
    const [saveCheckpoint] = useMutation(SAVE_CHECKPOINT);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [answer, setAnswer] = useState('');
    const [CurrentQuestion, setCurrentQuestion] = useState(0)
    const [GameEnd, setGameEnd] = useState(false)
    const toast = useToast()
    const checkpoint = data?.user.checkpoint || 0
    let index = 0;

    if(Auth.loggedIn && CurrentQuestion < checkpoint) {
        for(let i = 0; i < checkpoint; i++) {
            index++;
        }
        setCurrentQuestion(index)
    }

    const handleFormSubmit = async () => {

        toast({
            title: 'Please wait',
            description: 'Compilation in progress...',
            status: 'warning',
            duration: 800,
            isClosable: true,
          });

        setTimeout(async () => {
            if (answer === questions[CurrentQuestion].answer) {
                toast({
                    title: 'Success',
                    description: 'Compiled successfully!',
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                  });
                if (CurrentQuestion < questions.length - 1) {
                    setCurrentQuestion(CurrentQuestion + 1)
                    console.log(CurrentQuestion);
                    if (Auth.loggedIn) {
                        await saveCheckpoint({
                            variables: {
                                checkpoint: CurrentQuestion + 1
                            }
                        })
                    }
                } else {
                    if (Auth.loggedIn) {
                        saveCheckpoint({
                            variables: {
                                checkpoint: 0
                            }
                        })
                    }
                    onClose()
                    setGameEnd(true)
                }
            } else {
                console.log(checkpoint);
                toast({
                    title: 'Error',
                    description: 'Unresolved compilation problem',
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                  });
            }
        }, 800)
    }

    return (
        <>
            <GameBg onOpen={onOpen} loading={loading} GameEnd={GameEnd} />
            <GameModal setAnswer={setAnswer} isOpen={isOpen} onClose={onClose} questions={questions} handleFormSubmit={handleFormSubmit} answer={answer} CurrentQuestion={CurrentQuestion} />
        </>
    );
}

export default GameContainer;