
import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import beastData from './data.json'
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import HornsForm from "./components/HornesForm";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: '',
      image_url: '',
      description: '',
      data: beastData,
      filterHorns:''
    }

  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }
  handleOpen = (name, image_url, description) => {
    this.setState({
      showModal: true,
      name: name,
      image_url: image_url,
      description: description,
    });
  }
  filterByHorns = (e)=> {
    let filterHorns=e.target.value;
   
    this.setState({
      filterHorns:filterHorns,
    })
  }
  render() {
    return (
      <>
        <Header />
        <HornsForm
         filterByHorns ={this.filterByHorns}
         />
        <Main handleOpen={this.handleOpen}
              data ={this.state.data}
              filterHorns={this.state.filterHorns}
        
        />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          name={this.state.name}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <Footer />
      </>
    );
    
  }
}

export default App;
