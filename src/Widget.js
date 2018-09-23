import {React,Component} from 'react';
class Widget extends Component {

    constructor(){
        super();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(!!nextProps.user && nextProps.user.userId !== this.props.user.userId);
        // return !!nextProps.user && nextProps.user.userId !== this.props.user.userId;
        return false;
    }

    render(){
        const { title, icon, degrees, wind, location, unitsType,speed } = this.props;
        return (
            <div>jflksjfkljdslkjkl</div>
           
        )
    }
}

export default Widget;
