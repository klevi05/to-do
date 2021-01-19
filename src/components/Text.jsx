import React from 'react';
import "./text.css";


function Text ({ setInput, setGjendja, input, gjendja }){
    
    const inputHandler = (e) => {
        setInput(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setGjendja([
            ...gjendja,
            { text: input, id: Math.random() * 1000 }
        ],
        setInput(""),
        console.log(gjendja)
        )
    }

        return ( 
        <React.Fragment>
        <div className="box">
            <div className="inside-box">
                <input value={input} onChange={inputHandler} id="inputField"  className='text' type="text"/>
                <button onClick={submitHandler} className='buton'  type='submit' > Add </button>
            </div>
            
        </div> 
        </React.Fragment>
    );
};
 
export default Text;
        
     