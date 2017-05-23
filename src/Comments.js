import React, {Component} from 'react'

class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:'',
            comments:[],
        }
        this.updateComment=this.updateComment.bind(this)
    }

    updateComment(ev){
        this.setState({
            comment:ev.target.value
        })
    }

    addComment(ev){
        const state={...this.state}
        const comment={
            text:this.state.comment,
            time:new Date()
        }
        state.comments.push(comment)
        state.comment=''
        this.setState(state)
    }

    render(){
        return (
            <div className='comments'>
                <textarea value={this.state.comment} onChange={this.updateComment} placeholder="Enter comment here"></textarea>
                <button className='button' onClick={this.addComment.bind(this)}>Submit Comment</button>
                {this.state.comments.map(comment=>{
                    return(
                        <div className="comment">
                            <div>{props.comment.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Comments