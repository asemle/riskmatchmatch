angular.module('riskMatch')
.service('newsService', function($http) {
  this.getNews = function() {
    var req = {
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=RiskMatch&count=33&offset=0&mkt=en-us&safeSearch=Moderate',
      headers: {
        'Ocp-Apim-Subscription-Key': '2cf1642b69f5452d8a8deeacacd9bd54'
      }
    };
    return $http(req)
    .then(function(response) {
      return response.data.value;
    })
    .catch(function(err) {
      return err;
    })
  }
})
