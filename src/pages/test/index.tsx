import { Col, Image, Pagination, Row } from 'antd'
import React from 'react'
import Filter from '../../components/Filter'
import UserInfo from '../../components/userInfo'
import styles from "./Test.module.scss"
export default function TestManager() {
  return (
    <div className={styles.wrap}>
        <Row gutter={30} className={styles.row} justify={"space-between"}>
            <Col span={4} >
                <UserInfo />
            </Col>
            <Col span={20}>
                <div className={styles.test}>
                    <p className={styles.title}>Test manager</p>
                    <p className={styles.subTitle}><span style={{color: "#666161"}}>Home</span> {">"} Test quiz manager</p>
                    <Filter name='New test' />
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <tr>
                                <th>STT</th>
                                <th>Test name</th>
                                <th>Time</th>
                                <th>Start</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Bài toán 1</td>
                                <td>7m</td>
                                <td>4</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Bài toán 2</td>
                                <td>7m</td>
                                <td>4</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bài toán 3</td>
                                <td>7m</td>
                                <td>4</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Bài toán 4</td>
                                <td>7m</td>
                                <td>4</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                           
                        </table> 
                        <Pagination 
                        defaultCurrent={1}
                        pageSize={6}
                        total= {60}
                        style={{textAlign: "center", marginTop: "40px"}}
                    />   
                    </div>
                    
                </div>
                
            </Col>
        </Row>
    </div>
  )
}