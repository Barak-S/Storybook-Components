import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactAdapter() });
