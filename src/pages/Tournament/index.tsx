import * as React from 'react';
import * as db from '../../firebase/db';
import { withAuthorization } from '../../firebase/withAuthorization';
import { TournamentList } from './TournamentList';
import { Container } from '../../components/common/Layouts';

const ListTournamentComponent = () => {
  // const tournaments: any[] = [];

  const [tournaments, loading, error] = db.listTournaments();

  React.useEffect(() => { }, []);

  return (
    <Container>
      <h2>Tournament Page</h2>
      <p>The Home Page is accessible by every signed in user.</p>

      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {tournaments && (
          <TournamentList tournaments={tournaments} />
        )}
      </p>


    </Container>
  );
};

const authCondition = (authUser: any) => !!authUser;

export const ListTournament = withAuthorization(authCondition)(ListTournamentComponent);
