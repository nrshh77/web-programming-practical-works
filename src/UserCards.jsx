
function UserCard({ name, email, position }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Посада:</strong> {position}</p>
    </div>
  );
}

function UserCards() {
  const users = [
    { id: 1, name: 'Анна', email: 'anna@gmail.com', position: 'Дизайнер' },
    { id: 2, name: 'Олег', email: 'oleh@gmail.com', position: 'Розробник' },
    { id: 3, name: 'Марія', email: 'maria@gmail.com', position: 'Тестувальник' }
  ];

  return (
    <div className="App">
      <h1>Практична робота №7</h1>
      <h2>Картки користувачів</h2>

      <div className="users-container">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            position={user.position}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCards;
