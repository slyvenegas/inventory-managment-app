import Sidebar from "../components/sidebar";

export default async function DashboardPage() {
    return  <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
    </div>;
}