import { Col, Image, Input, Row } from 'antd'
import React from 'react'
import styles from "./Filter.module.scss"
import {SearchOutlined} from "@ant-design/icons"
import { useMediaQuery } from 'react-responsive'

export default function Filter({name}: {name: string}) {
  const isTablet = useMediaQuery({
    query: '(max-width: 992px)'
  })

  return (
    <Row className={styles.filter} gutter={isTablet ? 20 : 34}>
        <Col span={16} xxl={16} xl={16} lg={16} md={20} xs={20}>
            <div className={styles.searchWrap}>
                <Input className={styles.searchInput} placeholder="search"/>
                <SearchOutlined className={styles.searchIcon}/>
            </div>
        </Col>
        <Col span={8} xxl={8} xl={8} lg={8} md={4} xs={4}>
          {
            isTablet ? 
            <div className={styles.iconWrap}>
              <Image src={require("../../assets/add.png")} preview={false} className={styles.icon} />
            </div>
            
            :
            <button className={styles.btn}>
                <Image src={require("../../assets/add.png")} preview={false} className={styles.icon} />
                <span className={styles.btnName}>{name}</span>
           </button>
          }
        </Col>
        
    </Row>
  )
}
