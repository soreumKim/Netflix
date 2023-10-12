import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import { authenticateAction } from '../redux/action/authenticateAction'

const LoginPage = ({setAuthenticate}) => {
  /* const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate(); */

  //submit 버튼을 클릭할 때마다 form이 매번 새로고침되므로 콘솔창에서 텍스트가 사라짐
  //form을 쓸 때는 form이 새로고침되는 것을 막아주는 e.preventDefault()를 써준다

  /* const loginUser = (e) => {
    e.preventDefault();
    console.log("Login user function issue")
    dispatch(authenticateAction.login(id, password))
    navigate('/')
  } */

  return (
    <div className="loginWrap">
        <div className='formArea'>
          {/* 버튼 type이 submit일 경우에는 onClick 이벤트를 주지 않음 */}
          <Form /* onSubmit={(e)=>loginUser(e)} */>
            <h2 className='loginTitle'>로그인</h2>
            <Form.Group className="mb-3 email" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="이메일 주소 또는 전화번호" className='loginForm' />
            </Form.Group>
            <Form.Group className="mb-3 password" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호" className='loginForm' />
            </Form.Group>
            <Button variant="danger" type="submit" className='loginBtn'>
              로그인
            </Button>
            <Form.Group className="mb-3 checkBox" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="로그인 정보 저장" />
            </Form.Group>
          </Form>
        </div>
    </div>
  )
}

export default LoginPage