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

  function LoginModal({ isOpen, onClose }) {
  
    return (
        <>
        <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader textColor='tomato'>
            Please Retry
          </ModalHeader>
          <ModalCloseButton bgColor='tomato'/>
          <ModalBody>
            <Text textColor='tomato'>
                Incorrect account information
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button bgColor='tomato' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </>
    )
  }

  export default LoginModal;