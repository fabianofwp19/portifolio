import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function FlagQuiz(props) {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleSubmit = () => {
    const correctAnswer = props.flags[currentFlagIndex].name.toLowerCase();

    if (input.toLowerCase() === correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Correct! 🎉");
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setFeedback(`Incorrect. The correct answer is ${correctAnswer}`);
    }

    const nextIndex = currentFlagIndex + 1;
    if (nextIndex < props.flags.length) {
      setCurrentFlagIndex(nextIndex);
    } else {
      setGameOver(true);
      setFeedback("You've completed all the flags!");
    }

    setInput("");
  };

  const restartGame = () => {
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentFlagIndex(0);
    setInput("");
    setFeedback("");
    setGameOver(false);
  };

  return (
    <Card className="project-card-view">
      {/* Displaying the flag image based on the current index */}
      <Card.Img
        variant="top"
        src={require(`../../Assets/flags/${props.flags[currentFlagIndex].file}`)}
        alt="Flag"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <Card.Body>
        <Card.Title>Guess the Flag</Card.Title>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter country name (e.g., Brazil)"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <Button variant="primary" onClick={handleSubmit} disabled={gameOver}>
          Submit
        </Button>
        {feedback && <p style={{ marginTop: "10px", fontWeight: "bold" }}>{feedback}</p>}
        <p style={{ marginTop: "10px" }}>
          Correct Answers: {correctAnswers} | Incorrect Answers: {incorrectAnswers}
        </p>
        {gameOver && (
          <Button variant="success" onClick={restartGame} style={{ marginTop: "20px" }}>
            Restart Game
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default FlagQuiz;
