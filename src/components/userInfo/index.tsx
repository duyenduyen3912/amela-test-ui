import { Image } from 'antd'
import React from 'react'
import styles from "./UserInfo.module.scss"
export default function UserInfo() {
  return (
    <div className={styles.user}>
        <div className={styles.userInfo}>
            <Image src={require("../../assets/user.png")} preview={false} className={styles.avatar} width={180}/>
            <div className={styles.item}>
                <Image src={require("../../assets/icon_user.png")} preview={false} className={styles.icon}/>
                <p className={`${styles.name} ${styles.active}`}>User Manager</p>
            </div>
            <div className={styles.item}>
                <Image src={require("../../assets/question.png")} preview={false} className={styles.icon}/>
                <p className={styles.name}>Test Manager</p>
            </div>
            <div className={styles.item}>
                <Image src={require("../../assets/graduate.png")} preview={false} className={styles.icon}/>
                <p className={styles.name}>Test Quiz </p>
            </div>
        </div>
        <button className={styles.logoutBtn}>
                LOGOUT
        </button>
    </div>
  )
}
