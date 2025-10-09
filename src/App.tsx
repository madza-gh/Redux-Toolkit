import { Provider } from "react-redux"

import {store} from './store/store'

function app(){
  return <Provider store={store}>
    <div>app</div>
  </Provider>
}

export default app