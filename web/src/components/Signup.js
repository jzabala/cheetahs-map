import React from 'react';

function Location(props){

  return(
  <div>
    <div>
        <label>Lat</label>
        <input type="text" value={props.lat} onChange={() => this.props.onChange()}/>
    </div>
    <div>
        <label>Lng</label>
        <input type="text" value={props.lng}/>
    </div>
    <div>
        <label>Country</label>
        <input type="text" value={props.country}/>
    </div>
    <div>
       <label>City</label>
       <input type="text" value={props.city}/>
    </div>
    <div>
       <label>Time Zone</label>
       <input type="text" value={props.timeZone}/>
     </div>
  </div>

  );


}

class Signup extends React.Component{
  constructor()
  {
    super();
    this.state ={
        id:'',
        fullName:'',
        cohortName:'',
        userName:'',
        email:'',
        profileImage:'',
        lat:'',
        lng:'',
        country:'',
        city:'',
        timeZone:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event){
     console.log(event);
    this.setState({ fullName: event.target.value});
  }

   handleSubmit(event){
    alert("My submit "+ this.state.person.fullName + ' ' +this.state.person.cohortName);
    event.preventDefault();
  }

render(){
  return (
    <form onSubmit={this.handleSubmit}>
       <div>
          <label>Full Name</label>
          <input type="text" value={this.state.fullName} onChange={(event) => {this.setState({fullName:event.target.value })}}/>
       </div>
       <div>
          <label>CoHort Name</label>
          <select value={this.state.cohorName} onChange={(event) => {this.setState({cohortName: event.target.value})}}>
            <option value="redPanda">Red panda</option>
            <option value="articFox">Artic fox</option>
            <option value="cheetah">Cheetah</option>
            <option value="kangaroo">Kangaroo</option>
            <option value="racoon">Racoon</option>
            <option value="rhino">Rhino</option>
          </select>
          </div>
           <Location onChange={(event) => {this.setState({})} }/>
       <div><input type="submit" value="Send"/></div>
    </form>
  );
}
}

export default Signup;
