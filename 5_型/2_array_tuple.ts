const person: {
  name: string;
  age: number;
  hobbies: string[],
  role: [number, string]
} = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // tuple型
  role: [2, 'author'],
}

let FavoriteActivites: string[];
FavoriteActivites = ['Sports'];
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// tuple型によりエラー
// person.role[1] = 10;

// tuple型だがこれはできる
person.role.push(123);