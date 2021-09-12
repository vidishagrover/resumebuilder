import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { composeWithDevTools} from 'redux-devtools-extension'

var firebaseConfig = {
  apiKey: "AIzaSyBRLKMCIXvghbTd82WAyV1yWYU2ovPypGQ",
  authDomain: "resumebuilder-55928.firebaseapp.com",
  projectId: "resumebuilder-55928",
  storageBucket: "resumebuilder-55928.appspot.com",
  messagingSenderId: "746994851685",
  appId: "1:746994851685:web:11b24ff0997f3ef675cb8c"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.firestore()

const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,  
  )
);


ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      >
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// apiKey: "AIzaSyBRLKMCIXvghbTd82WAyV1yWYU2ovPypGQ",
//   authDomain: "resumebuilder-55928.firebaseapp.com",
//   projectId: "resumebuilder-55928",
//   storageBucket: "resumebuilder-55928.appspot.com",
//   messagingSenderId: "746994851685",
//   appId: "1:746994851685:web:11b24ff0997f3ef675cb8c"