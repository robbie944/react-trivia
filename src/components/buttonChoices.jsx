import triviaData from "./triviaData";

const ChoiceButton =({choices, onClick})=>{
    return (
        <button className="choices" onClick={()=> onClick(choices)}> 
        {choices}
        </button>
    )
}

export default ChoiceButton;