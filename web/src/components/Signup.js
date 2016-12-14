import React from 'react';

function Location(props){
   console.log(props);
  return(
  <div>
    <div>
        <label>Lat</label>
        <input type="text" value={props.lat} onChange={(e) => props.onChange({lat: e.target.value})}/>
    </div>
    <div>
        <label>Lng</label>
        <input type="text" value={props.lng} onChange={(e) => props.onChange({lng: e.target.value})}/>
    </div>
    <div>
        <label>Country</label>
        <input type="text" value={props.country} onChange={(e) => props.onChange({country: e.target.value})}/>
    </div>
    <div>
       <label>City</label>
       <input type="text" value={props.city} onChange={(e) => props.onChange({city: e.target.value})}/>
    </div>
    <div>
       <label>Time Zone</label>
       <input type="text" value={props.timeZone} onChange={(e) => props.onChange({timeZone: e.target.value})}/>
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
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChangeGeneral(obj){
    this.setState(obj);
  }

   handleSubmit(event){
    alert("My submit "+ this.state.fullName + ' ' +this.state.cohortName + ' ' +this.state.lat +' ' +this.state.lng);
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
          <label>UserName</label>
          <input type="text" value={this.state.userName} onChange={(event) => {this.setState({userName:event.target.value })}}/>
       </div>
       <div>
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={(event) => {this.setState({email:event.target.value })}}/>
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
          <div>
           <label>Image</label>
           <img src={this.state.profileImage}/>
           <input type="file" accept="image/*"/>
          </div>
           <Location
                    lat={this.state.lat}
                    lng={this.state.lng}
                    onChange={this.handleChangeGeneral}/>
       <div><input type="submit" value="Send"/></div>
    </form>
  );
}
}

export default Signup;
