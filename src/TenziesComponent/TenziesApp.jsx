import React from "react";
import Die from "./Die";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";

export default function TenziesApp() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((dice) => dice.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((dice) => dice.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((dice) => {
          return dice.isHeld ? dice : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const diceElements = dice.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main className="bg-white h-400 max-w-800 rounded-5 p-20 flex flex-col justify-center items-center">
      {tenzies && <Confetti />}
      <h1 className="font-bold text-xl">Tenzies</h1>
      <p className="py-5">
        Roll until all dice are the same. Click each dice to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-rows-3 grid-cols-5  gap-10">{diceElements}</div>
      <button
        onClick={rollDice}
        className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
