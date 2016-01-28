// var VideoList = () => (
//   <div className="video-list media">
//     <VideoListEntry entry={exampleVideoData[0]}/>
//     <VideoListEntry entry={exampleVideoData[1]}/>
//     <VideoListEntry entry={exampleVideoData[2]}/>
//     <VideoListEntry entry={exampleVideoData[3]}/>
//     <VideoListEntry entry={exampleVideoData[4]}/>
//   </div>
// );

class VideoList extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (<div className="video-list media">
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={exampleVideoData[0]}/>
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={exampleVideoData[1]}/>
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={exampleVideoData[2]}/>
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={exampleVideoData[3]}/>
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={exampleVideoData[4]}/>
                </div>)
    }
}

window.VideoList = VideoList;
