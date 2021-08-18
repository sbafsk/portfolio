import {
  Radio,
  Input,
  Select,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useField } from 'formik';

export const FormRadio = ({ label, options, ...props }) => {
  //const [value, setValue] = useState('buy');
  const [field, meta] = useField(props.name);
  const { onChange, ...rest } = field;
  return (
    <FormControl mt={5} isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <RadioGroup {...rest} id="radio">
        <Stack direction="row">
          {options.map(opt => (
            <Radio onChange={onChange} value={opt.value} key={opt.value}>
              {opt.name}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <FormControl mt={5} isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} />
      {meta.error && meta.touched && (
        <FormErrorMessage
          size={'xs'}
          mt={'-0.5'}
          ml={'5'}
          position={'absolute'}
        >
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const FormSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <FormControl mt={5} isInvalid={!!meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Select {...field} {...props}>
        {options.map(option => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
      {meta.error && meta.touched && (
        <FormErrorMessage
          size={'xs'}
          mt={'-0.5'}
          ml={'5'}
          position={'absolute'}
        >
          {meta.error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
