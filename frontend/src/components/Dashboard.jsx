import React from 'react';
import { AuthorizationCheck } from '../utils/AuthorizationCheck'; 



export class Dashboard extends React.Component {
    componentDidMount() {
        
    }
    authorizationCheck = new AuthorizationCheck();
    

    // addReview(review){
    //     console.log("inside")
    //     debugger;
    //     var product = this.state.product;
    //     product.reviews.push(review);
    //     this.setState({
    //         product
    // 	});
    // }

    render() {
      return <>
        {/*
        let extraTab = <></>;
        if(this.authorizationCheck.checkAuthLevel()){
            debugger;
            console.log("inside");
            extraTab = (
                <li key='personelManagement' className="list-group-item border-0 col-4 float-left">
                    <Link to='/personelManagement'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Personel Management</p>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        }
        let identity = <></>;
        if(!this.authorizationCheck.checkIdentity()){
            identity = (
                <li key='identityCheck' className="list-group-item border-0 col-4 float-left">
                    <Link to='/identityCheck'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Identity Check</p>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        }
        return  <>
            {this.authorizationCheck.redirectToLogin()}
            <ul className="float-left">
                <li key='soldiers' className="list-group-item border-0 col-4 float-left">
                    <Link to='/soldiers'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Soldiers</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li key='notifications' className="list-group-item border-0 col-4 float-left">
                    <Link to='/notifications'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Notifications</p>
                            </div>
                        </div>
                    </Link>
                </li>
                {identity}
                {extraTab}
                <li key='Profile' className="list-group-item border-0 col-4 float-left">
                    <Link to='/profile'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Profile</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className="clear-fix"></div>
      */} 
        </>
    }
}