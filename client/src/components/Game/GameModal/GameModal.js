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

  function GameModal({ modTxt, isOpen, onClose }) {

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
          <ModalHeader
          >
            Please Retry
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
                {modTxt}
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

  export default GameModal;