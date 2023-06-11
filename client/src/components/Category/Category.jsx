/* eslint-disable react/prop-types */
export default function Category({ title }) {
  return (
    <h2 style={{ color: "#fff" }} id={title}>
      {title.toUpperCase()}
    </h2>
  );
}
