import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react';

  function SignUpModal({ modTxt, isOpen, onClose }) {

    return (
        <>
        <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        >
        <ModalOverlay />
        <ModalContent bg='black'>
          <ModalHeader textColor='tomato'>
            Please Retry
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textColor='tomato'>
                {modTxt}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button bgColor='tomato' mr={3} onClick={onClose} textColor='white'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
  }

  export default SignUpModal;