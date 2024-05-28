const Title = () => {
  const name = "Anwar";
  const profession = "Civil Engineer";

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem 2rem",
        borderRadius: "1rem",
      }}
    >
      <p>{name}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Title;
