
import { useState } from 'react'
import styles from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../api/auth'
import { toast } from 'react-toastify'
import { showToast } from '../../components/showtoast/showToast'

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""


    })
    const [checkedValue, setCheckedValue] = useState(false);
    const navigate = useNavigate()
    const onChangeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }
    const onCheckValue = () => {
        if (checkedValue === false) {
            setCheckedValue(true)


        }
        else {
            setCheckedValue(false)
        }

    }
    const onSubmitData = async () => {
        if (!checkedValue) {
            showToast('check the box!', { type: 'error' });

        }
        else {
           
            const responce = await registerUser(formData)
            console.log(responce.success);
            if (responce.success) {
                 showToast('register successful', { type: 'success' });
                 localStorage.setItem('NameData', formData.name)
                 console.log(formData);
                 navigate('/login')

                
            }
            else{
                 showToast(responce.errorMessage, { type: 'error' });
                 console.log(responce.errorMessage);
            }
        }

    }
    
    console.log(formData);
    console.log('hhhg');

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Create an account</h2>
                    <p>Your personal job finder is here</p>
                    <input type="text" placeholder='name' name='name' onChange={onChangeValue} />
                    <input type="text" placeholder='email' name='email' onChange={onChangeValue} />
                    <input type="text" placeholder='password' name='password' onChange={onChangeValue} />
                    <input type="text" placeholder='mobile' name='mobile' onChange={onChangeValue} />

                    <div className={styles.checkbox}>
                        <input type="checkbox" onChange={onCheckValue} name='checked' />
                        <label >By creating an account, I agree to our terms of use and privacy policy</label><br></br>

                    </div>
                    <button onClick={onSubmitData}>Create Account</button>
                    <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Your Personal Job Finder</h2>
            </div>
        </div>
    )
}

export default Register