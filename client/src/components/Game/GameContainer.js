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
            topic: "System error: Pick the right function definition",
            choices:
                [
                    "function KeepPowerOn() { const data = await fetch(...) ... }",
                    "function KeepPowerOn(async) { const data = await fetch(...) ... }",
                    "const KeepPowerOn = async () => { const data = await fetch(...) ... }",
                    "const KeepPowerOn = () async { const data = await fetch(...) ... }",
                ],
            answer: "const KeepPowerOn = async () => { const data = await fetch(...) ... }",
            hint: "A function is more efficient as an asynchronous function. Does a function start with a const?"
        },
        {
            id: 2,
            topic: "System error: Return a NEW array of objects",
            choices:
                [
                    "const employeeOxygenSupply = oTanks.filter((tank) => { id, ...tank});",
                    "const employeeOxygenSupply = oTanks.map((tank) => { id, ...tank});",
                    "const employeeOxygenSupply = oTanks.splice(1, { tank });",
                    "const employeeOxygenSupply = oTanks.contains({ tank });"
                ],
            answer: "const employeeOxygenSupply = oTanks.map((tank) => { id, ...tank});",
            hint: "Do we need to limit the amount of options in this array? How many results should there be?"
        },
        {
            id: 3,
            topic: "System error: Fix element",
            choices:
                [
                    "function LifeSupportView() { return ( <OxygenSupply /> <EnergyLevels /> ) }",
                    "function LifeSupportView() { return ( <OxygenSupply { <EnergyLevels /> } /> )}",
                    "function LifeSupportView() { return ( <OxygenSupply <EnergyLevels /> /> )}",
                    "function LifeSupportView() { return ( <> <OxygenSupply /> <EnergyLevels /> </>)}"
                ],
            answer: "function LifeSupportView() { return ( <> <OxygenSupply /> <EnergyLevels /> </>)}",
            hint: "This element would be for a react application"
        },
        {
            id: 4,
            topic: "System error: Fix database typedef",
            choices:
                [
                    "type Engine { _id: ID, fuelLevel: Number!, selfDestruct: Boolean }",
                    "query Engine { _id: ID, fuelLevel: Int!, selfDestruct: Boolean }",
                    "mutation Engine { _id: ID, fuelLevel: Int!, selfDestruct: Boolean }",
                    "type Engine { _id: ID, fuelLevel: Int!, selfDestruct: Boolean }"
                ],
            answer: "type Engine { _id: ID, fuelLevel: Int!, selfDestruct: Boolean }",
            hint: "Do you the code number or integer to represent an integer in code?"

        },
        {
            id: 5,
            topic: "System error: Fix the resolver",
            choices:
                [
                    "Mutation: noExplode: async (parent, { lifeSupport, oxygenSupple, energy }, context) {...}",
                    "noExplode: async ({ lifeSupport, oxygenSupple, energy }, context) {...}",
                    "type: noExplode: async (parent, { lifeSupport, oxygenSupple, energy }, context) {...}",
                    ": noExplode: async (parent, { lifeSupport, oxygenSupple, energy }, context) {...}"
                ],
            answer: "Mutation: noExplode: async (parent, { lifeSupport, oxygenSupple, energy }, context) {...}",
            hint: "Resolvers can have both queries and mutations."
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

    if (Auth.loggedIn && CurrentQuestion < checkpoint) {
        for (let i = 0; i < checkpoint; i++) {
            index++;
        }
        setCurrentQuestion(index)
    }

    const handleFormSubmit = async () => {

        toast({
            title: 'Please wait',
            description: 'Compiling...',
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
                    toast({
                        title: 'Success',
                        description: 'You have successfully fixed all the bugs! Olympus is no longer going to explode... I think.',
                        status: 'success',
                        isClosable: true,
                    });
                }
            } else {
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