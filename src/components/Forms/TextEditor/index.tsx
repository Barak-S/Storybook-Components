import { Editor } from '@tinymce/tinymce-react';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { Style } from 'styles';

interface Props {
  style?: Style;
  value?: string;
  onChange?: () => void;
}

export const FormTextEditor: FC<Props> = ({ value, onChange, style }) => {
  return (
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
};

export type FormTextEditorProps = Props;
export default FormTextEditor;
