import React from 'react';
import "./textBox.css";
import List from "./List";

function TextBox({gjendja}){  
        return (
            <div className='container'>
                <ul>
                    {gjendja.map( (gjendje) => ( 
                        <List key={gjendje.id} text={gjendje.text} />
                    ) )}
                </ul>
            </div>
        );
};
 
export default TextBox;