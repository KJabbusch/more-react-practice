import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  const timelineItems = props.eventData.map((item) => {
    return (
      <div className="timeline">
        <TimelineEvent
          key={item.timestamp}
          author={item.person}
          status={item.status}
          timestamp={item.timestamp}
        />
      </div>
    );
  });
  return timelineItems;
};

export default Timeline;
