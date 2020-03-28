import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div>
      <div>
        <p>lorem ipsum detail project - {id} </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
