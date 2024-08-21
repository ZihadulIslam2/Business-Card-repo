//use state hook
import { useState } from "react";


export default function StateHook (){

    const [name, SetName ] = useState('Zihadul');
    const [age, SetAge] = useState (21)

    const handelClick =() => {
        SetName ('Zihadul Islam Tusher.'); 
        SetAge (23)
    }

/*     const handelClickAgain =(name) =>{
        console.log ('hello' + name)
    } */


    return (
    <> 
    <p className="text-white m-6">{name} and my age is {age} </p>     
      
    <button onClick={handelClick} className="bg-red-300 p-3 m-4">
            Click for full name:
        </button>

        {/* //pass in an argument
        // anarmonas function */}
{/*         <button onClick={ () => {handelClickAgain (" anarmonas function")}}>
            click it again
        </button> */}
     </>
    )
}