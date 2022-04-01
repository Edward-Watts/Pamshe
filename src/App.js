import './App.css';
import Layout from './hoc/layout/Layout';
import Auth from './containers/auth/Auth';

const app = () => {
  let routes = " "
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
      <Auth />
    </div>
  );
}

export default app;
