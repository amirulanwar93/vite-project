// import Cat from "./components/Cat";
import Title from "./components/Title";

function App() {
  const familyName = "De Sauza";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Title
        name={`Anwar ${familyName}`}
        role="Civil Engineer"
        meow={() => console.log("meow")}
      />
      <Title
        name={`Ali Azizi ${familyName}`}
        role="Product Manager"
        isManager={true}
      />
      <Title name={`Atif ${familyName}`} role="Frontend Developer" />
      <Title name={`Sidiq ${familyName}`} role="Project Manager" />

      <Title
        name={`Fatin ${familyName}`}
        role="System Analyst"
        isManager={true}
      />
      {/* <Cat /> */}
    </div>
  );
}

export default App;
