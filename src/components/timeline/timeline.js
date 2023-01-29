import React, { Component } from 'react';
import "./timeline.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class ParseURLS extends Component {
    constructor(props) {
        super(props);
        
    }


 
  render() {
        // Parsed valued from string
        console.log(this.props.data);

        let data = this.props.data
        const protocol = "http://";

        const content = Array.isArray(data)
        ? data.map((item, index) => <div key={index} data-testid="timeline-url-item">    
        
        <div classname="timeline">
        <a classname="timeline" href={item.url} target="_blank">{item.url}</a>
        </div>
        </div>
        ) : null;

        return (<div className="timeline" data-testid="timeline_id">
                {content}
            </div>)
       
    }
   

}






class TimeLine extends Component {



    render() {

        let data = this.props.data;
      
        const protocol = "http://";

        const content = data.map((item, index) => <div key={item.id} data-testid="timeline-item">

            {item.id % 2 !== 0 &&
                <div className="column-left ">
                    <div className="col-card-left">
                        <div className="col-card-title col-card-title-left"><a href={item.page}> {item.title} </a></div>
                        <div className="col-card-subtitle col-card-subtitle-left">{item.subtitle}</div>
                        <div className="col-card-para">{item.para}</div>
                        <ParseURLS data={item.urls}></ParseURLS>
                    </div>
                </div>
            }
            {item.id % 2 !== 0 &&
                <div className="column-right" >
                    <div className="col-note col-note-right">
                        <p>{item.note}</p>
                    </div>
                    <div className='column-left'><img className='column-left' src={process.env.PUBLIC_URL + item.image}></img></div>
                </div>
            }

            <div className="column-center" >
                {item.id % 2 !== 0 &&
                    <div className="triangle-left"></div>
                }
                {item.id % 2 === 0 &&
                    <div className="triangle-right"></div>
                }
                <div className="line"></div>
                <div className="circle">
                    <FontAwesomeIcon className="icon" icon={['fab', item.icon]} />
                </div>
            </div>

            {item.id % 2 === 0 &&
                <div className="column-right" >
                    <div className="col-card-right">
                        <div className="col-card-title col-card-title-right">{item.title}</div>
                        <div className="col-card-subtitle col-card-subtitle-right">{item.subtitle}</div>
                        <div className="col-card-para">{item.para}</div>
                        <ParseURLS data={item.urls}></ParseURLS>
                    </div>
                </div>
            }

            {item.id % 2 === 0 &&
                <div className="column-left" >
                    <div className="col-note col-note-left">
                        <p>{item.note}</p>
                    </div>
                    <div className='column-right'><img className='olumn-right' src={process.env.PUBLIC_URL + item.image}></img></div>
                </div>
            }
            <div className="clearfix"></div>
        </div>
        );

        return (
            <div className="timeline" data-testid="timeline_id">
                {content}
            </div>)
    }
    



}

export default TimeLine;