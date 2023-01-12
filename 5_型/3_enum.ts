enum Role {
  ADMIN,
  READ_ONLY_USER,
  AUTHOR,
}

enum Role2 {
  ADMIN = 5,
  READ_ONLY_USER = 100,
  AUTHOR = 'AUTHOR',
}


const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.READ_ONLY_USER
}



if (person.role === Role.READ_ONLY_USER) {
  console.log('読み取り専用ユーザ');
}