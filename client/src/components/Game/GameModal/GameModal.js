import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Center,
  Textarea,
  Stack,
  Radio,
  RadioGroup
} from '@chakra-ui/react';

import { useState } from 'react';

function GameModal({ modTxt, isOpen, onClose, choicesTxt, questions }) {

  const [CurrentQuestion, setCurrentQuestion] = useState(0)

  //   {
  //     id: 1,
  //     topic: "Your first task to get back home is to replace the hackerCode with the computer's processor.",
  //     choices:
  //         [
  //             "computerParts.splice(1, 2, `processor`);",
  //             "computerParts.splice(2, 1, `processor`);",
  //             "computerParts.pop(2, 1, `processor`);",
  //             "computerParts.slice(2, 1, processor);"
  //         ],
  //     answer: "computerParts.splice(2, 1, `processor`);"
  // },

  

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size='6xl'
        maxH="400px" maxW="500px"
      >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader textAlign='center'>{questions[CurrentQuestion].topic}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Center>
                <RadioGroup defaultValue='1'>
                  <Stack spacing={4}>
                    {questions[CurrentQuestion].choices.map((choice, i) => <Radio value={i} key={i}>{choice}</Radio>)}
                  </Stack>
                </RadioGroup>
              </Center>
            </form>
          </ModalBody>
          <ModalFooter>
            <Center>
              <Button onClick={onClose}>
                Submit answer!
              </Button>
            </Center>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GameModal;