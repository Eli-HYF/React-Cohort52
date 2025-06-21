const Person = ({ person }) => {
  if (!person) return null;

  return (
    <ul>
      <li>First Name: {person.firstName}</li>
      <li>Last Name: {person.lastName}</li>
      <li>Email: {person.email}</li>
      <li>Phone: {person.phone}</li>
    </ul>
  );
};


export default Person;
