import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashProfile from '../Component/DashProfile';
import DashSidebar from '../Component/DashSidebar';
import DashPosts from '../Component/DashPost';
import DashUsers from '../Component/DashUsers';
import DashComments from '../Component/DashComment';
import DashboardComp from '../Component/DashComp';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row dark:text-white'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  )
}

export default Dashboard
