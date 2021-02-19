/**
 *
 * @param {Object} person - Movies type returned by TMDB database
 * @param {Number} person.id - Id of person
 * @param {String} person.name - Name of person
 * @param {String} person.birthday - Birthday of person
 * @param {Number} person.gender - Gender of person
 * @param {String} person.biography - Biography of person
 * @param {String} person.known_for_department - Main profession of person
 * @param {String} person.profile_path - Profile image path
 *
 */

const PersonCollection = (person) => ({
  id: person.id,
  name: person.name,
  birthday: person.birthday,
  gender: person.gender === 1 ? "Female" : person.gender === 2 ? "Male" : null,
  biography: person.biography,
  known_for_department: person.known_for_department,
  profile: `https://image.tmdb.org/t/p/w300${person.profile_path}`
});

export default PersonCollection;
