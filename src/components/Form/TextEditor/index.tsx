import { Editor } from '@tinymce/tinymce-react';
import { View } from 'components/Common';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends StyleProps {
  value?: string;
  onChange?: (val: string) => void;
}

export const FormTextEditor: FC<Props> = ({ style, value, onChange }) => {
  return (
    <View style={style}>
      <Editor
        value={value || ''}
        // init={{
        //   mobile: {
        //     theme: 'mobile',
        //   },
        // }}
        onChange={e => onChange && onChange(e.target.getContent())}
      />
    </View>
  );
};

export type FormTextEditorProps = Props;
export default FormTextEditor;
