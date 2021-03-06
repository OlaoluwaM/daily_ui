import themeObj from './context/theme';
import CreditCardPage from './challenges/02/index';

import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={themeObj}>
      <LazyMotion features={domAnimation}>
        <>
          <Suspense fallback={<p>Loading</p>}>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/'>
                <CreditCardPage />
              </Route>
            </Switch>
          </Suspense>
        </>
      </LazyMotion>
    </ThemeProvider>
  );
}
