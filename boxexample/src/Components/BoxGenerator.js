import React from 'react';
import styles from "./BoxGenerator.module.css";

const BoxGenerator = (props) => {

    return (
        <div key ={props.onIndex} className={ styles.boxes} style={{backgroundColor: props.onNewColor}}></div>
        
    );

};

export default BoxGenerator;