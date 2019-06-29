import { useState } from 'react';
export default (initialValue) => {
    const [colleges, setColleges] = useState(initialValue);
    return {
        colleges,
        addCollege: (collegeName) => {
            setColleges([...colleges, collegeName]);
        },
        deleteCollege: (collegeIndex) => {
            // returns an updated college list without the specified one
            const updatedCollegeList = colleges.filter((_, index) => index !== collegeIndex);
            setColleges(updatedCollegeList);
        }
    }
}