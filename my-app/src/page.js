import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLock } from '@fortawesome/free-solid-svg-icons'
import "./page.css";

export default class Pages extends Component {
    render() {
        return (
            <div>
              
                <div className="box-container">
                <div className = "box ss">
                < FontAwesomeIcon icon = {faSearch} size="3x" color="orange"/>
                <p className="pap">Find the best answers to your technical question, and help others </p>

                <button className="but">Join the Community</button>
                <p><small >or Search Content</small></p>
                </div>
                <div className = "box2 s1">
                < FontAwesomeIcon icon = {faLock} size="3x" color="#0284c7"/>
                <p className="papp">Want a secure , private space for your technical Knowlege? </p>
                <small>Get started</small>
                <div>
                <button className="butt">for Large Organization</button>
                <button className="butt">For a team</button>
                </div>



                </div>
                </div>

                <h2>Every <strong>Data Scientist</strong> Has a tab open to Stack Overflow</h2>
                
            </div>
        )
    }
}