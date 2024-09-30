import React from "react";

const head = (props) => {
  React.useEffect(() => {
    document.title = props.title + " | Rede Social para PET";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description);
  }, [props]);
  return <></>;
};
export default head;
