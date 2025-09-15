import type { FormInstance } from 'rc-field-form';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { NamePath, EventArgs } from 'rc-field-form/lib/interface';
import React from 'react';

import { usePersistFn } from '../hooks';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RenderChildren<Values = any> = (
  form: FormInstance<Values>,
) => React.ReactNode;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormItemProps<Values = any> extends RcFieldProps<Values> {
  children?: ChildrenType<Values>;
}

const hasValidName = (name?: NamePath): boolean => {
  return !(name === undefined || name === null);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FormItem<Values = any>(
  props: FormItemProps<Values>,
): React.ReactElement {
  const { children, ...restProps } = props;

  const hasName = hasValidName(restProps.name);
  const isRenderProps = typeof children === 'function';
  const getValueFromEvent = usePersistFn((...args: EventArgs) => {
    const event = args[0];
    const valuePropName = props.valuePropName || 'text';
    if (
      event?.nativeEvent &&
      typeof event.nativeEvent === 'object' &&
      valuePropName in event.nativeEvent
    ) {
      return event.nativeEvent[valuePropName];
    }

    return event;
  });

  return (
    <Field
      {...restProps}
      getValueFromEvent={props.getValueFromEvent || getValueFromEvent}>
      {!hasName &&
      (restProps.shouldUpdate || restProps.dependencies) &&
      isRenderProps
        ? (_, __, context) => (children as RenderChildren)(context)
        : (children as React.ReactElement)}
    </Field>
  );
}

export default FormItem;
