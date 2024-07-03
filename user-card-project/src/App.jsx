import "./User.css";
import user from "./User.json";
import { UserCard } from "./UserCard";

export function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
  );
}

export default App;
