import "./index.css";

const Solution = (each) => {
  const { question, answer } = each;

  const renderQuestion = (question) => (
    <>
      <p className="question">{question}</p>
    </>
  );

  const renderAnswer = () => (
    <>
      <p>{answer}</p>
    </>
  );

  const findSolution = (question) => {
    const evalQues = question.split("(");
    evalQues.pop();
    const convert = (a) => {
      if (a === "zero") {
        return "0";
      } else if (a === "one") {
        return "1";
      } else if (a === "two") {
        return "2";
      } else if (a === "three") {
        return "3";
      } else if (a === "four") {
        return "4";
      } else if (a === "five") {
        return "5";
      } else if (a === "six") {
        return "6";
      } else if (a === "seven") {
        return "7";
      } else if (a === "eight") {
        return "8";
      } else if (a === "nine") {
        return "9";
      } else if (a === "plus") {
        return "+";
      } else if (a === "minus") {
        return "-";
      } else if (a === "times") {
        return "*";
      } else if (a === "divide_by") {
        return "/";
      }
    };
    let ques = "";
    evalQues.forEach((each) => {
      ques += convert(each);
    });
    // eslint-disable-next-line
    return eval(ques);
  };

  const solution = findSolution(question);

  const renderShowResult = () => {
    // eslint-disable-next-line
    const clrClass = answer == solution ? "green" : "red";
    return (
      <>
        {/* eslint-disable-next-line */}
        {answer == solution ? (
          <p className={`check-answer ${clrClass}`}>Correct</p>
        ) : (
          <p className={`check-answer ${clrClass}`}>Wrong</p>
        )}
      </>
    );
  };

  return (
    <div className="solution">
      {renderQuestion(question)}
      <div className="answer-and-check">
        {renderAnswer(answer)}
        {renderShowResult()}
      </div>
    </div>
  );
};

export default Solution;

// const operation = (a, b, c) => {
//   if (a === "dummy") {
//     if (b === 1) {
//       return c;
//     }
//   } else if (a === "plus") {
//     return c + b;
//   } else if (a === "minus") {
//     return c - b;
//   } else if (a === "product") {
//     return c * b;
//   } else if (a === "divide") {
//     return c / b;
//   }
// };

// const zero = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 0);
// };

// const one = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 1);
// };

// const two = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 2);
// };

// const three = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 3);
// };

// const four = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 4);
// };

// const five = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 5);
// };

// const six = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 6);
// };

// const seven = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 7);
// };

// const eight = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 8);
// };

// const nine = (arr = ["dummy", -1]) => {
//   const { a, b } = arr;
//   return operation(a, b, 9);
// };

// const plus = (x) => ["plus", x];

// const minus = (x) => ["minus", x];

// const times = (x) => ["product", x];

// const divide_by = (x) => ["divide", x];

// console.log(
//   zero,
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine,
//   plus,
//   minus,
//   times,
//   divide_by
// );
