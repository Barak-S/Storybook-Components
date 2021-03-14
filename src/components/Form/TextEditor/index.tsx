import { Editor } from '@tinymce/tinymce-react';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  value?: string;
  onChange?: () => void;
}

export const FormTextEditor: FC<Props> = ({ value, onChange, style }) => (
  <View style={style}>
    <Editor
      value={value}
      init={{
        mobile: {
          theme: 'mobile',
        },
      }}
      onChange={onChange}
    />
  </View>
);

export type FormTextEditorProps = Props;
export default FormTextEditor;
