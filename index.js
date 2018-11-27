function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element, document.getElementById('root')
  );
}

setInterval(tick, 1000) //render (or update UI, in this sense), every 1 second. 
