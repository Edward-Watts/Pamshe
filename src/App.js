import './App.css';
import Layout from './hoc/Layout/Layout';

const app = () => {
  let routes = ""
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default app;
