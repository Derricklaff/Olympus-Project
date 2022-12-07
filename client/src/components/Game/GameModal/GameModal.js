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
  Text,
} from '@chakra-ui/react';

function GameModal({ setAnswer, isOpen, onClose, questions, handleFormSubmit, answer, CurrentQuestion, getHint }) {

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
        <ModalContent bg='Black'>
          <ModalHeader textAlign='center' fontFamily='Roboto Mono' textColor='#38A169'>{questions[CurrentQuestion].topic}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <RadioGroup onChange={setAnswer} value={answer}>
                <Stack spacing={4}>
                  {questions[CurrentQuestion].choices.map((choice, i) => <Radio colorScheme='green' size='md' value={choice} key={i}><Text fontFamily='Roboto Mono' color='#38A169'>{choice}</Text></Radio>)}
                </Stack>
              </RadioGroup>
            </Center>
          </ModalBody>
          <ModalFooter justifyContent='center' gap={12}>
            <Button variant='link' bgColor='black' fontFamily='Roboto Mono' textColor='#38A169' onClick={handleFormSubmit}>
              Run Code
            </Button>
            <Button variant='link' bgColor='black' fontFamily='Roboto Mono' textColor='#38A169' onClick={getHint}>
              Get a Hint
            </Button>
            <Button variant='link' bgColor='black' fontFamily='Roboto Mono' textColor='#38A169' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GameModal;