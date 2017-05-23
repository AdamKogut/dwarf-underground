import React, {Component} from 'react'
import './MainClass.css';
import Posts from './Posts'
import Links from './Links'
import Sidebar from './Sidebar'
import Ads from './Ads'

const ads=[
    {
    imageUrl: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
    caption: "Single Orcs in Indianapolis",
    alt: "orcs"
  },
  {
    imageUrl: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
    caption: "You won't believe what's under this mountain",
    alt: "mountain"
  },
  {
    imageUrl: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
    caption: "Mine 20% more gold with One Weird Trick",
    alt: "gold"
  },
  {
    imageUrl: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
    caption: "Surprise for Indiana Hobbits born before 1999",
    alt: "hobbit"
  },
]

class MainClass extends Component{
    render(){
        return (
            <main className="expanded row">
                <div className="large-8 medium-12 columns article">
                    <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                    <div className="avatar">
                        <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                        <div className="author-info">
                            <p className="author-name">By Domri, son of Flug</p>
                            <p className="date">on 28 April, 3018 of the Third Age</p>
                        </div>
                    </div>
                    <Posts />
                    <Links />
                </div>
                <Sidebar />

                <Ads links={ads}/>
            </main>
        )
    }
}

export default MainClass