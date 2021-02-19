/**
 *
 * @param {Object[]} people[] - Movies type returned by TMDB database
 * @param {Number} people[].id - Id of person
 * @param {String} people[].known_for_department - Main profession of person
 * @param {String} people[].name - Name of person
 * @param {String | null} people[].profile_path - Profile image path
 *
 */

const PeopleCollection = (people) => {
  return people.map((person) => {
    return {
      id: person.id,
      known_for_department: person.known_for_department,
      name: person.name,
      profile: person.profile_path
        ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
        : null
    };
  });
};

export default PeopleCollection;
