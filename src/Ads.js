import React, {Component} from 'react'
import './Ads.css'

class Ads extends Component{
    render(){
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.props.links.map((link,i) => <ArticleLink link={link} key={i}/>)}
            </div>
        )
    }
}
function ArticleLink (props) {
  return (
    <div className="small-6 medium-3 columns other-article">
      <a href="#">
        <img src={props.link.imageUrl} alt={props.link.alt} />
        <p>{props.link.caption}</p>
      </a>  
    </div>
  )
}
export default Ads