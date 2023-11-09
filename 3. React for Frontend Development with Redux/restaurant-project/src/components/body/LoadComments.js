import React from "react";
import dateFormat from "dateformat";

const LoadComments = props =>{
        return(
            props.comments.map(comment =>{
                return(
                    <div key={comment.id}>
                        <h5>Name:{comment.author}</h5>
                        <p>Rating: {comment.rating}</p>
                        <p><b>Comment:</b> {comment.comment}</p>
                        <p>{dateFormat(comment.date, "dddd, mmmm, ds, yyyy, h:MM TT")}</p>
                    </div>
                )
            })
        )
}

export default LoadComments;