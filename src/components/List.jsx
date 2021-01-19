import React from 'react';
import "./list.css";

const List = ({ text, key }) => {
    return ( 
        <div className="list">
            <li className="shkrimi" key={key}> {text} </li>
        </div>
     );
}
 
export default List;