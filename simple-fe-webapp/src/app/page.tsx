import { User } from "@/interfaces/user.interface";

export default function Home() {
  
  const userToShow : User = {
    name : 'John',
    lastName : 'Doe',
    phone : '+1-555-123',
    age: 32
  };
  
  return (
    <div>
      <span>
        { JSON.stringify(userToShow) }
      </span>
    </div>
  );
}
