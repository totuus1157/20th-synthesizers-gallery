import React from "react";

type Props = {
  name: string;
  image: string;
};

const Model: React.FC<Props> = (props) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default Model;
