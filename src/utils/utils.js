export const getChatCaption = (chat, allUsers) => {
    if(chat.conversation.name) {
        return chat.conversation.name
    } else { 
        let chatMembers = chat.users.reduce((names, chatUser) =>  {
                let member = allUsers.find(user => user.id === chatUser.userid);
                return member ? names + member.name + ', ': names;
            },[]);
        return chatMembers;
    }
}