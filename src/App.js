import Quiz from "./Quiz";
import { QuizProvider } from "./Context";
import "./index.css";
const App = () => {
  return (
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
  );
};

export default App;
