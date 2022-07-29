const React = require('react');
const Layout = require('../Layout');

// module.exports = function Map({ title, map }) {
//   return (
//     <Layout>
//       <div id="map" style={{ width: '1000px', height: '600px', margin: '30px' }}>
//         <script type="text/javascript" charSet="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A053bd947d462cc1a45aeba4070defff75501905071c0eaf68436ac9976ec698c&amp;lang=ru_RU&amp;apikey=d0a9bfab-79ff-4f7f-a55b-1de663880f56" />
//       </div>
//     </Layout>
//   );
// };
module.exports = function Map({ title, map }) {
  return (
    <Layout>
      <div id="map" style={{ width: '1000px', height: '600px', margin: '30px' }}>
        <script type="text/javascript" charSet="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A053bd947d462cc1a45aeba4070defff75501905071c0eaf68436ac9976ec698c&amp;lang=ru_RU&amp;apikey=d0a9bfab-79ff-4f7f-a55b-1de663880f56" />
      </div>
    </Layout>
  );
};
