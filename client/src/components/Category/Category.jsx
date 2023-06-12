/* eslint-disable react/prop-types */
export default function Category({ title }) {
  if(title.includes("atre")) {
    const temp = title.split("h").join("he")
    title = temp;
  }
  return (
    <h2 style={{ color: "#fff" }} id={title}>
      {title.toUpperCase()}
    </h2>
  );
}
