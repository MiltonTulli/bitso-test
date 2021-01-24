import React from 'react';
import { connect } from 'react-redux';
import { Landing } from '../../components';
import { actions } from '../../modules/world';
import { bindActionCreators } from 'redux';
import { parseStringId } from '../../utils/matrix.utils';

interface StartMapStateToProps {
  saveMatrixDimensions: actions.ActionCreator<{ columns: number; rows: number }>;
}

interface StartProps extends StartMapStateToProps {}

export const Start: React.FunctionComponent<StartProps> = (props: StartProps) => {
  const changeMatrixDimensions = (value: string) => {
    const [columns, rows] = parseStringId(value.replace('x', '-'));
    props.saveMatrixDimensions({ columns, rows });
  };

  return <Landing onDimensionsChange={changeMatrixDimensions} />;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveMatrixDimensions: actions.saveMatrixDimensions
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Start);
