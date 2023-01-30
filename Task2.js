// Функция, которая принимает на вход список пользователей и 
// возвращает плоский список подруг всех пользователей 
// (без сохранения ключей).

const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
  ];

const getGirlFriends = (users) => {
    const getFriendsOfUsers = users.map(({ friends }) => friends);
    const friends = getFriendsOfUsers.flat()
    const filteredFriends = friends.filter((user) => user.gender === 'female')
    return filteredFriends;
  };