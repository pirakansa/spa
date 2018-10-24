import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import View from './components/app';
import Data from './reducers'

window.onload = ()=>{
    let userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0) {
        return alert('Can not be used in IE');
    }
    let store = createStore(Data);
    ReactDOM.render(
        <Provider store={store}>
            <View />
        </Provider>,
        document.querySelector('#content')
    );
}
