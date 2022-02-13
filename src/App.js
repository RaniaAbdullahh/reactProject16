import UserInfo from "./Components/UserInfo";
import MemesList from "./Components/MemesList";
import memesData from "./data/data.json";
function App() {
  return (
    <>
      <h1 style={{ color: "blue" }}>Hello React Users</h1>
      <p>this is my first react app</p>
      <UserInfo name="Barham" Food="Mansaf" favColor="red" />
      <MemesList myData={memesData} />
    </>
  );
}

export default App;
