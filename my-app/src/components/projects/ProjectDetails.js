import React from "react";

const ProjectDetails = (props) => {
  const id = props.id;
  const name = props.name;
  const guests = props.guests;
  const startDate = props.startDate;
  return (
    <div key={id + 0}>
      <div key={id + 12}>
        <p key={id + 1}> id:{id} </p>
        <p key={id + 2}> name: {name} </p>
        <p key={id + 3}> guests: {guests}</p>
        <p key={id + 4}> startDate: {startDate}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
