import Auth from '../../utils/auth';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
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
            topic: "Now that the power levels are doubled, check your math to make sure the total is 100 using the spread method. We started the code for you: Function sum(22, 32, 28, 18) {Return 22 + 32 + 28 + 18;}Const number = [22, 32, 28, 18];",
            choices:
            [
                "console.log(sum(...numbers));console.log(apply(null, numbers));",
                "console.log(sum);console.log(sum.apply(null, numbers));",
                "console.log(...numbers));console.log(sum.apply(null, numbers));",
                "console.log(sum(...numbers)); console.log(sum.apply(null, numbers));"
            ],
            answer: "console.log(sum(...numbers));console.log(sum.apply(null, numbers));"
        },
        {
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
            topic: "The last step to fix the rocket ship is to reverse and combine the super secret password. Const password = [`f`, `f` ,`o`, `t`, `s`,`a` `l`, `b`]",
            choices:
            [
                "arr.reverse.join();console.log(arr.join(``))",
                "arr.reverse();console.log(arr(``))",
                "arr.reverse(); console.log(arr.join(``))",
                "arr.reverse();sum(arr.join(``))"
        ],
            answer: "arr.reverse();console.log(arr.join(``));"
        },
    ]
    const { loading, data } = useQuery(QUERY_USER);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modTxt, setModTxt] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
        <GameBg onOpen={onOpen} loading={loading} />
        <GameModal modTxt={modTxt}  setAnswer={setAnswer} isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default GameContainer;