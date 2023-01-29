import React from 'react';
import { connect } from 'react-redux';
import { fetchBLogs } from '../../redux/actionCreator';

const mapStateToProps = state => {
    return {
        blogs: state.blogs
    }
}
const mapDispatchToProps = dispatch => {
    return {
      fetchBlogs: () => dispatch(fetchBLogs())
    
    }
  }
class Datas extends React.Component {



 
componentDidMount() {

	// this.props.fetchBLogs();
    console.log(this.props)
}

render() {
  
	return (
      
	<div>
		

	</div>
	);
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Datas);
