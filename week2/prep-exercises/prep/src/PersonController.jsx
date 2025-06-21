import { useEffect, useState } from 'react';
import Person from './Person';

const PersonController = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const response = await fetch('https://randomuser.me/api?results=10');
    const data = await response.json();

const formattedPeople = data.results.map((person) => ({
  firstName: person.name.first,
  lastName: person.name.last,
  email: person.email,
  phone: person.phone,
}));

    setPeople(formattedPeople);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
  <div>
    <button onClick={getPeople}>Generate 10 People</button>
    <button onClick={() => setPeople([])}>Clear All</button>

    {people.map((person, index) => (
      <Person key={index} person={person} />
    ))}
  </div>
);
};

export default PersonController;
