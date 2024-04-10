import { Col, Row, Select } from 'antd'
import React from 'react'
import UserInfo from '../../components/userInfo'
import styles from "../newTest/NewTest.module.scss"

export default function NewTopic() {
  return (
    <div className={styles.wrap}>
    <Row gutter={30} className={styles.row} justify={"space-between"}>
        <Col span={4} >
            <UserInfo />
        </Col>
        <Col span={20}>
            <div className={styles.topic}>
                <div>
                    <p className={styles.pageTitle}>Thêm mới topic</p>
                    <p className={styles.subTitle}><span style={{color: "#666161"}}>Home</span> {">"}  <span style={{color: "#666161"}}>List topic manager</span> {">"} New topic</p>
                    <div className={styles.testSetting}>
                        <div className={styles.settingItemWrap}>
                            <p className={styles.title}>Topic name:</p>
                            <input className={styles.input} />
                        </div>
                        <div className={styles.settingItemWrap}>
                            <p className={styles.title}>Description:</p>
                            <input className={styles.input} />
                        </div>
                        <div className={styles.settingItemWrap}>
                            <div className={styles.settingItem}>
                                <p className={styles.title}>Difficult:</p>
                                <Select
                                    className={styles.select}
                                    defaultValue="Difficult"
                                >
                                    <Select.Option value={"Easy"}>Easy</Select.Option>
                                    <Select.Option value={"Difficult"}>Difficult</Select.Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.btnWrap}>
                    <button className={styles.btn}>Add new</button>
                </div>
            </div>
        </Col>
    </Row>
    </div>
  )
}
