
import { useState } from 'react';
import styles from './Search.module.css';
import SearchBtn from '../../assets/search.png'
import { DEFAULT_SKILLS } from '../../utils/constant';
const Search = ({fetchAllJobs}) => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('')
  const handleChangeSkill = (value) => {
    setSelectedSkill(value)
    console.log(value);




  }

  console.log('gggg');

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
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inputSection}>

          <img src={SearchBtn} className={styles.searchbtns} alt="" />
          <input
            type="text"
            className={styles.input}
            placeholder="Type any job title"
          />
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.listSkill}>
            <select name="" id="" value={selectedSkill} onChange={(e) => handleChangeSkill(e.target.value)} onClick={handleSetSkill}>
              <option >select skill</option>
              {
                DEFAULT_SKILLS.map((skill)=>(
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

          <div>
            <button className={styles.filterButton} onClick={fetchAllJobs}>Apply Filter</button>
            <button className={styles.clearButton}>Clear</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;