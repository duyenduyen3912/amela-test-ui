import { Drawer, DrawerProps, Image, RadioChangeEvent } from 'antd'
import React, { useState } from 'react'
import UserInfo from '../userInfo';
import styles from "./Header.module.scss"
export default function Header({title}: {title: string}) {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };
  return (
    <>
        <div className={styles.headerWrap} id="menu">
            <div className={styles.header}>
                    <Image src={require("../../assets/header.png")} preview={false} onClick={showDrawer}/>
            <div className={styles.headerName}>{title}</div>
            </div>
            
        </div>
        <Drawer 
            className={styles.user} 
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
        >
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
        </Drawer>
    </>
    
  )
}
