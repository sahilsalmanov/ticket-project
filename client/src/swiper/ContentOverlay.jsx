/* eslint-disable react/prop-types */
function ContentOverlay({ item }) {
  return (
    <>
      <h2>{item.name}</h2>
      <p>
        {item.startTime} -- {item.finishTime}
      </p>
      <span>start price : {item.minimumPrice} AZN </span>
      <b>For More Information Click Here...</b>
    </>
  );
}

export default ContentOverlay;
