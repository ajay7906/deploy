// import AmazonIcons from '../../assets/amazon.webp'
import styles from './JobList.module.css'
import Flags from '../../assets/flag.png'
import NumberOfMemeber from '../../assets/companyMemeber.png'
import { getAllJobs } from '../../api/job';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBtn from '../../assets/search.png'
import { Audio } from 'react-loader-spinner'
// import Search from '../search/Search';
import { DEFAULT_SKILLS } from '../../utils/constant';
function JobList() {
    // const tags = ['Frontend', 'CSS', 'JavaScript', 'HTML'];
    const [isLoggin] = useState(localStorage.getItem('token'));
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [token] = useState(localStorage.getItem("token"));
    const [skills, setSkills] = useState([]);
    const [title, setTitle] = useState("");
    const fetchAllJobs = async () => {
        setIsLoading(true);
        const filterSkills = skills.join(",");

        const result = await getAllJobs({ title, skills: filterSkills });
        setJobs(result?.data);
        setIsLoading(false)

    };
    console.log(jobs);
    useEffect(() => {
        fetchAllJobs();
    }, []);
    // const [skills, setSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('')
    const handleChangeSkill = (value) => {
        setSelectedSkill(value)




    }



    const handleSetSkill = () => {
        if (selectedSkill && !skills.includes(selectedSkill)) {
            setSkills([...skills, selectedSkill])
            setSelectedSkill('')

        }

    }


    const handleCloseSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.inputSection}>

                        <img src={SearchBtn} className={styles.searchbtns} alt="" />
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Type any job title"
                            onChange={(event) => setTitle(event.target.value)}
                            value={title}
                        />
                    </div>

                    <div className={styles.skillsContainer}>
                        <div className={styles.listSkill}>
                            <select name="" id="" value={selectedSkill} onChange={(e) => handleChangeSkill(e.target.value)} onClick={handleSetSkill}>
                                <option value='' disabled> skill</option>
                                {
                                    DEFAULT_SKILLS.map((skill) => (
                                        <option key={skill} >{skill}</option>
                                    ))
                                }

                            </select>
                            <div className={styles.grid}>
                                {skills.map((skill) => (
                                    <div className={styles.skill} key={skill}>
                                        <div className={styles.skillName}>
                                            <span className={styles.skillText}>{skill}</span>
                                        </div>
                                        <div className={styles.closeButton}>
                                            <span
                                                className={styles.closeIcon}
                                                onClick={() => handleCloseSkill(skill)}
                                            >
                                                X
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className={styles.responsive}>
                            <button className={styles.filterButton} onClick={fetchAllJobs}>Apply Filter</button>
                            <button onClick={() => {
                                setSkills([]);
                                setTitle("");

                            }} className={styles.clearButton}>Clear</button>
                        </div>
                    </div>

                </div>
            </div>



            <div className={styles.main}>
                {isLoading ? (
                    <div>
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="green"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div>
                ) : jobs.map((element) => (
                    <div key={element._id} className={styles.joblist}>
                        <div className={styles.jobListLeft}>
                            <div className={styles.companyIcons}>
                                <img src={element.logoUrl} alt="alt" />
                            </div>
                            <div className={styles.jobDetails}>
                                <h3>{element.title}</h3>
                                <div className={styles.salaryData}>
                                    <div className={styles.people}>
                                        <img src={NumberOfMemeber} alt="" />
                                        <p>11-50</p>
                                    </div>
                                    <div className={styles.rupees}>
                                        <p> ₹</p>
                                        <p> {element.salary}</p>
                                    </div>
                                    <div className={styles.flags}>
                                        <img src={Flags} alt="" />
                                        <p>{element.location}</p>
                                    </div>
                                </div>
                                <div className={styles.officeDetails}>
                                    <p>Office</p>
                                    <p>Full Time</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.jobListRight}>
                            <div className={styles.tags}>
                                {element.skills.map((tag, index) => (
                                    <span key={index} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className={styles.buttonstyle}>
                                <button onClick={() => navigate(`/job-details/${element._id}`)
                                } className={styles.viewDetailsButton}>View details</button>
                                {
                                    isLoggin ?
                                        <>
                                            <Link to='/addjob'><button className={styles.viewDetailsButton}>Edit Job</button></Link>
                                        </> : ' '
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default JobList