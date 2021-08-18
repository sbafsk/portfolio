import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useFirebase } from '../../api/FirebaseContext';
import { FormInput } from '../UI/FormControls';

export function TokenModal({ isOpen, onClose, action }) {
  const { addToken, removeToken } = useFirebase();

  const handleAddSubmit = (values, actions) => {
    try {
      const token = {
        key: values.ticker,
        value: values.name,
      };
      addToken(token);
      actions.resetForm();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleRemoveSubmit = (tokenName) => {
    try {
      removeToken(tokenName);
      onClose();
    } catch (error) {
      console.log(error);
    } 
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      isCentered
      motionPreset="scale"
    >
      <ModalOverlay />

      {action.type === 'add' && (
        <ModalContent>
          <ModalHeader>Add Token</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{
                name: '',
                ticker: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Name is required.'),
                ticker: Yup.string().required('ticker is required.'),
              })}
              onSubmit={handleAddSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Token name"
                  />
                  <FormInput
                    label="Ticker"
                    name="ticker"
                    type="text"
                    placeholder="Ticker"
                  />
                  <ModalFooter>
                    <Button
                      colorScheme="green"
                      mr={3}
                      variant={'outline'}
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Add
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      )}
      {action.type === 'remove' && (
        <ModalContent>
          <ModalHeader>Remove token</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Confirm token to delete <strong>{action.tokenName}</strong>.
            <ModalFooter>
              <Button colorScheme="red" mr={3} variant={'outline'} onClick={() => handleRemoveSubmit(action.tokenName)}>
                Remove
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  );
}
