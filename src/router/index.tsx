import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Exam from '../pages/exam'
import ExamFinish from '../pages/finish'
import NewTest from '../pages/newTest'
import NewTopic from '../pages/newTopic'
import QuestionManager from '../pages/questionManager'
import Signin from '../pages/signin'
import TestManager from '../pages/test'
import TopicManager from '../pages/topic'
import UserManager from '../pages/userManager'


export default function RouteConfig() {
  return (
    <Routes>
        <Route path={"/signin"} element={<Signin />}/>
        <Route path={"/"} element={<Dashboard />}/>
        <Route path={"/exam"} element={<Exam />}/>
        <Route path={"/finish"} element={<ExamFinish />}/>
        <Route path={"/user-manager"} element={<UserManager />}/>
        <Route path={"/test-manager"} element={<TestManager />}/>
        <Route path={"/topic-manager"} element={<TopicManager />}/>
        <Route path={"/question-manager"} element={<QuestionManager />}/>
        <Route path={"/new-test"} element={<NewTest />}/>
        <Route path={"/new-topic"} element={<NewTopic />}/>
    </Routes>
  )
}
