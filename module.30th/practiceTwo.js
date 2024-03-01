const friends = ['Alamin', 'Yeasin', 'Rana', 'Forhad', 'Sohan', 'Sobuj']

const filteredFriends = friends => {
    const result = []
    for(const friend of friends) {
        if(friend.length % 2 === 0) {
            result.push(friend)
        }
    }
    return result
}

const filteredResult = filteredFriends(friends)
console.log(filteredResult)