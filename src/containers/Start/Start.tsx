import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../modules/world';
import { bindActionCreators } from 'redux';

interface StartMapStateToProps {}

interface StartProps extends StartMapStateToProps {}

export const Start: React.FunctionComponent<StartProps> = (props: StartProps) => {
  return <>start container </>;
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Start);
