import InterestedPage from "./Components/InterestedPage";
import Intro from "./Components/Intro";
import LearningPathPage from "./Components/LearningPathPage";
import MathPage from "./Components/MathPage";
import RightPlacePage from "./Components/RightPlacePage";
import YourAnswersPage from "./Components/YourAnswersPage";
import YourWayPage from "./Components/YourWayPage";



function App() {
  return (
    <div>
      <Intro/>
      <InterestedPage/>
      <RightPlacePage/>
      <MathPage/>
      <YourWayPage/>
      <LearningPathPage/>
      <YourAnswersPage/>
    </div>
  );
}

export default App;
