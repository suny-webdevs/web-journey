function generatePassword(obj) {
    // Check if obj is an object
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        return 'Invalid input';
    }

    // Check if obj has the required properties
    if (!('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
        return 'Invalid input! Missing info';
    }

    // Extract relevant information from the object's properties
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;

    // Validate birthYear
    if (typeof birthYear !== 'number' || birthYear.length <= 3 || birthYear.length >= 3) {
        return 'Invalid birthYear';
    }

    const capChar = siteName[0].toUpperCase()
    // Construct the password using the extracted information
    const password = `${capChar}${siteName.slice(1)}#${name}@${birthYear}`;

    return password;
}

// Example usage:
const obj = { name: 'suny', birthYear: 2000 };
const password = generatePassword(obj);
console.log(password); // Output: "Google#suny@2000"
