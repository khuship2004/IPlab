import React, {useEffect,useState} from 'react';

const fetchUserData = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout (() =>{
        const success = true;
        if (success){
            resolve({name: 'khushi', age:'19'});
        }
        else{
            reject('Failed');
        }
    },2000);
    }) ;
};

const App = () => {
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect (() =>{
        fetchUserData()
        .then((data) =>{
            setUserData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    },[]);


        if (loading){
            return <div>Loading..</div>
        }
        if (error){
          return  <div>
                Error:{error}
            </div>
        }
        return(
            <div>
<h1> User Information</h1>
<p>
    Name:{userData.name}
</p>
<p>
    Age:{userData.age}
</p>
            </div>
            

        )

    }
    export default App;
