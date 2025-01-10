import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div className="min-h-screen  w-full px-8 items-center justify-center bg-black fira-code overflow-hidden">
      <h1 className="text-center font-roboto-mono font-bold text-5xl text-white mb-8">
        Timeline
      </h1>

      <VerticalTimeline>
        {/* <h1 className="text-center font-roboto-mono font-bold text-5xl text-white mb-8">Timeline</h1> */}

        {/* Timeline Element 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px  solid #39FF14",
            color: "white",
            background: "black",
          }}
          // date="15/02/2024"
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            16/02/2024
          </h3>
          <h3 className="vertical-timeline-element-title text-xl">
            Presentation Submission Opens
          </h3>
        </VerticalTimelineElement>

        {/* Timeline Element 2 */}
        <VerticalTimelineElement
          className=""
          contentStyle={{
            border: "3px  solid white",
            color: "#39FF11",
            background: "black",
          }}
          // date="03/03/2024"
          style={{ color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            03/03/2024
          </h3>
          <h3 className="vertical-timeline-element-title text-xl">
            Presentation Submission Deadline
          </h3>
        </VerticalTimelineElement>

        {/* Timeline Element 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px  solid #39FF14",
            color: "white",
            background: "black",
          }}
          // date="05/03/2024"
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            05/03/2024
          </h3>
          <h3 className="vertical-timeline-element-title text-xl">
            Presentation Round Results Announcement
          </h3>
        </VerticalTimelineElement>

        {/* Timeline Element 4 */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px  solid white",
            color: "#39FF11",
            background: "black",
          }}
          // date="11/03/2024 - 12/03/2024"
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            11/03/2024 - 12/03/2024
          </h3>

          <h3 className="vertical-timeline-element-title text-xl">
            Hackathon Event
          </h3>
        </VerticalTimelineElement>
        {/* Timeline Element 5 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            border: "2px  solid #39FF14",
            color: "white",
            background: "black",
          }}
          // date="12/03/2024"
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">
            12/03/2024
          </h3>
          <h3 className="vertical-timeline-element-title text-xl">
            Results Announcement
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
