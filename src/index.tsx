import './index.css';

import React, { FC } from 'react';
import ReactDOM from 'react-dom';

const AppContainer: FC = () => <div>{'Hello'}</div>;

ReactDOM.render(<AppContainer />, document.getElementById('app'));
