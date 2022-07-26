import {Image } from '@chakra-ui/react'
import React from 'react'
import {
      Modal,
      ModalOverlay,
      ModalContent,
      ModalFooter,
      ModalBody,
      ModalCloseButton,
      useDisclosure,
      Button
} from '@chakra-ui/react'
const ImageGallary = ({ src }) => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      return (
            <>
                  <Image src={src} onClick={onOpen} margin={"1rem"} border={"0.2em solid #332D2A"} boxShadow={"3px 3px 8px 0px rgba(0, 0, 255, 0.3)"} maxWidth={"10vw"}></Image>
                  <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
                        <ModalOverlay
                              bg='blackAlpha.400'
                              backdropFilter='blur(10px)'
                        />
                        <ModalContent backgroundColor={"transparent"}>
                              <ModalCloseButton />
                              <ModalBody backgroundColor={"transparent"}>
                                          <Image src={src} mt="12" width="50vw" height={"70vh"} border={"0.2em solid #332D2A"} boxShadow={"3px 3px 8px 0px rgba(0, 0, 255, 0.3)"}></Image>
                              </ModalBody>

                              <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                          Close
                                    </Button>
                              </ModalFooter>
                        </ModalContent>
                  </Modal>
            </>

      )
}

export default ImageGallary