import { Checkbox, Col, Drawer, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import styles from "./Exam.module.scss"

export default function Exam() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
      };
    const isTablet = useMediaQuery({
        query: '(max-width: 992px)'
      })
  return (
    <div className={styles.wrap}>
        <Header title='Làm bài thi' />
        <Row>
            <Col span={18} xxl={18} xl={18} lg={18} md={24} xs={24}>
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
                        <div>
                            <div className={styles.btnWrap}>
                                <button className={styles.btn}>Câu trước</button>
                                <button className={styles.btn}>Câu sau</button>
                            </div>
                            <div className={styles.redirectBtn}>
                                <button className={styles.submitBtn} onClick={showModal}>Chuyển đến</button>
                            </div>
                        </div>
                    </div>
                </div>     
            </Col>
            <Col  span={6} xxl={6} xl={6} lg={6} md={0} xs={0}>
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
                    <div style={{textAlign: "center"}}>
                        <button className={styles.submitBtn} onClick={()=> navigate('/finish')}>Nộp bài</button>
                    </div>
                    
                </div>
                
            </Col>
            <Modal open={isModalOpen} onCancel={handleCancel} className={styles.modal}>
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
                    <div style={{textAlign: "center"}}>
                        <button className={styles.submitBtn}>Nộp bài</button>
                    </div>
                    
                </Modal>
        </Row>
    </div>
  )
}
