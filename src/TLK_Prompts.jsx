import React from 'react';



const TLK_Prompts = (props) => (
  <>
    <div >
      <h4> Try One of These: </h4>
      <ul style={{fontFamily: "Arial", fontSize: '20px', textShadow: '1px 1px white' }}>
      {props.tlks.map((tlk) => <ul key={tlk._id}> <a> {tlk.text} </a> </ul>)}
    </ul>
    </div>

  </>
)

export default TLK_Prompts;