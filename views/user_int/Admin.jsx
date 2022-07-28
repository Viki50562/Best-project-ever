const React = require('react');
const Layout = require('../Layout');

module.exports = function Admin({ order }) {
  return (
    <Layout>
      <dev>
        {order}
      </dev>
    </Layout>
  );
};
