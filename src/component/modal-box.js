/**
 * @file modal-box
 * This file renders a modal box.
 *
 */
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    MODAL_INFO,
    MODAL_ERROR,
    MODAL_SUCCESS,
} from '../config/modal-types';

/**
 * @class ModalBox
 *
 * Button Effect
 * ------------------------------------------------------------------------
 * If props.redirect is specified the button will redirect the user to the
 * given URL.
 *
 * If props.clickFunction is specified the button will dismiss the modal
 * and run the given function.
 *
 * If neither are specified the button will simply dismiss the modal.
 *
 *
 * Button Text
 * ------------------------------------------------------------------------
 *  If props.dismissButtonText is specified the button will display that
 *  text. Otherwise it will read "Okay"
 */
class ModalBox extends Component {

    constructor() {

        this.closeModal = this.closeModal.bind(this);
        this.getDismissButton = this.getDismissButton.bind(this);
        this.redirect = this.redirect.bind(this);
        this.getErrorModal = this.getErrorModal.bind(this);
        this.getInfoModal = this.getInfoModal.bind(this);
        this.getSuccessModal = this.getSuccessModal.bind(this);
        this.getClassName = this.getClassName.bind(this);
    }

    componentDidMount() {

        this.props.create(this.props.id);
    }

    redirect() {

        var addr = this.props.redirect;
        this.props.history.push(addr);
    }

    closeModal() {

        this.props.close();
    }

    getDismissButton(buttonClass, buttonId) {
    
        var onClickFunction;
        var buttonText = (this.props.dismissButtonText != undefined)
            ? this.props.dismissButtonText
            : 'Okay';

        if (this.props.redirect != undefined) onClickFunction = this.redirect;
        else if (this.props.clickFunction != undefined) onClickFunction = this.props.clickFunction;
        else onClickFunction = this.closeModal;

        return (
            <button
                className={ buttonClass }
                onClick={ onClickFunction }
                id={ buttonId }
            >
                { buttonText }
            </button>
        );
    }

    getClassName(classes) {

        var className = 'modal ' + classes;
        if (this.props.display === true) className += ' display';
        return className;
    }

    getErrorModal() {

        var dismissButtonId = this.props.id + '-dismiss-button';
        var dismissButtonClass = "error";

        return (
            <React.Fragment>
            <div className={this.getClassName('error')}  id={this.props.id}>
                <div className="rel-abs-container">
                <div className="rel-abs-inner">
                    <img src="/img/error.svg" alt="A warning sign." />
                    <h1>{ this.props.title }</h1>
                    <p>{ this.props.message }</p>
                    { this.getDismissButton(dismissButtonClass, dismissButtonId) }
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }

    render() {

        var classes = 'modal ';
        var okayId = this.props.id + '-confirm-button';
        var src, alt, okay, okayClass;

        if (this.props.type == 'success') {
            classes += "success-modal";
            src = "/img/valid.svg";
            alt = "A green checkmark.";
            okayClass = "button primary-button";
        }
        if (this.props.type == 'error') {
            classes += "error-modal";
            src = "/img/error.svg";
            alt = "An orange warning sign.";
            okayClass = "button error-button";
        }
        if (this.props.type == 'info') {
            classes += "info-modal";
            src = "/img/info.svg";
            alt = "Information.";
            okayClass = "button primary-button";
        }

        okay = this.getOkayButton(okayClass, okayId);

        return (
            <React.Fragment>
            <div className={classes} id={this.props.id}>
                <div className="rel-abs-container">
                <div className="rel-abs-inner">
                <img src={src} alt={alt} />
                <h1>{ this.props.title }</h1>
                <p>{ this.props.message }</p>
                { okay }
                </div></div>
            </div>
            </React.Fragment>
        );
    }

    render() {

        switch (this.props.type) {

            case MODAL_ERROR:
                return this.getErrorModal();

            case MODAL_INFO:
                return this.getInfoModal();

            case MODAL_SUCCESS:
                return this.getSuccessModal();

            default return;
        }
    }
}

export default withRouter(ModalBox);

