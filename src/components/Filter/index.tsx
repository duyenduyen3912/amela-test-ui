import { Col, Image, Input, Row } from 'antd'
import React from 'react'
import styles from "./Filter.module.scss"
import {SearchOutlined} from "@ant-design/icons"

export default function Filter({name}: {name: string}) {
  return (
    <Row className={styles.filter} gutter={34}>
        <Col span={16}>
            <div className={styles.searchWrap}>
                <Input className={styles.searchInput} placeholder="search"/>
                <SearchOutlined className={styles.searchIcon}/>
            </div>
        </Col>
        <Col span={8}>
           <button className={styles.btn}>
                <Image src={require("../../assets/add.png")} preview={false} className={styles.icon} />
                <span className={styles.btnName}>{name}</span>
           </button>
        </Col>
        
    </Row>
  )
}
