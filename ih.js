import React, {useState,useEffect} from 'react';
function App () {
    const [firstName, setFirstName] = useState('Khushi');
    const [lastName, setLastName] = useState('Punjabi');
    const [fullName, setFullName] = useState('');

    useEffect (()=>{
        setFullName(`${firstName},${lastName}`)
            } ,[firstName,lastName]); 
            return(
                <><><><><h1>React Hooks</h1>
                    <label>Enter Name:</label>
                    <input type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}></input></>
                    <label>Enter Last Name:</label></><input type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}></input>
                        </><p>Full Name: {fullName}</p></>
            );
}

export default App;