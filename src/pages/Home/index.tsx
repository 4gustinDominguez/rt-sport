import * as React from 'react';
import * as db from '../../firebase/db';
import { withAuthorization } from '../../firebase/withAuthorization';
import { UserList } from './UserList';
import { Container } from '@components';

class HomeComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      users: null,
    };
  }

  public componentDidMount() {
    db.onceGetUsers().then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }

  public render() {
    const { users }: any = this.state;

    return (
      <Container>
        <h2>Home Page</h2>
        <p>The Home Page is accessible by every signed in user.</p>
        {!!users && <UserList users={users} />}
      </Container>
    );
  }
}

const authCondition = (authUser: any) => !!authUser;

export const Home = withAuthorization(authCondition)(HomeComponent);
