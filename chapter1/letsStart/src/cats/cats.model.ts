// 데이터 여기서 만들 거임
// 실제 데이터가 아니라 테스트 하기 위한 가짜 데이터 mock : 모조품
export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "fsduifh",
    name: "blue",
    age: 8,
    species: "Russian Blue",
    isCute: true,
    // join id로 연결!
    friends: ["asdfhj29009", "WE09tju2j"],
  },

  {
    id: "iohf2309q4hr",
    name: "som",
    age: 4,
    species: "Sphynx cat",
    isCute: true,
    friends: ["weju0fj20qj", "asdfhj29009", "weju0fj20qj"],
  },

  {
    id: "WE09tju2j",
    name: "lean",
    age: 6,
    species: "Munchkin",
    isCute: false,
    friends: [],
  },

  {
    id: "asdfhj29009",
    name: "star",
    age: 10,
    species: "Scottish Fold",
    isCute: true,
    friends: ["weju0fj20qj"],
  },

  {
    id: "weju0fj20qj",
    name: "red",
    age: 2,
    species: "Sharm",
    isCute: false,
    friends: [],
  },
];
