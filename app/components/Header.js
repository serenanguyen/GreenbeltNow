import React from "react";

import helpers from "./utils/helpers";
import { observer, inject } from 'mobx-react';

@inject('AppState')
@observer
class Header extends React.Component {
        constructor(props){
        // allows access to parent's properties as props
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
      
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
  }
   handleRegister(event){
       event.preventDefault();
       console.log(this.email.value, this.password.value);
       var email = this.email.value;
       var password = this.password.value;

       firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error);     
        }).then(()=> {
            var settings = {
                url: 'http://www.greenbeltnow.com/'
            }
            firebase.auth().currentUser.sendEmailVerification(settings)
                .then(function() {
                    console.log('sent');
                })
                .catch(function(error) {
                    // Error occurred. Inspect error.code.
                });
        });

    }

    handleSignIn(event) {
        event.preventDefault();
        var email = this.email.value;
        var password = this.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error);
        });
    }

    handleSignOut(event){
        event.preventDefault();
        console.log('log out');
        firebase.auth().signOut();
    }

    handleReset(event) {
        event.preventDefault();
        var email = this.email.value;
        firebase.auth().sendPasswordResetEmail(email).catch((error) => {
            console.log(error);
        }).then(()=> {
            console.log('sent');
        })
    }

    render(){
        return(
            <div className="fadeInDown">
                <h1>GREENBELT NOW</h1>
                <img src="https://i.imgur.com/5xW6mRh.png" useMap="#Map"/>
                <map name="Map" id="Map">
                    <area alt="Lost Creek" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="80,84,93,103" />
                    <area alt="Sculpture Falls" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="149,153,164,173" />
                    <area alt="Twin Falls"  onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="215,269,231,288" />
                    <area alt="360 Loop" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="302,313,323,331" />
                    <area alt="Gus Fruh" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="327,271,345,293" />
                    <area alt="Spyglass" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="400,203,414,223" />
                    <area alt="Campbell's Hole" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="413,171,431,191" />
                    <area alt="Barton Creek Above Barton Springs Pool" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="512,155,525,173" />
                </map>
                <h2>Can I swim at the Greenbelt today</h2>
                <p>Select a Greenbelt access point on the map or dropdown menu to begin your search.</p>
                <form>
                    <input id="email" type="text" placeholder="Email..." ref={node => {this.email = node;}} />  
                    <input id="password" type="password" placeholder="Password..." ref={node => {this.password = node;}} />
                    <button id="sign-in" onClick={this.handleSignIn}>Sign In</button>
                    <button id="register" onClick={this.handleRegister}>Register</button>
                    <button id="sign-out" onClick={this.handleSignOut}>Sign Out</button>
                    <button id="reset" onClick={this.handleReset}>Reset</button>
                </form>
            </div>
        )
    }
};

module.exports = Header;