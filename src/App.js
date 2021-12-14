import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";

function App() {
  // console.log("The value of timelineData is", timelineData);
  // console.log("We should use timelineData in our project somehow...");

  return (
    <section className="Hero">
      <Timeline eventData={timelineData.events} />
    </section>
  );
}

export default App;
