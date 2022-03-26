import React, { useState } from 'react';
import {  Button, Row, Col, Progress } from 'antd';
import { HeartTwoTone, CalendarTwoTone, FireTwoTone, MinusOutlined, PlusOutlined  } from '@ant-design/icons';

function Monster() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({percent: 40});

  const increase = () => {
    let percent = state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    setState({ percent });
  };

  const decline = () => {
    let percent = state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    setState({ percent });
  };


  return (
    <div className="App" style={{backgroundColor: '#ffe9c7'}}>
      <Row style={{height: '5vh'}} justify={"space-between"}>
      <Col span={8} style={{backgroundColor: 'white'}}>
       <div>
         <p>nbr de pas</p>
        <Progress percent={state.percent} />
        <Button.Group>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </Button.Group>
      </div> 
      </Col>

      <Col span={8} style={{backgroundColor: 'white'}}>
      <p>56 jours</p>
      <FireTwoTone />
      </Col>

      </Row>
      <Row type="flex" align="middle" justify="center" style={{height: '85vh', backgroundColor: '#ffe9c7'}}> 
      <Col span={12}>
      <div
    >
      
        <div
          style={{
            visibility: isDisplay ? "hidden" : "",
            width: '100%',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            textAlign: 'left'
          }}
        >Salut! Blabla</div>
        <img
          alt="test"
          onClick={() => setIsDisplay(!isDisplay)}
          style={{
            width: '100%',
            // filter: "drop-shadow(2px 1px 5px rgba(0,0,0,0.5214460784313726))"
          }} src={"https://lh3.googleusercontent.com/08Eq0eUOcBzTKfE8yI6jvpNREkv-VBKHrt5XAfSCEO_HwofCqkI3b-YBkbadnjyX-ceh6NJ-78oi02F-9Uk0v2UqeyKkmkaBcSgt8w=w600"}>

        </img>
        </div>
        </Col>
      </Row>
      <Row style={{height:'10vh', backgroundColor: 'white'}}>
        <Col style={{height:'100%'}} span={8}>
        <Button type="text" size={'large'} style={{height:'100%', width: '100%'}}>
        <HeartTwoTone />
        </Button>
        </Col>
        <Col style={{height:'100%'}} span={8}>
        <Button type="text" size={'large'} style={{height:'100%', width: '100%'}}>
        <FireTwoTone />
        </Button>
        </Col>
        <Col style={{height:'100%'}} span={8}>
        <Button type="text"size={'large'} style={{height:'100%', width: '100%'}}>
        <CalendarTwoTone />
        </Button>
        </Col>
      </Row>      
    </div >
  );
}

export default Monster;
