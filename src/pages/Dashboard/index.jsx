import MainLayout from "../../components/MainLayout";
import Blogs from "./Blogs";

const Dashboard = ({ pageType }) => {
  return (
    <MainLayout pageType={pageType}>
      <Blogs />
    </MainLayout>
  );
};

export default Dashboard;
