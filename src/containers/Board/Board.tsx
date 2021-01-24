import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../modules/world';
import { IState } from '../../modules';
import { IMatrix } from '../../interfaces';
import { GridBoard, Navbar, Status } from '../../components';

interface IBoardMapStateToProps {
  columns: number;
  rows: number;
  matrix: IMatrix;
  islands: number;
  activeCells: number;
}
interface IBoardmapDispatchToProps {
  init: actions.InitAction;
  toggleCell: actions.ActionCreator<string>;
}
interface IBoardProps extends IBoardMapStateToProps, IBoardmapDispatchToProps {}

export class Board extends React.Component<IBoardProps> {
  componentDidMount() {
    this.props.init();
  }

  toggleCellStatus = (id: string) => {
    this.props.toggleCell(id);
    this.forceUpdate();
  };

  public render() {
    const { matrix, islands, activeCells, init, columns } = this.props;
    return (
      <>
        <Navbar />
        <Status islands={islands} activeCells={activeCells} onRefresh={init} />
        <GridBoard matrix={matrix} handleToggle={this.toggleCellStatus} columns={columns} />
      </>
    );
  }
}

const mapStateToProps = (state: IState): IBoardMapStateToProps => ({
  columns: state.worldReducer.columns,
  rows: state.worldReducer.rows,
  matrix: state.worldReducer.matrix,
  islands: state.worldReducer.islands,
  activeCells: state.worldReducer.activeCells
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init: actions.init,
      toggleCell: actions.toggleCell
    },
    dispatch
  );

export default connect<IBoardMapStateToProps, IBoardmapDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Board);
