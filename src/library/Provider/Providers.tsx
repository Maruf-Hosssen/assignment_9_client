'use client';

import { store } from '@/redux/store';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from '../Themes/theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
