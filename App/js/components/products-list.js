class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    // TODO: Replace mock API call
    /*
    fetch()
      .then(response => response.json())
      .then(data => this.setState({ data, isLoading: false }));
    */

    var obj = {
      "products" : [
        {
          "ProductID" : 1,
          "Name" : "Banana"
        },
        {
          "ProductID" : 2,
          "Name" : "Apple"
        },
        {
          "ProductID" : 3,
          "Name" : "Lemon"
        }
      ],
      "rows" : 3
    };

    this.setState({
      products : obj.products,
      isLoading: false
    });

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
      <thead>
        <tr>
          <th> Product Name </th>
        </tr>
      </thead>
    )

    if (this.state.isLoading) {
      table.push(
        <tbody>
          <tr>
            <td>
              No Products Found
            </td>
          </tr>
        </tbody>
      )

    } else {
      table.push(
        <tbody>
          {this.createTableRow()}
        </tbody>
      )
    }

    return table;
  }

  createTableRow() {
    var tableBody = [];
    var products = this.state.products;
    
    for(var i = 0; i < products.length; i++) {
      console.log(products[i].Name);
      tableBody.push(
        <tr>
          <td>
            {products[i].Name}
          </td>
        </tr>
      )
    }
    return tableBody;
  }
}

ReactDOM.render(<ProductsList/>, document.getElementById('product-list'));
