import React from 'react';

const UserCard = ({ nome, idade }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{nome}</h3>
      <p>Idade: {idade}</p>
    </div>
  );
};

export default UserCard;