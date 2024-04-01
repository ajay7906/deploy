// // 



// import { useState } from 'react';
// import styles from './JobPostPage.module.css';
// import { DEFAULT_SKILLS } from '../../utils/constant';
// import { createJob } from '../../api/job';

// const JobPostPage = () => {
//     const [formData, setFormData] = useState({
//         companyName: '',
//         logoUrl: '',
//         title: '',
//         salary: '',
//         jobType: '',
//         remoteOffice: '',
//         location: '',
//         description: '',
//         aboutCompany: '',
//         skillsRequired: [],
//         duration: '',
//     });

//     const handleChange = (event) => {
//         // const { name, value } = e.target;
//         // setFormData((prevState) => ({ ...prevState, [name]: value }));
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };
//     const addSkills = (event) => {
//         const skill = event.target.value;
//         const actualSkillList = formData.skillsRequired;
//         const filteredSkills = actualSkillList.filter(
//             (element) => element === skill
//         );
//         if (!filteredSkills.length) {
//             setFormData({ ...formData, skillsRequired: [...formData.skillsRequired, skill] });
//         }
//     };

//     const removeSkill = (skill) => {
//         const actualSkillList = formData.skillsRequired;
//         const filteredSkills = actualSkillList.filter(
//             (element) => element !== skill
//         );
//         setFormData({ ...formData, skillsRequired: filteredSkills });
//     };
//     console.log(formData);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//           await createJob(formData)

//         console.log(formData);
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.left}>
//                 <div className={styles.formContainer}>
//                     <h2 className={styles.heading}>Add job description</h2>
//                     <form onSubmit={handleSubmit} className={styles.form}>
//                         <div className={styles.formGroup}>
//                             <label htmlFor="companyName" className={styles.label}>
//                                 Company Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="companyName"
//                                 name="companyName"
//                                 value={formData.companyName}
//                                 onChange={handleChange}
//                                 placeholder="Enter your company name here"
//                                 className={styles.input}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="logoURL" className={styles.label}>
//                                 Add logo URL
//                             </label>
//                             <input
//                                 type="text"
//                                 id="logoURL"
//                                 name="logoURL"
//                                 value={formData.logoUrl}
//                                 onChange={handleChange}
//                                 placeholder="Enter the link"
//                                 className={styles.input}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="jobPosition" className={styles.label}>
//                                 Job position
//                             </label>
//                             <input
//                                 type="text"
//                                 id="jobPosition"
//                                 name="jobPosition"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                                 placeholder="Enter job position"
//                                 className={styles.input}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="monthlySalary" className={styles.label}>
//                                 Monthly salary
//                             </label>
//                             <input
//                                 type="text"
//                                 id="monthlySalary"
//                                 name="monthlySalary"
//                                 value={formData.salary}
//                                 onChange={handleChange}
//                                 placeholder="Enter Amount in rupees"
//                                 className={styles.input}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <div className={styles.selectValue}>
//                                 <label htmlFor="jobType" className={styles.label}>
//                                     Job Type
//                                 </label>
//                                 <select
//                                     id="jobType"
//                                     name="jobType"
//                                     value={formData.jobType}
//                                     onChange={handleChange}
//                                     className={styles.select}
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="fullTime">Full Time</option>
//                                     <option value="partTime">Part Time</option>
//                                     <option value="contract">Contract</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className={styles.formGroup}>
//                             <div className={styles.selectValue}>
//                                 <label htmlFor="remoteOffice" className={styles.label}>
//                                     Remote/office
//                                 </label>
//                                 <select
//                                     id="remoteOffice"
//                                     name="remoteOffice"
//                                     value={formData.remoteOffice}
//                                     onChange={handleChange}
//                                     className={styles.select}
//                                 >
//                                     <option value="">Select</option>
//                                     <option value="remote">Remote</option>
//                                     <option value="office">Office</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="location" className={styles.label}>
//                                 Location
//                             </label>
//                             <input
//                                 type="text"
//                                 id="location"
//                                 name="location"
//                                 value={formData.location}
//                                 onChange={handleChange}
//                                 placeholder="Enter location"
//                                 className={styles.input}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="jobDescription" className={styles.label}>
//                                 Job Description
//                             </label>
//                             <textarea
//                                 id="jobDescription"
//                                 name="jobDescription"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 placeholder="Type the job description"
//                                 className={styles.textarea}
//                             />
//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="aboutCompany" className={styles.label}>
//                                 About Company
//                             </label>
//                             <textarea
//                                 id="aboutCompany"
//                                 name="aboutCompany"
//                                 value={formData.aboutCompany}
//                                 onChange={handleChange}
//                                 placeholder="Type about your company"
//                                 className={styles.textarea}
//                             />
//                         </div>

//                         <div className={styles.formGroupskill}>
//                             <div className={styles.labels}>
//                                 <label htmlFor="skillsRequired" className={styles.label}>
//                                     Skills Required
//                                 </label>
//                                 <div className={styles.selectskill}>
//                                     <select
//                                         id="skillrequired"
//                                         name="skillrequired"
//                                         value={formData.skillsRequired}
//                                         onChange={addSkills}
//                                         className={styles.select}
//                                     >
//                                         <option disabled selected>
//                                             Please select skills
//                                         </option>
//                                         {DEFAULT_SKILLS.map((element) => (
//                                             <option key={element}>{element}</option>
//                                         ))}
//                                     </select>
//                                     <div className={styles.skillChips}>
//                                         {formData?.skillsRequired?.map((element) => (
//                                             <div className={styles.skill} key={element}>
//                                                 <div className={styles.skillDesign}>
//                                                     <span className={styles.skillName}>
//                                                         {element}
//                                                     </span>
//                                                 </div>
//                                                 <button className={styles.closeButton} onClick={() => removeSkill(element)}>
//                                                     X
//                                                 </button>
//                                             </div>

//                                         ))}

//                                     </div>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className={styles.formGroup}>
//                             <label htmlFor="additionalInfo" className={styles.label}>
//                                 Information
//                             </label>
//                             <textarea
//                                 id="additionalInfo"
//                                 name="additionalInfo"
//                                 value={formData.duration}
//                                 onChange={handleChange}
//                                 placeholder="Enter the additional information"
//                                 className={styles.textarea}
//                             />
//                         </div>

//                         <div className={styles.buttonGroup}>
//                             <button type="button" className={styles.cancelButton}>
//                                 Cancel
//                             </button>
//                             <button type="submit" className={styles.addJobButton}>
//                                 Add Job
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className={styles.recruiterContainer}>
//                 <h2 className={styles.heading}>Recruiter add job details here</h2>
//                 {/* <div className={styles.logoContainer}>
//           <div className={styles.logo}>
//             <span className={styles.logoSymbol}>{'</'}</span>
//             <span className={styles.logoSymbol}></span>
//           </div>
//         </div> */}
//             </div>
//         </div>
//     );
// };

// export default JobPostPage;





// 



import { useState } from 'react';
import styles from './JobPostPage.module.css';
import { DEFAULT_SKILLS } from '../../utils/constant';
import { createJob } from '../../api/job';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../components/showtoast/showToast';


const JobPostPage = () => {
    const navigate = useNavigate()
    const [formDatas, setFormDatas] = useState({
        companyName: '',
        logoUrl: '',
        title: '',
        salary: '',
        jobType: '',
        locationType: '',
        location: '',
        description: '',
        aboutCompany: '',
        skills: [],
        duration: '',
        // information:''

    });

    const handleChange = (event) => {
        // const { name, value } = e.target;
        // setFormData((prevState) => ({ ...prevState, [name]: value }));
        setFormDatas({ ...formDatas, [event.target.name]: event.target.value });
    };
    const addSkills = (event) => {
        const skill = event.target.value;
        const actualSkillList = formDatas.skills;
        const filteredSkills = actualSkillList.filter(
            (element) => element === skill
        );
        if (!filteredSkills.length) {
            setFormDatas({ ...formDatas, skills: [...formDatas.skills, skill] });
        }
    };

    const removeSkill = (skill) => {
        const actualSkillList = formDatas.skills;
        const filteredSkills = actualSkillList.filter(
            (element) => element !== skill
        );
        setFormDatas({ ...formDatas, skills: filteredSkills });
    };
    console.log(formDatas);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await createJob(formDatas)
        showToast('job register successful', { type: 'success' });
        navigate('/')
        console.log(formDatas);

    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.formContainer}>
                    <h2 className={styles.heading}>Add job description</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="companyName" className={styles.label}>
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formDatas.companyName}
                                onChange={handleChange}
                                placeholder="Enter your company name here"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="logoURL" className={styles.label}>
                                Add logo URL
                            </label>
                            <input
                                type="text"
                                id="logoURL"
                                name="logoUrl"
                                value={formDatas.logoUrl}
                                onChange={handleChange}
                                placeholder="Enter the link"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="jobPosition" className={styles.label}>
                                Job position
                            </label>
                            <input
                                type="text"
                                id="jobPosition"
                                name="title"
                                value={formDatas.title}
                                onChange={handleChange}
                                placeholder="Enter job position"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="monthlySalary" className={styles.label}>
                                Monthly salary
                            </label>
                            <input
                                type="text"
                                id="monthlySalary"
                                name="salary"
                                value={formDatas.salary}
                                onChange={handleChange}
                                placeholder="Enter Amount in rupees"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.selectValue}>
                                <label htmlFor="jobType" className={styles.label}>
                                    Job Type
                                </label>
                                <select
                                    id="jobType"
                                    name="jobType"
                                    value={formDatas.jobType}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="">Select</option>
                                    <option value="fullTime">Full Time</option>
                                    <option value="partTime">Part Time</option>
                                    <option value="contract">Contract</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.selectValue}>
                                <label htmlFor="remoteOffice" className={styles.label}>
                                    Remote/office
                                </label>
                                <select
                                    id="remoteOffice"
                                    name="locationType"
                                    value={formDatas.locationType}
                                    onChange={handleChange}
                                    className={styles.select}
                                >
                                    <option value="">Select</option>
                                    <option value="remote">Remote</option>
                                    <option value="office">Office</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="location" className={styles.label}>
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formDatas.location}
                                onChange={handleChange}
                                placeholder="Enter location"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="jobDescription" className={styles.label}>
                                Job Description
                            </label>
                            <textarea
                                id="jobDescription"
                                name="description"
                                value={formDatas.description}
                                onChange={handleChange}
                                placeholder="Type the job description"
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="aboutCompany" className={styles.label}>
                                About Company
                            </label>
                            <textarea
                                id="aboutCompany"
                                name="aboutCompany"
                                value={formDatas.aboutCompany}
                                onChange={handleChange}
                                placeholder="Type about your company"
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.formGroupskill}>
                            <div className={styles.labels}>
                                <label htmlFor="skillsRequired" className={styles.label}>
                                    Skills Required
                                </label>
                                <div className={styles.selectskill}>
                                    <select
                                        id="skillrequired"
                                        name="skills"
                                        value={formDatas.skills}
                                        onChange={addSkills}
                                        className={styles.select}
                                    >
                                        <option disabled selected>
                                            Please select skills
                                        </option>
                                        {DEFAULT_SKILLS.map((element) => (
                                            <option key={element}>{element}</option>
                                        ))}
                                    </select>
                                    <div className={styles.skillChips}>
                                        {formDatas?.skills?.map((element) => (
                                            <div className={styles.skill} key={element}>
                                                <div className={styles.skillDesign}>
                                                    <span className={styles.skillName}>
                                                        {element}
                                                    </span>
                                                </div>
                                                <button className={styles.closeButton} onClick={() => removeSkill(element)}>
                                                    X
                                                </button>
                                            </div>

                                        ))}

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="additionalInfo" className={styles.label}>
                                Duration
                            </label>
                            <textarea
                                id="additionalInfo"
                                name="duration"
                                value={formDatas.duration}
                                onChange={handleChange}
                                placeholder="Enter the additional information"
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.buttonGroup}>
                            <button type="button" className={styles.cancelButton}>
                                Cancel
                            </button>
                            <button type="submit" className={styles.addJobButton}>
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.recruiterContainer}>
                <h2 className={styles.heading}>Recruiter add job details here</h2>
                {/* <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoSymbol}>{'</'}</span>
            <span className={styles.logoSymbol}></span>
          </div>
        </div> */}
            </div>
        </div>
    );
};

export default JobPostPage;