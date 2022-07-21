import '../assets/css/chat.css';

const Chat = () => {
    const chats = [
    {'id': 1, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 2, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 3, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 4, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 5, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 6, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 7, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 8, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 9, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 10, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 11, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 12, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 13, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 14, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 15, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 16, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 17, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 18, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 19, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 20, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 21, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 22, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
    {'id': 23, 'name': 'John', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 24, 'name': 'Sara', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hi, I am fine', 'lastMessageTime': '2:38 am'},
    {'id': 25, 'name': 'Chris', 'avatar': 'https://via.placeholder.com/150', 'lastMessage': 'Hello, how are you?', 'lastMessageTime': '2:38 am'},
  ];

  const messages = chats.map(chat => {
        return <>
            {/* if id is odd use .chat-message-right else use .chat-message-left */}
            {chat.id % 2 === 0 ?
                <div className="chat-message-right pb-4">
                    <div>
                        <img src="https://via.placeholder.com/150" className="rounded-circle mr-1" alt="" width="40" height="40"/>
                        <div className="text-muted small text-nowrap mt-2">{chat.lastMessageTime}</div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div className="font-weight-bold mb-1">You</div>
                        {chat.lastMessage}
                    </div>
                </div>
                :
                <div className="chat-message-left pb-4">
                    <div>
                        <img src="https://via.placeholder.com/150g" className="rounded-circle mr-1" alt="" width="40" height="40"/>
                        <div className="text-muted small text-nowrap mt-2">{chat.lastMessageTime}</div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div className="font-weight-bold mb-1">{chat.name}</div>
                        {chat.lastMessage}
                    </div>
                </div>
            }
        </>
    }); 
  return (
    <>
        <div className="container-fluid p-0">
            <div className="card">
                <div className="row g-0">
                    <div className="col-12 col-lg-12 col-xl-12">
                        <div className="position-relative">
                            <div className="chat-messages p-4">
                                {messages}
                            </div>
                        </div>
                        <div className="flex-grow-0 py-4 px-4 border-top">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type your message" />
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default Chat
