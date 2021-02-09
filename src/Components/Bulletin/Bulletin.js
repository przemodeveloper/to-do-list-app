import React, { useState } from 'react';

const Bulletin = ({ id, title, list, captureInput, captureSingleTask, addTask, deleteCard }) => {

    const [inputOn, setInputOn] = useState(false);

    return(
        <div>
            {!inputOn ? <h1 onClick={() => setInputOn(!inputOn)}>{title}</h1> 
            : 
            <div>
                <input type="text" onChange={(event) => captureInput(event, id)} name="title" value={title}/>
                <button onClick={() => setInputOn(!inputOn)}>Change title</button>
            </div>}
            {list.map(element => {
                return <p>{element}</p>
            })}
            <div>
                <input type="text" onChange={captureSingleTask} name="title" />
                <button onClick={() => addTask(id)}>+</button>
            </div>
            <button onClick={() => deleteCard(id)}>Delete</button>
        </div>
    )
}

export default Bulletin;