class Clock extends React.Component {  
  constructor(props) {
    super(props);
    /*This is where Clock initializes this.state with an object to
      include the current time.*/
    this.state = {date: new Date()}; //Reminder: this.state is only
    //be assigned in the constructor.
  }
  
  //Will be called when Clock output is inserted in the DOM.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000 //Call tick method once a second
    );
  }
  
  //Will be called if Clock component is ever removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timerID); //Clear the timer.
  }
  
  
  /*Called every second. Inside, the clock component schedules a UI
    update by calling setState() + object containing the current time.  
  */
  tick() {
    this.setState({ 
      date: new Date()      
    });
  }
  
  /*And tick() is called every second, so render() method will also be 
    called every second.Just this.state.date in the render() is 
    different,so the render output will include the updated time.
    React updates the DOM accordingly.
  */
  
  render() {
    return (
      <div className="border">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>   
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
