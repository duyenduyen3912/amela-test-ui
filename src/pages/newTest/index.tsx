import { Checkbox, Col, Image, Pagination, Row, Select } from 'antd'
import React from 'react'
import UserInfo from '../../components/userInfo'
import styles from "./NewTest.module.scss"
export default function NewTest() {
  return (
    <div className={styles.wrap}>
    <Row gutter={30} className={styles.row} justify={"space-between"}>
        <Col span={4} >
            <UserInfo />
        </Col>
        <Col span={20}>
            <div className={styles.test}>
                <p className={styles.pageTitle}>Thêm mới test</p>
                <p className={styles.subTitle}><span style={{color: "#666161"}}>Home</span> {">"}  <span style={{color: "#666161"}}>Test quiz manager</span> {">"} new test</p>
                <div className={styles.testSetting}>
                    <div className={styles.settingItemWrap}>
                        <p className={styles.title}>Test name:</p>
                        <input className={styles.input} />
                    </div>
                    <div className={styles.settingItemWrap}>
                        <div className={styles.settingItem}>
                            <p className={styles.title}>Time:</p>
                            <input className={`${styles.input} ${styles.inputTime}`} />
                        </div>
                        <div className={styles.settingItem}>
                            <p className={styles.title}>Độ khó:</p>
                            <Select
                                className={styles.select}
                                defaultValue="Difficult"
                            >
                                <Select.Option value={"Easy"}>Easy</Select.Option>
                                <Select.Option value={"Difficult"}>Difficult</Select.Option>
                            </Select>
                        </div>
                    </div>
                    <div className={`${styles.settingItemWrap} ${styles.settingItemWrap2}`}>
                        <div className={styles.settingItem}>
                            <p className={styles.title}>Nhóm câu hỏi:</p>
                            <Select
                                className={styles.select}
                                defaultValue="Difficult"
                            >
                                <Select.Option value={"Easy"}>Bộ 1</Select.Option>
                                <Select.Option value={"Difficult"}>Bộ 2</Select.Option>
                            </Select>
                        </div>
                        <div className={styles.settingItem}>
                            <Checkbox className={styles.title}>Đảo câu hỏi</Checkbox>
                        </div>
                    </div>
                </div>
                <div className={styles.question}>
                    <div className={styles.tableWrap}>
                        <p className={styles.tableTitle}>Câu hỏi trong nhóm</p>
                        <table className={styles.table}>
                            <tr>
                                <th>STT</th>
                                <th></th>
                                <th>Tên câu hỏi</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><Checkbox></Checkbox></td>
                                <td>Câu hỏi 5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Checkbox></Checkbox></td>
                                <td>Câu hỏi 5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><Checkbox></Checkbox></td>
                                <td>Câu hỏi 5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><Checkbox></Checkbox></td>
                                <td>Câu hỏi 5</td>
                            </tr>
                           
                        </table> 
                        <Pagination 
                            defaultCurrent={1}
                            pageSize={6}
                            total= {60}
                            style={{textAlign: "center", marginTop: "20px"}}
                        />
                    </div>
                    <div className={styles.tableWrap}>
                        <p className={styles.tableTitle}>Câu hỏi đã chọn</p>
                        <table className={styles.table}>
                            <tr>
                                <th>STT</th>
                                <th>Tên câu hỏi</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Câu hỏi 5</td>
                                <td><Image src={require("../../assets/trash.png")} /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Câu hỏi 5</td>
                                 <td><Image src={require("../../assets/trash.png")} /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Câu hỏi 5</td>
                                 <td><Image src={require("../../assets/trash.png")} /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Câu hỏi 5</td>
                                 <td><Image src={require("../../assets/trash.png")} /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Câu hỏi 5</td>
                                 <td><Image src={require("../../assets/trash.png")} /></td>
                            </tr>
                        </table> 
                        <Pagination 
                            defaultCurrent={1}
                            pageSize={6}
                            total= {60}
                            style={{textAlign: "center", marginTop: "20px"}}
                        />
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
