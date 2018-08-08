class ProductsList extends React.Component {
  constuctor(props) {
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch()
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }));
  }

  render() {
    return (
      <table>
        {this.createTable()}
      </table>
    )
  }

  createTable() {
    let table = []

    table.push(
      <tr>
        <th> Product Name </th>
      </tr>
    )



    return table;
  }


}

ReactDom.render(<ProductList/>, document.getElementById('product-list'));
