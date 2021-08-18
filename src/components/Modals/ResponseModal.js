import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const ResponseModal = ({ isOpen, onClose, data }) => {
  return (
    data && (
      <Modal isOpen={isOpen} size="md">
        <ModalOverlay />
        <ModalContent>
          <Alert
            status={data.type}
            variant="left-accent"
            flexDirection="column"
            justifyContent="space-around"
            height="56"
          >
            <AlertIcon boxSize="12" ml="2"/>
            <AlertTitle>{data.title}</AlertTitle>
            <AlertDescription>{data.message}</AlertDescription>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </Alert>
        </ModalContent>
      </Modal>
    )
  );
};

export default ResponseModal;
