class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <a href="#home">Home</a>
        <a href="#Products">Products</a>
        <a href="#Stores">Stores</a>
        <a href="#About">About</a>
      </div>
    )
  }
}

ReactDOM.render(<NavigationBar/>, document.getElementById('navbar'));
