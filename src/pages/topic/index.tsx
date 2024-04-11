import { Col, Image, Pagination, Row } from 'antd'
import React from 'react'
import Filter from '../../components/Filter'
import Header from '../../components/Header'
import UserInfo from '../../components/userInfo'
import styles from "../test/Test.module.scss"
export default function TopicManager() {
  return (
    <div className={styles.wrap}>
        <Header title='List topic manager' />
        <Row gutter={30} className={styles.row} justify={"space-between"}>
            <Col span={4} xxl={4} xl={4} lg={4} md={0} xs={0}>
            </Col>
            <UserInfo />
            <Col span={20} xxl={20} xl={20} lg={20} md={24} xs={24}>
                <div className={styles.test}>
                    <p className={styles.title}>List topic manager</p>
                    <p className={styles.subTitle}><span style={{color: "#666161"}}>Home</span> {">"} List topic manager</p>
                    <Filter name='New topic' />
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <tr>
                                <th>STT</th>
                                <th>Topic name</th>
                                <th>Difficult</th>
                               
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Toán</td>
                                <td>Khó</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hoá học</td>
                                <td>Dễ</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Sinh học</td>
                                <td>Khó</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mạng máy tính</td>
                                <td>Vừa</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Công nghệ phần mềm</td>
                                <td>Khó</td>
                                <td className={styles.action}><Image src={require("../../assets/pen.png")} className={styles.icon}/><Image src={require("../../assets/trash.png")} className={styles.icon}/></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Vật lý</td>
                                <td>Dễ</td>
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
