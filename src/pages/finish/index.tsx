import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Finish.module.scss"
export default function ExamFinish() {
    const navigate = useNavigate()
  return (
    <div className={styles.wrap}>
        <div className={styles.result}>
            <p className={styles.title}>Kiểm tra an toàn bảo mật thông tin lần 2</p>
            <div className={styles.descriptionWrap}>
                <div className={styles.desciption}>
                    <div className={styles.itemWrap}>
                        <div className={styles.text}>Số câu trả lời đúng:</div>
                        <div className={styles.value}>12</div>
                    </div>
                    <div className={styles.itemWrap}>
                        <div className={styles.text}>Số câu trả lời sai: </div>
                        <div className={styles.value}>3</div>
                    </div>    
                    <div className={styles.itemWrap}>
                        <div className={styles.text}>Số câu chưa trả lời đúng: </div>
                        <div className={styles.value}>1</div>
                    </div>    
                    <div className={styles.itemWrap}>
                        <div className={styles.text}>Tổng số câu hỏi: </div>
                        <div className={styles.value}>16</div>
                    </div> 
                </div>
                <p className={styles.title}>Điểm số: 120/160</p>
            </div>
            <div style={{textAlign: "center"}}>
                <button className={styles.btn} onClick={()=> navigate("/")}>Dashboard</button>
            </div>
        </div>
    </div>
  )
}
