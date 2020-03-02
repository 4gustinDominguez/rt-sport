import * as React from 'react';

interface InterfaceProps {
  tournaments?: any;
}

export const TournamentList = ({ tournaments }) => {

  return (
    <>
      <h2>List of tournament</h2>
      <ul>

        {tournaments.docs.map(doc => (
          <li key={doc.id}>{doc.data().name} </li>
        ))}

      </ul>
    </>
  )

};