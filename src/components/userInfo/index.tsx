import { Image } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./UserInfo.module.scss"
export default function UserInfo() {
    const navigate = useNavigate()
  return (
    <div className={styles.user}>
        <div className={styles.userInfo}>
            <Image src={require("../../assets/user.png")} preview={false} className={styles.avatar} width={180} onClick={() => navigate('/topic-manager')}/>
            <div className={styles.item}>
                <Image src={require("../../assets/icon_user.png")} preview={false} className={styles.icon} />
                <p className={`${styles.name} ${styles.active}`} onClick={() => navigate('/user-manager')}>User Manager</p>
            </div>
            <div className={styles.item} onClick={() => navigate('/test-manager')}>
                <Image src={require("../../assets/question.png")} preview={false} className={styles.icon}/>
                <p className={styles.name}>Test Manager</p>
            </div>
            <div className={styles.item} onClick={() => navigate('/question-manager')}>
                <Image src={require("../../assets/graduate.png")} preview={false} className={styles.icon} />
                <p className={styles.name}>Test Quiz </p>
            </div>
        </div>
        <button className={styles.logoutBtn}>
                LOGOUT
        </button>
    </div>
  )
}
