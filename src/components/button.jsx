/*import App from "../App";*/

import triviaData from "./triviaData";



const TriviaButton = ({label,setName,onClick}) =>{
    return (
        <button className="trivia-button" onClick={()=> onClick(setName)}> 
            {label} 
         </button>
     );
    };
    
    
   
    

 


export default TriviaButton;
