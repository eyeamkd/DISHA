import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert"; 
import './styles.css'; 
import { FormControl, InputLabel, Input } from "@material-ui/core"; 
import { database } from '../../firebase/firebase.utils'; 
import { connect } from 'react-redux';  
import { onCommentPosted } from '../../redux/comments/comments-action';
// import Alert from '@material-ui/lab/Alert';

export class CommentsPanel extends Component {
    snackBarStyle = "";
    snackBarMessage = "";
    vertical = "top";
    horizontal = "center"; 
    userInfo = JSON.parse(localStorage.getItem('currentUserInfo'));
    
    constructor(props) {
        super(props);
        this.state = {
        comment: "",
        open: false,
        };
    }
    onCommentClicked = () => {
        if (this.state.comment === "") {
        this.snackBarStyle = "error";
        this.snackBarMessage = "Enter content bruh!!";
        this.setState({ open: true }); 

        } else {
        this.snackBarStyle = "success";
        this.snackBarMessage = "Succesfully Commented!";
        this.setState({ open: true }); 
        this.postComment();
        }
    }; 

    postComment(){  
        const comment={ 
            date: new Date(),
            comment: this.state.comment, 
            userName: this.userInfo.firstName
        }
        this.props.onCommentPosted(comment);
    }
    render() {
    return (
    <div className="comments-panel-display"> 
            <FormControl fullWidth className="comments-input" >
                <InputLabel >Enter your Comment</InputLabel>
                <Input
                    variant="filled"
                    onChange={(e) => this.setState({ comment: e.target.value })}
                    color="primary"
                />
            </FormControl>
            
            <Button
            variant="outlined"
            color="primary"
            onClick={this.onCommentClicked}
            >
                Comment
            </Button>
            <Snackbar
            anchorOrigin={{
                vertical: this.vertical,
                horizontal: this.horizontal,
            }}
            open={this.state.open}
            autoHideDuration={5000}
            key={this.vertical + this.horizontal} 
            onClose={() => this.setState({open: false})}
            >
                <MuiAlert severity={this.snackBarStyle}>
                    {this.snackBarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}
}

const mapDispatchToProps = dispatch => ({ 
    onCommentPosted : comment => dispatch(onCommentPosted(comment))
}) 

const mapStateToProps = state => ({
    commentsState : state.comments.commentsState
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPanel);
