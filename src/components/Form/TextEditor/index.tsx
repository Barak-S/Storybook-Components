import React, { FC, useState, useRef, useCallback } from 'react';
import { StyleProps, colors, mx } from 'styles';
import { LineAwesomeIcon, LineAwesomeIconType } from 'components/Icons';
import { View } from 'components/Common';
import { Paper, IconButton, makeStyles } from '@material-ui/core';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

import './EditorStyles/Draft.css';

interface Props extends StyleProps {
  value: string;
  onChange?: (val: string) => void;
}

interface EditorStlye {
  label: string;
  icon: LineAwesomeIconType;
}

export const FormTextEditor: FC<Props> = ({ style, value, onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(stateFromHTML(value)));
  const editor = useRef<Editor>(null);

  const focusEditor = useCallback(() => {
    if (editor.current) {
      editor.current.focus();
    }
  }, [editor]);

  const handleChange = (editorState: any) => {
    setEditorState(editorState);
    if (editorState.getCurrentContent().hasText()) {
      onChange && onChange(stateToHTML(editorState.getCurrentContent()));
    }
  };

  const _onClick = (val: string) => {
    handleChange(RichUtils.toggleInlineStyle(editorState, val));
  };

  const styles: EditorStlye[] = [
    { label: 'BOLD', icon: 'bold' },
    { label: 'ITALIC', icon: 'italic' },
    { label: 'UNDERLINE', icon: 'underline' },
  ];

  const classes = useStyles();

  return (
    <View style={style}>
      <div className={classes.styleContainer}>
        <View row>
          {styles.map(({ label, icon }) => {
            return (
              <IconButton
                key={label}
                onClick={() => _onClick(label)}
                className={classes.styleButton}
                aria-label={label}
                component="span"
              >
                <LineAwesomeIcon type={icon} />
              </IconButton>
            );
          })}
        </View>
      </div>
      <Paper className={classes.container} onClick={focusEditor}>
        <Editor ref={editor} editorState={editorState} onChange={handleChange} placeholder="Add your bio information" />
      </Paper>
    </View>
  );
};

const useStyles = makeStyles({
  container: {
    maxWidth: 1021,
    maxHeight: 213,
    height: '100%',
    width: '100%',
    position: 'relative',
    overflowY: 'auto',
    padding: 15,
    background: colors.paleGrey,
    ...mx.border(1, 'solid', colors.paleGrey),
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    cursor: 'text',
    boxShadow: 'none',
  },
  styleContainer: {
    maxWidth: 1021,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    ...mx.border(1, 'solid', colors.paleGrey),
  },
  styleButton: {
    borderRight: `1px solid ${colors.paleGrey}`,
    borderRadius: 0,
  },
});

export type FormTextEditorProps = Props;
export default FormTextEditor;
