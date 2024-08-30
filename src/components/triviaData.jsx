import App from "../App";

const triviaData= {
    agatha: [
      {
        question: "Which Agatha Christie novel features the famous detective Hercule Poirot?",
        choices: ["The Murder of Roger Ackroyd", "Murder on the Orient Express", "Death on the Nile", "The ABC Murders"],
        correctAnswer: "Murder on the Orient Express"
      },
      {
        question: "In which novel does Miss Marple make her first appearance?",
        choices: ["The Moving Finger", "A Murder is Announced", "The Murder at the Vicarage", "4:50 from Paddington"],
        correctAnswer: "The Murder at the Vicarage"
      },
      {
        question: "Which book is often considered one of Christie's greatest mysteries and features the characters of And Then There Were None?",
        choices: ["And Then There Were None", "Crooked House", "Endless Night", "The Pale Horse"],
        correctAnswer: "And Then There Were None"
      },
      {
        question: "Which novel introduces the character of Tommy and Tuppence Beresford?",
        choices: ["The Secret Adversary", "Partners in Crime", "By the Pricking of My Thumbs", "N or M?"],
        correctAnswer: "The Secret Adversary"
      },
      {
        question: "In which novel does Agatha Christie's famous detective duo, Tommy and Tuppence, investigate a mysterious organization called 'N' or 'The Fourth Man'?",
        choices: ["The Secret Adversary", "N or M?", "The Clocks", "Postern of Fate"],
        correctAnswer: "N or M?"
      },
      {
        question: "Which novel features the murder of a wealthy heiress on a luxury cruise ship?",
        choices: ["Death on the Nile", "Evil Under the Sun", "Five Little Pigs", "Appointment with Death"],
        correctAnswer: "Death on the Nile"
      },
      {
        question: "Which book centers around the murder of a wealthy businessman in the midst of his family's gathering?",
        choices: ["Crooked House", "Endless Night", "The Hollow", "The Murder at the Vicarage"],
        correctAnswer: "Crooked House"
      },
      {
        question: "In which novel does Agatha Christie's detective, Ariadne Oliver, make her first appearance?",
        choices: ["Cards on the Table", "Mrs. McGinty's Dead", "Hallowe'en Party", "Third Girl"],
        correctAnswer: "Cards on the Table"
      },
      {
        question: "Which book features the detective duo of Superintendent Battle and Colonel Race?",
        choices: ["The Seven Dials Mystery", "The Secret of Chimneys", "The Mystery of the Blue Train", "Peril at End House"],
        correctAnswer: "The Seven Dials Mystery"
      },
      {
        question: "In which novel does Agatha Christie's detective, Parker Pyne, solve various cases related to human happiness?",
        choices: ["Parker Pyne Investigates", "The Regatta Mystery", "The Labours of Hercules", "The Mysterious Mr. Quin"],
        correctAnswer: "Parker Pyne Investigates"
      }
    ],

    sherlock: [
      {
        question: "In which novel does Sherlock Holmes make his first appearance?",
        choices: ["A Study in Scarlet", "The Sign of the Four", "The Hound of the Baskervilles", "The Valley of Fear"],
        correctAnswer: "A Study in Scarlet"
      },
      {
        question: "Which character is the arch-nemesis of Sherlock Holmes?",
        choices: ["Professor Moriarty", "Inspector Lestrade", "Mycroft Holmes", "Dr. John Watson"],
        correctAnswer: "Professor Moriarty"
      },
      {
        question: "What is the address of Sherlock Holmes' famous residence?",
        choices: ["221B Baker Street", "10 Downing Street", "221A Baker Street", "Sherlock Street"],
        correctAnswer: "221B Baker Street"
      },
      {
        question: "In which story does Sherlock Holmes fake his own death?",
        choices: ["The Final Problem", "The Adventure of the Empty House", "The Adventure of the Speckled Band", "The Hound of the Baskervilles"],
        correctAnswer: "The Final Problem"
      },
      {
        question: "Which story features the famous line, 'The game is afoot!'?",
        choices: ["The Adventure of the Abbey Grange", "The Adventure of the Blue Carbuncle", "The Adventure of the Six Napoleons", "The Adventure of the Musgrave Ritual"],
        correctAnswer: "The Adventure of the Abbey Grange"
      },
      {
        question: "Which novel features the investigation of the Baskerville family and a legendary beast?",
        choices: ["The Hound of the Baskervilles", "The Sign of the Four", "A Study in Scarlet", "The Valley of Fear"],
        correctAnswer: "The Hound of the Baskervilles"
      },
      {
        question: "Who is Sherlock Holmes' loyal companion and friend?",
        choices: ["Dr. John Watson", "Inspector Gregson", "Inspector Lestrade", "Professor Moriarty"],
        correctAnswer: "Dr. John Watson"
      },
      {
        question: "What is the name of Sherlock Holmes' brother, who is also exceptionally intelligent?",
        choices: ["Mycroft Holmes", "James Moriarty", "Gregory Lestrade", "John Watson"],
        correctAnswer: "Mycroft Holmes"
      },
      {
        question: "In which story does Sherlock Holmes investigate the mysterious disappearance of a racehorse?",
        choices: ["Silver Blaze", "The Adventure of the Engineer's Thumb", "The Adventure of the Copper Beeches", "The Adventure of the Priory School"],
        correctAnswer: "Silver Blaze"
      },
      {
        question: "Which case involves the theft of a blue gemstone from a Christmas goose?",
        choices: ["The Adventure of the Blue Carbuncle", "The Adventure of the Beryl Coronet", "The Adventure of the Speckled Band", "The Adventure of the Musgrave Ritual"],
        correctAnswer: "The Adventure of the Blue Carbuncle"
      }
    ],
    misc: [
      {
        question: "Which Edgar Allan Poe story features a man who exacts revenge by walling up his victim in a catacomb?",
        choices: ["The Cask of Amontillado", "The Tell-Tale Heart", "The Pit and the Pendulum", "The Masque of the Red Death"],
        correctAnswer: "The Cask of Amontillado"
      },
      {
        question: "Which Wilkie Collins novel is considered one of the first mystery novels and features a complex plot surrounding a missing diamond?",
        choices: ["The Moonstone", "The Woman in White", "No Name", "Armadale"],
        correctAnswer: "The Moonstone"
      },
      {
        question: "In which Mary Roberts Rinehart novel does a mysterious killer known as 'The Bat' terrorize a group of people in a country house?",
        choices: ["The Bat", "The Circular Staircase", "The Door", "The Yellow Room"],
        correctAnswer: "The Bat"
      },
      {
        question: "Which Poe poem features a grieving man who is visited by a talking raven?",
        choices: ["The Raven", "Annabel Lee", "The Bells", "A Dream Within a Dream"],
        correctAnswer: "The Raven"
      },
      {
        question: "Which Wilkie Collins novel involves a woman who is manipulated into an insane asylum?",
        choices: ["The Woman in White", "The Law and the Lady", "No Name", "Armadale"],
        correctAnswer: "The Woman in White"
      },
      {
        question: "Which Edgar Allan Poe story involves a detective named C. Auguste Dupin solving the murder of two women in Paris?",
        choices: ["The Murders in the Rue Morgue", "The Purloined Letter", "The Gold-Bug", "The Mystery of Marie Rogêt"],
        correctAnswer: "The Murders in the Rue Morgue"
      },
      {
        question: "Which Mary Roberts Rinehart novel is famous for the quote 'The butler did it'?",
        choices: ["The Door", "The Circular Staircase", "The Bat", "The Window at the White Cat"],
        correctAnswer: "The Door"
      },
      {
        question: "Which Wilkie Collins novel features a mysterious woman in white who appears to be linked to a family secret?",
        choices: ["The Woman in White", "The Moonstone", "No Name", "Man and Wife"],
        correctAnswer: "The Woman in White"
      },
      {
        question: "Which Edgar Allan Poe short story involves a man's descent into madness as he is haunted by the sound of a beating heart?",
        choices: ["The Tell-Tale Heart", "The Fall of the House of Usher", "The Black Cat", "The Pit and the Pendulum"],
        correctAnswer: "The Tell-Tale Heart"
      },
      {
        question: "Which Mary Roberts Rinehart novel is considered a classic locked-room mystery?",
        choices: ["The Circular Staircase", "The Bat", "The Man in Lower Ten", "The Yellow Room"],
        correctAnswer: "The Circular Staircase"
      }
    ]
  };

    export default triviaData;