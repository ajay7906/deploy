import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { getJobPostById } from "../../api/job";
import styles from "./JobDetails.module.css";
import { getJobPostById } from "../../api/job";

export default function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [jobDetails, setJobDetails] = useState({});
    const [isEditable, setIsEditable] = useState(false);
    const [isLoggedIn] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        fetchJobDetails();
    }, []);

    const fetchJobDetails = async () => {
        if (!id) return;
        const result = await getJobPostById(id);
        console.log(result.data);
        setJobDetails(result.data);
        setIsEditable(result.isEditable);
    };

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            {jobDetails ? (
                <div className={styles.body}>
                    {/* <div className={styles.nav}>
                        <p className={styles.navText}>Jobfinder</p>
                        <div className={styles.btnGrp}>
                            {isLoggedIn ? (
                                <button
                                    onClick={logout}
                                    className={styles.register}
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <button className={styles.login}>
                                        Login
                                    </button>
                                    <button className={styles.register}>
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    </div> */}
                    <header className={styles.header}>
                        <div className={styles.container}>
                            <h1 className={styles.title}>Jobfinder</h1>
                            <div className={styles.buttons}>
                                {
                                    isLoggedIn === null ?
                                        <>
                                            <Link to='/login'> <button className={`${styles.button} ${styles.login}`}>Login</button></Link>
                                            <Link to='/register'><button className={`${styles.button} ${styles.register}`}>Register</button></Link>

                                        </> :
                                        <>
                                            <Link to='/login' onClick={logout}><button className={`${styles.button} ${styles.register}`}>Logout</button></Link>
                                            <Link to=''> <button style={{ border: 'none' }} className={`${styles.button} ${styles.login}`}>{ }</button></Link>
                                        </>
                                }
                            </div>
                        </div>
                    </header>

                    <div className={styles.containerBottom}>





                        <div className={styles.containers}>
                            <p>1 week ago</p>
                          
                            <p className={styles.containerText}>
                                {jobDetails?.companyName}
                            </p>

                        </div>






                        <div className={styles.preHeading}>
                            <p className={styles.lightText}>
                                {jobDetails.jobType}
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div className={styles.heading}>
                                <div>
                                    <p
                                        style={{
                                            margin: "0px",
                                        }}
                                        className={styles.boldText}
                                    >
                                        {jobDetails.title}
                                    </p>
                                    <p className={styles.locationText}>
                                        {jobDetails.location}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {isLoggedIn  && (
                                    <button
                                        onClick={() => {
                                            navigate("/addjob", {
                                                state: {
                                                    jobDetails: jobDetails,
                                                    edit: true,
                                                },
                                            });
                                        }}
                                        className={styles.edit}
                                    >
                                        Edit Job
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={styles.perks} style={{}}>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "5px",
                                        alignItems: "center",
                                        width: "10vw",
                                        paddingRight:'2rem'
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "gray",
                                        }}
                                        className="material-symbols-outlined"
                                    >
                                       
                                    </span>
                                    <p className={styles.lightText}>Stipend</p>
                                </div>
                                <p className={styles.lightText2}>
                                    Rs.{jobDetails.salary}/month
                                </p>
                            </div>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "5px",
                                        alignItems: "center",
                                        width: "10vw",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "gray",
                                        }}
                                        className="material-symbols-outlined"
                                    >
                                       
                                    </span>

                                    <p className={styles.lightText}>Duration</p>
                                </div>

                                <p className={styles.lightText2}>
                                    {jobDetails.duration} Year 
                                </p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h2>About Company</h2>
                            <p className={styles.lightText}>
                                {jobDetails.aboutCompany}
                            </p>
                        </div>
                        <div className={styles.skillmobile } >
                            <h2>Skill(s) Required </h2><br />
                            {jobDetails?.skills?.map((skill) => {
                                return (
                                    <p className={styles.skill} key={skill}>
                                        {skill}
                                    </p>
                                );
                            })}
                        </div>
                        <div className={styles.info}>
                            <h2>Additional Information</h2>
                            <p className={styles.lightText}>
                                {jobDetails.description}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}