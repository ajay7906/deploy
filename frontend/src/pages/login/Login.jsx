
import { useState } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/auth';
import { showToast } from '../../components/showtoast/showToast';
import { ColorRing } from 'react-loader-spinner'
function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loadSubmit, setLoadSubmit] = useState(false)
    const navigate = useNavigate()
    const onChangeValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    //submit function
    console.log(formData);
    const onSubmitData = async () => {

        // const responce = await loginUser(formData)
        // setLoadSubmit(true)
        // if (responce.success) {

        //     showToast('login successful', { type: 'success' });

        //     navigate('/')
        // }

        setLoadSubmit(true);
        try {
            const response = await loginUser(formData);
            if (response.success) {
                showToast('Login successful', { type: 'success' });
                navigate('/');
            } else {
                showToast('Login failed', { type: 'error' });
            }
        } catch (error) {
            showToast('An error occurred', { type: 'error' });
        } finally {
            setLoadSubmit(false);
        }



    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Already have an account?</h2>
                    <p>Your personal job finder is here</p>

                    <input type="text" placeholder='email' name='email' onChange={onChangeValue} />
                    <input type="text" placeholder='password' name='password' onChange={onChangeValue} />



                    {
                        loadSubmit ? <><button onClick={onSubmitData}>
                            <ColorRing
                                visible={true}
                                height="50"
                                width="80"
                                ariaLabel="color-ring-loading"
                                wrapperStyle={{}}
                                wrapperClass="color-ring-wrapper"
                                colors={['#002D62', '#72A0C1', '#0000FF', '#0000FF', '#00308F']} />
                        </button></> : <><button onClick={onSubmitData}>
                            Sign In

                        </button></>
                    }
                    <p>Don’t have an account? <Link to='/register'>Sign Up</Link></p>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Your Personal Job Finder</h2>
            </div>
        </div>
    )
}

export default Login