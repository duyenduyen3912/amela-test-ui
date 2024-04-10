import { Checkbox, Col, Row } from 'antd'
import React from 'react'
import styles from "./Exam.module.scss"

export default function Exam() {
  return (
    <div className={styles.wrap}>
        <Row>
            <Col span={18}>
                <div className={styles.exam}>
                    <div className={styles.examName}>
                        <p className={styles.examTile}>Kiểm tra an toàn bảo mật thông tin lần 2</p>
                        <p className={styles.examTime}>Còn lại: 14 phút 22 giây</p>
                        <div className={styles.progress}>
                            <div className={styles.passed}></div>
                        </div>
                    </div>
                    <div className={styles.examContentWrap}>
                        <div className={styles.examContent}>
                            <p className={styles.examQuestion}>Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?</p>
                            <div className={styles.examAnswerWrap}>
                                <Checkbox className={styles.examAnswer}>A. 12 ngày nếu làm đủ cả năm</Checkbox>
                                <Checkbox className={styles.examAnswer}>B. 16 ngày nếu làm đủ cả năm</Checkbox>
                                <Checkbox className={styles.examAnswer}>C. Không có nghỉ phép vẫn hưởng lương</Checkbox>
                                <Checkbox className={styles.examAnswer}>D. 8 ngày nếu làm đủ cả năm</Checkbox>
                            </div>
                        </div>
                        <div className={styles.btnWrap}>
                            <button className={styles.btn}>Câu trước</button>
                            <button className={styles.btn}>Câu sau</button>
                        </div>
                    </div>
                </div>     
            </Col>
            <Col  span={6}>
                <div className={styles.examNumberWrap}>
                    <div className={styles.examNumber}>
                        {
                            Array(16).fill(null).map((item, index) => {
                                if(index === 1 || index === 2 ||index === 4 ||index === 7 )
                                return (
                                        <span className={`${styles.number} ${styles.selected}`}>{++index}</span>
                                )
                                else if(index === 3) 
                                return (
                                    <span className={`${styles.number} ${styles.active}`}>{++index}</span>
                                )
                                else {
                                    return (
                                        <span className={`${styles.number}`}>{++index}</span>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}
