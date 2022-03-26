import React, { useState } from 'react';
import { Button, Row, Col, Progress, Input } from 'antd';
import { HeartTwoTone, CalendarTwoTone, FireTwoTone, MinusOutlined, PlusOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import Chat from './Chat';

const { Search } = Input;

function Monster() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({ percent: 40 });
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState([
      {from: 'user', content: 'salut'},
      {from: 'ia', content: 'salut ^^'}
    ]);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  const onSearch = value => console.log(value);

  return (
    <div className="App" style={{ backgroundColor: '#ffe9c7' }}>
      <Row style={{ height: '5vh' }} justify={"space-between"}>
        <Col span={14} style={{ marginTop: '5px' }}>
          <Row justify="space-around" align="middle" style={{ padding: '10px', zIndex:4, position: 'relative' }}>
            <Col span={12}>
              <Progress percent={state.percent}  size="small"  status="active" showInfo={false} />
            </Col>
            <Col span={12}>
              <p
                style={{
                  marginTop: 'unset',
                  marginBottom: 'unset',
                  fontSize: '12px'
                }}
              >
                4000 / 10 000 pas
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={6} >
          <Row justify="space-around" align="middle" style={{ marginTop: '10px' }}>
            <Col>
              <FireTwoTone style={{ fontSize: '25px' }} />
            </Col>
            <Col>
              <p
                style={{
                  marginTop: 'unset',
                  marginBottom: 'unset',
                  fontSize: '15px'
                }}
              >56 jours</p>
            </Col>
          </Row>
        </Col>

      </Row>
      <Row type="flex" align="middle" justify="center" style={{ height: '85vh', backgroundColor: '#ffe9c7' }}>
        <Col span={12}>
          <div style={{
            position: 'absolute', top: '-26vh', width: '100%', height: '30vh'
        }}>
            <div style={{background: 'linear-gradient(0deg, rgba(0,0,0,0) 50%, rgba(255,233,199,1) 70%)', position: 'absolute', height: '100%', width: '100%',
            zIndex: '2',
              top: '-8vh'
          }}></div>
            <Chat messages={messages}/>
            </div> 

            <img
              alt="test"
              onClick={() => setIsDisplay(!isDisplay)}
              style={{
                width: '100%',
                // filter: "drop-shadow(2px 1px 5px rgba(0,0,0,0.5214460784313726))"
              }} src={"https://lh3.googleusercontent.com/08Eq0eUOcBzTKfE8yI6jvpNREkv-VBKHrt5XAfSCEO_HwofCqkI3b-YBkbadnjyX-ceh6NJ-78oi02F-9Uk0v2UqeyKkmkaBcSgt8w=w600"}>

            </img>
        </Col>
      <Search
      style={{position:'absolute', bottom:'20vh', padding:'0px 20px'}}
      placeholder="input search text"
      enterButton={<SendOutlined />}
      size="large"
      suffix={false}
      value={messageInput}
      onChange={e => setMessageInput(e.target.value)}
      onSearch={(e) => {
        setMessageInput("")
        setMessages([...messages, {from: 'user', content: e}])
      }}
    />
      </Row>
      
      <Row style={{ height: '10vh', backgroundColor: 'white' }}>
        <Col style={{ height: '100%' }} span={8}>
          <Button type="text" size={'large'} style={{ height: '100%', width: '100%' }}>
            <HeartTwoTone />
          </Button>
        </Col>
        <Col style={{ height: '100%' }} span={8}>
          <Button type="text" size={'large'} style={{ height: '100%', width: '100%' }}>
            <FireTwoTone />
          </Button>
        </Col>
        <Col style={{ height: '100%' }} span={8}>
          <Button type="text" size={'large'} style={{ height: '100%', width: '100%' }}>
            <CalendarTwoTone />
          </Button>
        </Col>
      </Row>
    </div >
  );
}

export default Monster;
