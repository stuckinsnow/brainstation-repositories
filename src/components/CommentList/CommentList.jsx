import './CommentList.scss';

function CommentList(props) {
    // console.log('comment:', props.activeVideo.comments)

    return (
        <>
            {props.activeVideo.comments.map((comment) => {
                return (
                    <div className="comment">
                        <div className="comment__wrapper">
                            <div className="comment__info">
                                <div className="comment__name">{comment.name}</div>
                                <div className="comment__date">{comment.timestamp}</div>
                            </div>
                            <div className="comment__miniwrapper">{comment.comment}</div>
                        </div>
                        <div className="comment__pic"><div>
                            <img src="blank" />
                        </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CommentList;