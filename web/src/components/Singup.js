class Singup extends React.Componenet{
constructor()
{
  super();
  this.state ={
    fullName:''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

 handleChange(event){
  this.setState({ fullName = event.target.fullName});
}

 handleSubmit(event){
  console.log("My submit "+ this.state.fullName);
  event.preventDefault();
}

render(){
  return (
    <form>
       <div>
          <label>Full Name</label>
          <input type="text" value={this.stat.fullName} onChange={this.handleChange}/>
       </div>
    <form>
  );
}
}
