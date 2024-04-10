import { Col, Image, Input, Pagination, Rate, Row, Select } from 'antd'
import React from 'react'
import styles from "./Dashboard.module.scss"
import {SearchOutlined, ClockCircleOutlined} from "@ant-design/icons"
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
export default function Dashboard() {
  return (
    <div className={styles.wrap}>
        <Row gutter={30} className={styles.row} justify={"space-between"}>
            <Col span={4} >
                <div className={styles.user}>
                    <div className={styles.userInfo}>
                        <Image src={require("../../assets/avatar.png")} preview={false} className={styles.avatar} width={180}/>
                        <p className={styles.userInfoText}>User: {" "} thanhnh@gmail.com</p>
                        <p className={styles.userInfoText}>Point: {" "} 2488</p>
                    </div>
                    <button className={styles.logoutBtn}>
                            LOGOUT
                    </button>
                </div>
            </Col>
            <Col span={20}>
                <div className={styles.allTest}>
                    <Row className={styles.filter} gutter={34}>
                        <Col span={20}>
                            <div className={styles.searchWrap}>
                                <Input className={styles.searchInput} placeholder="search"/>
                                <SearchOutlined className={styles.searchIcon}/>
                            </div>
                        </Col>
                        <Col span={4}>
                            <Select
                                className={styles.select}
                                defaultValue="Difficult"
                            >
                                <Select.Option value={"Easy"}>Easy</Select.Option>
                                <Select.Option value={"Difficult"}>Difficult</Select.Option>
                            </Select>
                        </Col>
                        
                    </Row>
                    <div className={styles.tests}>
                        <Row gutter={90} justify="space-around">
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <div className={styles.test}>
                                    <p className={styles.testTitle}>Kiểm tra an toàn bảo mật thông tin 2024</p>
                                    <div className={styles.testInfo}>
                                        <div className={styles.testTime}>
                                            <Image src={require("../../assets/clock.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>7 phút</span>
                                        </div>
                                        <div className={styles.testPoint}>
                                            <Image src={require("../../assets/point.png")}  className={styles.testIcon}/>
                                            <span className={styles.testText}>200/250 điểm</span>
                                        </div>
                                    </div>
                                    <div className={styles.testStar}>
                                        <Rate value={4} className={styles.star}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Pagination 
                        defaultCurrent={1}
                        pageSize={6}
                        total= {60}
                        style={{textAlign: "center"}}
                    />
                    
                </div>
            </Col>
        </Row>
    </div>
  )
}
