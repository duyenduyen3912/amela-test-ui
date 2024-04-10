import { Row, Col,  Image, Form, Input, Checkbox, Button} from 'antd'
import React from 'react'
import styles from "./Signin.module.scss"
import {UserOutlined, LockOutlined} from "@ant-design/icons"

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export default function Signin() {
  return (
    <div className={styles.wrap}>
        <Row justify={"end"}className={styles.row}>
            <Col span={12} xxl={12} xl={12} lg={12} md={24} xs= {24} className={styles.colWrap}>
                <div className={styles.popupSignin}>
                    <div className={styles.camera}>
                        <Image src={require("../../assets/camera.png")} className={styles.cameraImg} preview={false}/>
                    </div>
                    <Form
                    name="normal_login"
                    className={styles.form}
                    initialValues={{ remember: true }}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                        className={styles.formItem}
                    >
                        <Input 
                            prefix={<UserOutlined 
                            className={styles.icon} />} 
                            placeholder="Username" 
                            className={styles.formInput}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className={styles.icon} />}
                        className={styles.formInput}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ span: 24 }}
                        className={styles.checkbox}
                    >
                    <Checkbox className={styles.checkboxItem}>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.btn}>
                            LOGIN
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}
