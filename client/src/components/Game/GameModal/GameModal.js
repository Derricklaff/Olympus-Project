import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

import { useState } from 'react';

function GameModal({ setAnswer, isOpen, onClose, questions, handleFormSubmit, answer, CurrentQuestion }) {



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
            <Center>
              <RadioGroup onChange={setAnswer} value={answer}>
                <Stack spacing={4}>
                  {questions[CurrentQuestion].choices.map((choice, i) => <Radio size='md' value={choice} key={i}>{choice}</Radio>)}
                </Stack>
              </RadioGroup>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleFormSubmit}>
              Submit answer!
            </Button>
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