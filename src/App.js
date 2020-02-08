import React from 'react';
import { connect } from 'react-redux';

import en from './translate/en';
import am from './translate/am';

console.log(en, am);

const langs = {
    am,
    en
}

const App = (props) => {
    console.log(props.language);
    
    return(
        <div> 
            <span>{langs[props.language].hello}</span>
            <div>
                <button onClick={() => props.changeLang('am')}>AM</button>
                <button onClick={() => props.changeLang('en')}>EN</button>
            </div>
        </div>
    )
};



export default connect(
    state => ({
        language: state.language.lang
    }),
    dispatch => ({
        changeLang(lang){
            dispatch({type: 'CHANGE_LANG', payload: lang});
        }
    })
)(App);