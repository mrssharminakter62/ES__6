// const person = {name: 'Jaction', age : 17, job : 'facebooker', gfName : 'Ema Watson', address : 'Bangladesh', phone: 0123493, friends:['Tom haqe', 'soni','boni']}

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);


// another system___________________
/*const person = {name: 'Jaction', age : 17, job : 'facebooker', 
gfName : 'Ema Watson', address : 'Bangladesh', phone: 0123493, friends:['Tom haqe', 'soni','boni']}

const {phone, gfName, address, salary} = person;


console.log(gfName, phone, address, salary);*/

// const friends = ['Sakib khan', 'Arman khan', 'Amir khan', 'Sakman khan', 'Sharukh khan' ];
// const [chotoFriend, nextFriend]= friends;
// console.log(chotoFriend, nextFriend);

// const friends = ['Sakib khan', 'Arman khan', 'Mozila khan', 'Amir khan', 'Sakman khan', 'Sharukh khan' ];
// const [chotoFriend, ...restFriends]= friends;
// console.log(restFriends);

// complex Object_______________________
    const person = {name: 'Jaction', age : 17, job : 'facebooker', gfName : 'Ema Watson', address : 'Bangladesh', phone: 0123493};

const {phone} = person;

const complexObject = {
    name: 'abe',
    info:{
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const{leader} = complexObject.info


// const friends = ['Sakib khan', 'Arman khan', 'Amir khan', 'Sakman khan', 'Sharukh khan' ];
// const [chotoFriend, ...olderF]= friends;
// console.log(olderF);


