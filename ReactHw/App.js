import { getData } from "./getData";

function App() {
  getData(1).then((res) =>
   console.log(res.getUser.data, res.getPost.data));

}

export default App;
