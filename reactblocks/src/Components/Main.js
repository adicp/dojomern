import React from 'react';
import styles from './Components.module.css';

const Main = (props) =>{
    return (
        <div id ={styles.main}>
            <div id= {styles.subcontentchild}>
                {props.children}
            </div>

            {props.header}
        </div>
    );

};
export default Main;