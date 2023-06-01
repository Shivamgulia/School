import React, { useState, useEffect, useCallback } from 'react';

const SchoolContext = React.createContext({
  schoolid: '',
  Name: '',
  school: {},
  schoolPresent: false,
  login: (school) => {},
  logout: () => {},
});

const retrieveStoredSchool = () => {
  // const [schoolid, setSchoolid] = useState();
  // const [name, setName] = useState();
  const [school, setSchool] = useState();

  useEffect(() => {
    // setSchoolid(localStorage.getItem('schoolid'));
    // setName(localStorage.getItem('name'));
    setSchool(JSON.parse(localStorage.getItem('school')));
  }, []);

  return {
    // schoolid,
    // name,
    school,
  };
};

export const SchoolContextProvider = (props) => {
  const schoolData = retrieveStoredSchool();

  let initialschool;
  if (schoolData) {
    initialschool = schoolData.school;
    console.log(initialschool);
  }

  // const [schoolid, setSchoolid] = useState(initialschoolid);
  // const [name, setName] = useState(schoolData.name);
  const [school, setSchool] = useState(schoolData.school);
  useEffect(() => {
    // setSchoolid(schoolData.schoolid);
    // setName(schoolData.name);
    setSchool(schoolData.school);
  }, [schoolData]);

  console.log(school);
  // console.log(schoolid);
  // console.log(name);

  const schoolPresent = !!school;

  const logoutHandler = () => {
    // setSchoolid(null);
    // setName(null);
    setSchool(null);
    if (localStorage) {
      // localStorage.removeItem('schoolid');
      // localStorage.removeItem('name');
      localStorage.removeItem('school');
    }
  };

  const loginHandler = (schoolprop) => {
    // localStorage.setItem('schoolid', school.id);
    // localStorage.setItem('name', school.name);
    localStorage.setItem('school', JSON.stringify(schoolprop));
    // setSchoolid(school.id);
    // setName(school.name);
    const temp = { ...schoolprop };
    setSchool({ ...schoolprop });

    // console.log(schoolid);
    // console.log(name);
    console.log(school);
  };

  console.log(school);

  const contextValue = {
    schoolid: school ? school.id : null,
    name: school ? school.name : null,
    school: school,
    schoolPresent: schoolPresent,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <SchoolContext.Provider value={contextValue}>
      {props.children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
