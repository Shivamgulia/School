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
  const [schoolid, setSchoolid] = useState();
  const [name, setName] = useState();
  const [school, setSchool] = useState();

  useEffect(() => {
    setSchoolid(localStorage.getItem('schoolid'));
    setName(localStorage.getItem('name'));
    setSchool(localStorage.getItem('school'));
  }, []);

  return {
    schoolid,
    name,
    school,
  };
};

export const SchoolContextProvider = (props) => {
  const schoolData = retrieveStoredSchool();

  let initialschoolid;
  if (schoolData) {
    initialschoolid = schoolData.schoolid;
    console.log(schoolData.schoolid);
  }

  const [schoolid, setSchoolid] = useState(initialschoolid);
  const [name, setName] = useState(schoolData.name);
  const [school, setSchool] = useState(schoolData.school);
  useEffect(() => {
    setSchoolid(schoolData.schoolid);
    setName(schoolData.name);
    setSchool(schoolData.school);
  });

  const schoolPresent = !!schoolid;

  const logoutHandler = useCallback(() => {
    setSchoolid(null);
    setName(null);
    setSchool(null);
    if (localStorage) {
      localStorage.removeItem('schoolid');
      localStorage.removeItem('name');
      localStorage.removeItem('school');
    }
  }, []);

  const loginHandler = (school) => {
    setSchoolid(school.id);
    if (localStorage) {
      localStorage.setItem('schoolid', school.id);
      localStorage.setItem('name', school.name);
      localStorage.setItem('school', JSON.stringify(school));
    }
  };

  const contextValue = {
    schoolid: schoolid,
    name: name,
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
