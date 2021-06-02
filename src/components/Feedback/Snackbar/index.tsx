import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { createContext, FC, useContext, useMemo, useState } from 'react';

interface SnackbarContext {
  showSnackbar: (msg: string, type: SnackbarMsgType) => void;
}

type SnackbarMsgType = 'success' | 'info' | 'warning' | 'error';

const Context = createContext<SnackbarContext | undefined>(undefined);

const mockFn = () => {
  throw new Error('Mock function');
};

export const useSnackbar = (): SnackbarContext => {
  const val = useContext(Context);
  return val ? val : { showSnackbar: mockFn };
};

export const SnackbarProvider: FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [curType, setCurType] = useState<SnackbarMsgType>('success');

  const showSnackbar = (msg: string, type: SnackbarMsgType = 'success') => {
    setText(msg);
    setCurType(type);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const value = useMemo(() => ({ showSnackbar }), []);

  return (
    <Context.Provider value={value}>
      {children}
      <Snackbar open={visible} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={curType}>
          {text}
        </MuiAlert>
      </Snackbar>
    </Context.Provider>
  );
};
