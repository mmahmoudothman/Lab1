function sum(arr) {
    return arr.reduce((accumulator, currentValue) => {
      if (currentValue > 20) {
        return accumulator + currentValue;
      }
      return accumulator;
    }, 0);
  }
  
  // Example usage:
  const myArray = [10, 25, 5, 30, 15];
  const sumOfElementsGreaterThan20 = sum(myArray);
  console.log(sumOfElementsGreaterThan20); // Output: 55 (25 + 30)
  


const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const bbb = a.filter(function (s) {
    return (s.charAt(0) == 'a' && s.length > 4)
});

console.log(bbb)



const concat = (...args) => {
    return args.reduce((result, arg) => {
      if (typeof arg === 'string') {
        // If the argument is a string, split it into individual characters and add them to the result
        return result.concat(arg.split(''));
      } else if (Array.isArray(arg)) {
        // If the argument is an array, add its elements to the result
        return result.concat(arg);
      }
      return result;
    }, []);
  };

  const students = [
    { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] }
  ];
  
  const filteredStudents = students.filter(stu => stu.courses.includes('cs303'));
  
  const averageGrades = filteredStudents.reduce((accu, stu) => {
    let average = stu.grades.reduce((avg, g) => avg + g / stu.grades.length, 0);
    accu[stu.name] = average;
    return accu;
  }, {});
  
  console.log(averageGrades);
  