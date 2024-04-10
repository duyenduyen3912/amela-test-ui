import { Col, Image, Modal, Pagination, Radio, RadioChangeEvent, Row } from 'antd'
import React, { useState } from 'react'
import Filter from '../../components/Filter'
import UserInfo from '../../components/userInfo'
import styles from "../userManager/Usermanager.module.scss"

export default function QuestionManager() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
  return (
    <div className={styles.wrap}>
        <Row gutter={30} className={styles.row} justify={"space-between"}>
            <Col span={4} >
                <UserInfo />
            </Col>
            <Col span={20}>
                <div className={styles.user}>
                    <p className={styles.title}>Home {">"} User Manager</p>
                    <Filter name='New Question'/>
                    <p className={styles.title}>Tổng số câu hỏi: 38</p>
                    <div className={styles.accountWrap}>
                        <div className={styles.account} onClick={showModal}>
                            <div>
                                <p className={styles.accountText}>Đâu không phải là một phương pháp kiểm thử hộp đen?</p>
                                <p className={styles.accountText}>A, Phân vùng tương đương</p>
                                <p className={styles.accountText}>B,  Bảng quyết định</p>
                                <p className={styles.accountText}><span style={{color: "#26853B"}}>C, Unit test</span></p>
                                <p className={styles.accountText}>D, Lược đồ chuyển trạng</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap} onClick={showModal}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Đâu không phải là một phương pháp kiểm thử hộp đen?</p>
                                <p className={styles.accountText}>A, Phân vùng tương đương</p>
                                <p className={styles.accountText}>B,  Bảng quyết định</p>
                                <p className={styles.accountText}><span style={{color: "#26853B"}}>C, Unit test</span></p>
                                <p className={styles.accountText}>D, Lược đồ chuyển trạng</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap} onClick={showModal}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Đâu không phải là một phương pháp kiểm thử hộp đen?</p>
                                <p className={styles.accountText}>A, Phân vùng tương đương</p>
                                <p className={styles.accountText}>B,  Bảng quyết định</p>
                                <p className={styles.accountText}><span style={{color: "#26853B"}}>C, Unit test</span></p>
                                <p className={styles.accountText}>D, Lược đồ chuyển trạng</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className={styles.action}>
                            <Image src={require("../../assets/pen.png")} preview={false} className={styles.icon} />
                            <Image src={require("../../assets/trash.png")} preview={false} className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.accountWrap} onClick={showModal}>
                        <div className={styles.account}>
                            <div>
                                <p className={styles.accountText}>Đâu không phải là một phương pháp kiểm thử hộp đen?</p>
                                <p className={styles.accountText}>A, Phân vùng tương đương</p>
                                <p className={styles.accountText}>B,  Bảng quyết định</p>
                                <p className={styles.accountText}><span style={{color: "#26853B"}}>C, Unit test</span></p>
                                <p className={styles.accountText}>D, Lược đồ chuyển trạng</p>
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
       <Modal 
            title={titleMondal} 
            open={isModalOpen} 
            onOk={handleOk} 
            okButtonProps={{}}
            onCancel={handleCancel} 
            width={1000}
            className={styles.modal}
            footer={[
                <button className={styles.btnModal} onClick={handleCancel}>
                    Cancel
                </button>,
                <button className={styles.btnModal} onClick={handleOk}>
                    Update
                </button>
            ]}
        >
        <div className={styles.answerWrap}>
            <div className={styles.titleQuestion}>
                    A
            </div>
            <div className={`${styles.titleQuestion} ${styles.answer}`}>
                    Phân vùng tương đương
            </div>
        </div>
        <div className={styles.answerWrap}>
            <div className={styles.titleQuestion}>
                    B
            </div>
            <div className={`${styles.titleQuestion} ${styles.answer}`}>
                    Bảng quyết đinh
            </div>
        </div>
        <div className={styles.answerWrap}>
            <div className={styles.titleQuestion}>
                <b style={{color: "#26853B"}}>C</b>
                    
            </div>
            <div className={`${styles.titleQuestion} ${styles.answer}`}>
                    <b style={{color: "#26853B"}}>Unit test</b>
            </div>
        </div>
        <div className={styles.answerWrap}>
            <div className={styles.titleQuestion}>
                    D
            </div>
            <div className={`${styles.titleQuestion} ${styles.answer}`}>
                    Lược đồ chuyển trạng
            </div>
        </div>
        <div className={styles.selected}>
            <span className={styles.title}>Đáp án đúng</span>
            <span style={{marginLeft: "40px"}}>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1} className={styles.answerRadio}>A</Radio>
                    <Radio value={2} className={styles.answerRadio}>B</Radio>
                    <Radio value={3} className={styles.answerRadio}>C</Radio>
                    <Radio value={4} className={styles.answerRadio}>D</Radio>
                </Radio.Group>
            </span>
        </div>
      </Modal>
    </div>
  )
}

const titleMondal = (
    <div className={styles.titleWrap}>
        <div className={styles.titleQuestion}>Câu hỏi</div>
        <div className={styles.question}>Đâu không phải là một phương pháp kiểm thử hộp đen?</div>
    </div>
)

