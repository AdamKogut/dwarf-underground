import React, {Component} from 'react'
import './Links.css';
import Comments from './Comments.js'

class Links extends Component{
    constructor(props){
      super(props)
      this.state={
        showComments:false
      }
      this.toggleComments=this.toggleComments.bind(this)
    }

    toggleComments(ev){
      ev.preventDefault()
      this.setState({
        showComments: !this.state.showComments
      })
    }

    render(){
        return (
          <div>
            <div className="article-links">
              <a className="article-link" href="#" onClick={this.toggleComments}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
            {this.state.showComments ? <Comments />:null}
          </div>
        )
    }
}

export default Links