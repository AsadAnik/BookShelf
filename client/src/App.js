import React from 'react';
import axios from 'axios';

function App() {

    React.useEffect(() => {
        axios.get("/api/getBook?id=612a091f03c12607c489f27c")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err.message));
    }, []);

    console.log('Hello world');

  return (
      <React.Fragment>
        <h1>Hello React | Node World!</h1>
      </React.Fragment>
  );
}

export default App;
