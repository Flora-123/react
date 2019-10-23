
import logo from './logo.svg';
import React, { Component} from 'react'
import PropTypes from 'prop-types';
import './demo.css'
const confirm = (props)=>{
	return new Promise((resolve,reject)=>{
		resolve(props)
	})
}
 class InputNumber extends Component{
 constructor(props){
  super(props);
 }
 render(){
  const {value,defaultValue,onChange} = this.props;
  return(
   <div>
    <input value={value} placeholder={defaultValue} onChange={(e)=>onChange(e)}/>
   </div>
  )
 }
 }  
class Modal extends Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    option: PropTypes.array
  }

  static defaultProps = {
    option: []
  }

  render() {
    const { title, message, option, close } = this.props;
    const classNames = option.length === 2 ? 'modal-button double' : 'modal-button';
    return (
      <div className="overlay overlay-modal" onTouchMove={e => e.preventDefault()}>
        <div className="modal">
          <div className="modal-content-wrap">
            {title && <div className="modal-title">{title}</div>}
            {message && <div className="modal-inner" dangerouslySetInnerHTML={{ __html: message }} ></div>}
          </div>
          <div className="modal-button-wrap">
            {
              option.map(
                (item, i) => <div key={i} className={classNames} onClick={() => {
                  item.fn && item.fn();
                  close(this.props.id);
                }}>
                  {item.text}
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  };
}
 class App extends Component{
     constructor(props){
	  super(props);
	  this.state={
		  item:{
			id: 0,
			  title: '我是标题',
			  message: '激励大家理解邓丽君的',  
			  options:[{
				  text:'确认',
				fn:function(){
					
				}
			  },{
				  text:'拒绝',
				fn:function(){
					
				}
			  },{
				  text:'取消',
				fn:function(){
					
				}
			  }]
		  }
		  
	  }
	 }
	async componentDidMount(){
		let res = await confirm("确定删除吗");
		console.log(res);
		console.log('res');
		if(res) {
			console.log("是")
		} else {
			console.log("否")
		}
	}
	render(){
		const {item} = this.state
		return (
			<div>
				      <Modal
          id={item.id}
          title={item.title}
          message={item.message}
		  option = {item.options}
        />
			</div>
		)
	}
    
}

export default App