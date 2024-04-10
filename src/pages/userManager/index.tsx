import { Col, Image, Pagination, Row } from 'antd'
import React from 'react'
import Filter from '../../components/Filter'
import UserInfo from '../../components/userInfo'
import styles from "./Usermanager.module.scss"

export default function UserManager() {
  return (
    <div className={styles.wrap}>
        <Row gutter={30} className={styles.row} justify={"space-between"}>
            <Col span={4} >
                <UserInfo />
            </Col>
            <Col span={20}>
                <div className={styles.user}>
                    <p className={styles.title}>Home {">"} User Manager</p>
                    <Filter name='New user'/>
                    <p className={styles.title}>Tổng số tài khoản: 85</p>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Username: nguyenvanhuy@gmail.com</p>
                                <p className={styles.accountText}>Name: Nguyen Van Huy</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <Pagination 
                        defaultCurrent={1}
                        pageSize={6}
                        total= {60}
                        style={{textAlign: "center", marginTop: "40px"}}
                    />
                </div>
            </Col>
        </Row>
        
    </div>
  )
}
