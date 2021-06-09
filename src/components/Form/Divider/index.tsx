import { Divider, DividerProps } from '@material-ui/core';
import React, { FC } from 'react';

type Props = DividerProps;

export const FormDivider: FC<Props> = props => <Divider {...props} />;

export type FormDividerProps = Props;
export default FormDivider;
