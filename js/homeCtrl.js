angular.module('riskMatch')
.controller('homeCtrl', function($scope, newsService) {


    $scope.frontpagenews = newsService.frontpagenews;
//     "name": "IBA Northeast: Kapnick Insurance partners with Riskmatch",
//     "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=sI6-z2cYwpgI8yqqgB9WRGEK3uIS6XprV0H_gJ6dKK0&v=1&r=http%3a%2f%2fwww.ibamag.com%2fus%2fnews%2fbreaking-news%2fiba-northeast-kapnick-insurance-partners-with-riskmatch-41150.aspx&p=DevEx,5021.1",
//     "image": {
//       "thumbnail": {
//         "contentUrl": "https://www.bing.com/th?id=ON.12B68EDD6CB643CB28838C2D1D04869A&pid=News",
//         "width": 448,
//         "height": 252
//       }
//     },
//     "description": "Independent risk and insurance advisor Kapnick Insurance Group has formed a partnership with the RiskMatch platform to help boost its digital transformation. “We’re always looking for new ways to help make our clients more successful and are excited ...",
//     "about": [
//       {
//         "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/6ed71c45-4329-5eee-5977-904773e5a5ad",
//         "name": "Northeast United States"
//       },
//       {
//         "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/8ab3f322-d6dc-72b7-97d5-23918ecfdeea",
//         "name": "Insurance"
//       }
//     ],
//     "provider": [
//       {
//         "_type": "Organization",
//         "name": "Insurance Business America"
//       }
//     ],
//     "datePublished": "2016-11-29T18:22:00",
//     "category": "ScienceAndTechnology",
//     "$$hashKey": "object:11"
//   }
})
