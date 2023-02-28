const sortContacts = (array, sort) => {
  if (!Array.isArray(array)) {
    return null;
  }

  const result = array.sort((a, b) => {
    if (sort === false) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });

  return result;
};

const test = [
  {
    name: "Tom",
    phoneNumber: "777-77-77",
  },
  {
    name: "Ann",
    phoneNumber: "111-11-11",
  },
  {
    name: "Bob",
    phoneNumber: "444-44-44",
  },
  {
    name: "John",
    phoneNumber: "666-66-66",
  },
];

console.log(sortContacts(test, false));
