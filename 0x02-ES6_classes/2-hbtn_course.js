/**
 * Representation of Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Constructor of class
   * @name {String} = Name of course
   * @length {Number} - Length of course.
   * @students {String[]} - Nmaes of studensts in course
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Obtains the name of course
   */
  get name() {
    return this._name;
  }

  /**
   * sets the name of course
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val
  }

  /**
   * Obtains the length of course
   */
  get length() {
    return this._length;
  }

  /**
   * sets the length of the course
   */
  set length(val) {
    if (!Number.isInteger(val)) {
      throw new TypeError('Length must be a number')
    }
    this._length = val;
  }

  /**
   * gets the name of students offering the course
   */
  get students() {
    return this._students;
  }

  /**
   * sets the names of the students in this course
   */
  set students(val) {
    if (!(val instanceof Array)) {
      throw new TypeError('Students type must be an Array');
    }
    if (!val.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
    }
}
