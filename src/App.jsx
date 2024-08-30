import { useState } from 'react'
import './App.css'
import TriviaButton from './components/button';
import triviaData from './components/triviaData';
import ChoiceButton from './components/buttonChoices';
import scaryForestPic from './assets/images/scaryForestPic.jpg';


function App() {
  // state to track the currently selected question set
  const [ selectedSet, setSelectedSet] = useState(null);
 //state to control the visibility of the trivia card container
  const [isTriviaCardVisible, setIsTriviaCardVisible] = useState(false);
  //state to track the visibility of the main buttons container
  const [isButtonsVisible, setIsButtonsVisible] =useState(true);
  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // handler for starting the trivia quiz by selecting a question set 
  //It was setName and I changed it to selectedSet
  const handleTriviaStart =(setName) => {
    setSelectedSet(triviaData[setName]);
    setIsTriviaCardVisible(true);
    setCurrentQuestionIndex(0); //sets question index back to 0
    setUserScore(0); // sets user score back to 0
   setIsButtonsVisible(false); //this hides the main buttons once one is selected
  } 

 



  const [userScore, setUserScore] = useState(0);
  // handling the choice if correct
  const handleTriviaChoice = (choice) => {
    
    const correctAnswer = selectedSet[currentQuestionIndex].correctAnswer;
    if (choice === correctAnswer) {
      alert("Correct!");
      setUserScore(userScore +1);
    } else {
      alert("Incorrect!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedSet.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestionIndex);
    } else {
      alert('You have completed the quiz! Play again?');
      setIsTriviaCardVisible(false); // hides the trivia card container once the quiz is completed
      setIsButtonsVisible(true); //sets the main buttons visible once the quiz is completed
    }
  };

  const handleStartOver = () => {
    setUserScore(0); // sets user score back to 0
    setIsTriviaCardVisible(false);
    setIsButtonsVisible(true); //this hides the main buttons once one is selected
  }
 
  return (
    <>
      
      <div className='top'>
         <h1>Murder, Mystery and Meyheim Trivia</h1>
      </div>
      <div className='container'>
      <div className='left'>
      <img src = {scaryForestPic} width = "250" height = "700n" alt = "Scary Forest"/>
        </div>
      <div className='middle'>
        <h3>How much do you know about early murder mysteries or detective fiction? Let's test your mettle and find out.</h3>
        <p><h4 className='catagory'>Pick your catagory:</h4></p>
        <h4 className='score'>Your score is: {userScore}</h4>
        {isButtonsVisible && (
         <div className='buttons'>
         <TriviaButton label="Agatha Christie" setName = "agatha" onClick ={handleTriviaStart}/>
          <TriviaButton label ="Sherlock Holmes" setName = "sherlock" onClick ={handleTriviaStart}/>
          <TriviaButton label= "Bag of Tricks" setName = "misc" onClick ={handleTriviaStart}/> 
         </div>
        )}
        {isTriviaCardVisible && selectedSet && (

      
         <div className='triviaCard'>

      
       <h2>{selectedSet[currentQuestionIndex].question}</h2>
              <ul>
              {selectedSet[currentQuestionIndex].choices.map((choice, index) => (
                  <li key={index}>
                    <ChoiceButton choices={choice} onClick={handleTriviaChoice} />
                  </li>
                ))}
              </ul>
              <button className='nextButton' onClick={handleNextQuestion}>Next</button>
              <button className='startOver' onClick={handleStartOver}>Start Over</button>
            </div>
          )}
        </div>
      <div className='right'>
      <img src = {scaryForestPic} width = "250" height = "700" alt = "Scary Forest"/>
        </div>
      </div>
    
      
    </>
  )
}

export default App

