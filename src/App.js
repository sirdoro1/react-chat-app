import Header from './components/Header';
import Chat from './components/Chat';
import AccessPage from './components/AccessPage';

function App({id, name}) {
  return (
    <div className="container-fliud">
      {/* if user.id is set display Header and Chat components else display AccessPage component */}
      {(id == null)?
        <AccessPage /> :
        <>
          <Header className="App-Header"/>
          <Chat className="App-Chat"/>
        </>
      }
    </div>
  );
}

App.defaultProps = {
  id: 1,
  name: null
};

export default App;
