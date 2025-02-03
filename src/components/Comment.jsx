
const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div className="flex bg-gray-100 rounded-md mb-4 shadow-inner">
            <img 
            className="w-10 h-10 rounded-full"
            alt="user"
            src="https://www.w3schools.com/w3images/avatar2.png"
            />
        
            <div className="ml-2">
                <p className="font-bold">{name}</p>
                <p className="text-black-200">{text}</p>
                
                {/* render replies */}
                <div>
                    {replies.length > 0 && (
                        <p className="font-medium text-sm">
                            {replies.length} {replies.length > 1 ? 'Replies' : 'Reply'}
                        </p>
                    )}
                    {replies.length > 0 && (
                        <div className="ml-4">
                            {replies.map((reply, index) => (
                                <Comment key={index} data={reply} />
                            ))}
                        </div>
                    )}
                </div>
                {/* <p className="font-medium text-sm">{replies} Reply</p> */}
        </div>
        </div>
    )
};

export default Comment;