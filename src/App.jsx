import { Layout } from "antd";
import AppRoutes from "./services/appRoutes";
import Navbar from "./views/shared/navbar";
import Footer from "./views/shared/footer";


function App() {
  const { Content } = Layout
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRoutes />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
