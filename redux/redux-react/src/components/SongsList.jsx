import React from "react";
import { connect } from "react-redux";

class SongsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.state.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <h1>{this.renderList()}</h1>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect()(SongsList);
