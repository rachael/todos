import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Layout } from 'components/Layout';
import { Todos } from 'components/Todos';
import reducer from 'redux/reducers';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Todos />
      </Layout>
    </Provider>
  )
}

export default App;
