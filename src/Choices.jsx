import React from 'react';



const Choices = ({array, onChange}) => (
    <div className="tlk category" >
      <div style={{padding: '20px'}}>
        <a style={{fontSize: '20px'}}> Select a Category</a>
      </div>
      {array.map((prop) => (
        <label key={prop._id} style={{borderRadius: '50px',
        background: 'sky blue', padding: '20px', fontSize: '20px', color: 'black'}}>
          <input type="radio"
            name="tlk"
            value={prop.category}
            key={prop._id}
            onChange={onChange} />
          {prop.category}
        </label>
      ))}
    </div>
);



export default Choices;