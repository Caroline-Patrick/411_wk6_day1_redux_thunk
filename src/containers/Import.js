import { connect } from 'react-redux';
import Import from '../components/Import';
import { fetchMakes, deleteMake } from '../redux/actions';
// import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
};

const mapDispatchToProps = dispatch => ({
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (index) => dispatch(deleteMake(index)),
});
  

  export default connect(mapStateToProps, mapDispatchToProps)(Import);
