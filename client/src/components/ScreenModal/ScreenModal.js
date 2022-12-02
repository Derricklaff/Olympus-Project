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
    Textarea
} from '@chakra-ui/react'

export default function GameModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box position='relative' h='90vh' p={12}>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal size='full' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign='center'> Solve the Code! </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Center>
                                <Textarea
                                    placeholder='Here is a sample placeholder'
                                    size='sm'
                                />
                            </Center>
                        </form>
                    </ModalBody>
                    <Center>
                        <ModalFooter>
                            <Button onClick={onClose}> Return To Command Room </Button>
                        </ModalFooter>
                    </Center>
                </ModalContent>
            </Modal>
        </Box>
    )
}