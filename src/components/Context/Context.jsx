import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext(false);

export const MyProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleValue = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
      if (e.matches) {
        setShowModal(false);
      }
    });
  }, []);

  return (
    <MyContext.Provider value={{ showModal, toggleValue }}>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node,
};
