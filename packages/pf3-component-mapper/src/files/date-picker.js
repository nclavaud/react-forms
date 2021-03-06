import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../common/form-wrapper';
import { DateTimePicker } from '../form-fields/date-time-picker/date-time-picker';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

const DatePicker = (props) => {
  const { meta, validateOnMount, label, hideLabel, isRequired, helperText, description, input, inputAddon, ...rest } = useFieldApi(props);
  return (
    <FormGroup
      meta={meta}
      validateOnMount={validateOnMount}
      label={label}
      hideLabel={hideLabel}
      isRequired={isRequired}
      helperText={helperText}
      description={description}
      inputAddon={inputAddon}
    >
      <DateTimePicker pristine={meta.pristine} onChange={input.onChange} value={input.value} {...rest} />
    </FormGroup>
  );
};

DatePicker.propTypes = {
  meta: PropTypes.object,
  validateOnMount: PropTypes.bool,
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  helperText: PropTypes.node,
  description: PropTypes.node,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  inputAddon: PropTypes.shape({ fields: PropTypes.array })
};

export default DatePicker;
