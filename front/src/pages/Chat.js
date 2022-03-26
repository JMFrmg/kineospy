import React, { useState } from 'react';
import { message, Row } from 'antd';


function Chat(props) {
  const {messages} = props
  const [isDisplay, setIsDisplay] = useState(false);
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({ percent: 40 });

  return (
    <div style={{
    position: 'absolute',
    bottom: '0px',
    zIndex: 0
    }}>
      <Row>
        <div
          style={{
            visibility: isDisplay ? "hidden" : "",
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            textAlign: 'left',
            left: '0px',
            width: 'fit-content',
            padding: '0px 15px',
            margin: '3px'
          }}
        >Salut! Blabla</div>
      </Row>
      <Row justify="end">
        <div
          style={{
            visibility: isDisplay ? "hidden" : "",
            width: 'fit-content',
            backgroundColor: '#40a9ff',
            color: 'white',
            borderRadius: '20px',
            right: '0px',
            textAlign: 'right',
            padding: '0px 15px',
            margin: '3px'
          }}
        >Salut! Blabla </div>
      </Row>
      <Row>
        <div
          style={{
            visibility: isDisplay ? "hidden" : "",
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            textAlign: 'left',
            left: '0px',
            width: 'fit-content',
            padding: '0px 15px',
            margin: '3px'
          }}
        >Salut! Blabla</div>
      </Row>
      <Row>
        <div
          style={{
            visibility: isDisplay ? "hidden" : "",
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '20px',
            textAlign: 'left',
            left: '0px',
            width: 'fit-content',
            padding: '0px 15px',
            margin: '3px'
          }}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
      </Row>
      {messages.map((message, i) => (
        <Row justify={message.from === 'user' && "end"} key={i}>
        <div 
          style={{
            visibility: isDisplay ? "hidden" : "",
            backgroundColor: message.from === 'ia' ? "white" : "#40a9ff",
            color: message.from === 'ia' ? "black" : "white",
            borderRadius: '20px',
            textAlign: 'left',
            left: '0px',
            width: 'fit-content',
            padding: '0px 15px',
            margin: '3px'
          }}
        >{message.content}</div>
      </Row>
      ))}
    </div>
  );
}

export default Chat;
