import Comment from "./Comment";

const commentsData = [
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [],
    },
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                ],
            },
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                ],
            },
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [],
                    },
                    {
                        name: "Rohit Singh",
                        text: "Lorem ipsum dolor sit smet, conseector adip",
                        replies: [
                            {
                                name: "Rohit Singh",
                                text: "Lorem ipsum dolor sit smet, conseector adip",
                                replies: [],
                            },
                            {
                                name: "Rohit Singh",
                                text: "Lorem ipsum dolor sit smet, conseector adip",
                                replies: [],
                            },
                            {
                                name: "Rohit Singh",
                                text: "Lorem ipsum dolor sit smet, conseector adip",
                                replies: [],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [],
            },
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [],
            },
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [],
            },
            {
                name: "Rohit Singh",
                text: "Lorem ipsum dolor sit smet, conseector adip",
                replies: [],
            },
        ],
    },
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [],
    },
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [],
    },
    {
        name: "Rohit Singh",
        text: "Lorem ipsum dolor sit smet, conseector adip",
        replies: [],
    },
];

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
    <Comment key = {index} data={comment} />
    ));
};


const CommentContainer = () => {

    return (
        <div className="p-2 m-4">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentsList comments={commentsData}/>
        </div>
    );
};

export default CommentContainer;