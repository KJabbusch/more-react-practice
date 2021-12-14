import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = (props) => {
  return (
    <div className="timeline-event">
      <article classname="event-status">
        <h4>Message:</h4>
        {props.status}
      </article>
      <article className="event-time">
        Posted: <Timestamp time={props.timestamp} />
      </article>
      <article className="event-person">Author: {props.author}</article>
    </div>
  );
};

// TimelineEvent.propTypes = {
//   status: Proptypes.string.isRequired,
//   time: Proptypes.string.isRequired,
//   author: Proptypes.string.isRequired,
// };

export default TimelineEvent;
