import React from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import './App.css';

const ROOM_CREATION_MUTATION = gql`
  mutation createRoom($name: String!) {
    createRoom(name: $name) {
      room {
        id
        name
      }
    }
  }
`;

function App() {
  const [createRoom, { data, error, loading }] = useMutation(
    ROOM_CREATION_MUTATION
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const element = event.currentTarget.elements[0] as HTMLInputElement;

    createRoom({ variables: { name: element.value } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.warn('ERROR: ', error);
      });

    event.preventDefault();
  };

  return (
    <div className="App">
      <GitHubForkRibbon
        href="//www.google.com"
        target="_blank"
        position="right"
      >
        Fork me on GitHub
      </GitHubForkRibbon>
      <h1>P2P Chat</h1>
      <h2>No logins. No tracking. Free forever.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g. standup meeting" required />
      </form>
      <p>Built with love by Harry Adel</p>
    </div>
  );
}

export default App;
