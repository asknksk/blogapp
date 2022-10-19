import MainLayout from "../../components/MainLayout";
import Login from "./Login";
import Register from "./Register";

const LoginPage = ({ pageType }) => {
  if (pageType === "login") {
    return (
      <MainLayout>
        <Login />
      </MainLayout>
    );
  }
   else if (pageType === "register") {
    return (
      <MainLayout>
        <Register />
      </MainLayout>
    );
  }
};

export default LoginPage;
