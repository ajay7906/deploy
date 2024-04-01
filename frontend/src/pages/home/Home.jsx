
import { useEffect, useState } from 'react'
import JobList from '../../components/joblist/JobList'
import Layout from '../../components/layout/Layout'
import Navbar from '../../components/navbar/Navbar'
import Search from '../../components/search/Search'
import { getAllJobs } from '../../api/job'



function Home() {
  const  [isLoggin] = useState(localStorage.getItem('token'));
//   const navigate = useNavigate();
//   const [jobs, setJobs] = useState([]);
//   const [token] = useState(localStorage.getItem("token"));
//   const [skills, setSkills] = useState([]);
//   const [title, setTitle] = useState("");
//   const fetchAllJobs = async () => {
//     const filterSkills = skills.join(",");
//     const result = await getAllJobs({ title, skills: filterSkills });
//     setJobs(result?.data);
//     console.log(jobs);
// };

// useEffect(() => {
//     fetchAllJobs();
// }, []);
  console.log(isLoggin);
  return (
    <div>
      <Layout isLoggin={isLoggin}>
       
       
        <JobList />
       
      </Layout>




    </div>
  )
}

export default Home