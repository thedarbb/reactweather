var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built with React.js
      </p>
      <p>
        Here are some of the tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> Third party weather API
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
