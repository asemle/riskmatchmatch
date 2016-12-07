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
        this.frontpagenews = [{
            "name": 'Kapnick Insurance Group Selects RiskMatch Platform for Data/Analytics to Enhance Service, Fortify Niche Marketing Strategy, Drive Efficiency',
            "datePublished": 'December 1, 2016',
            "description": 'GREENWICH, CT, November 28, 2016 – Kapnick Insurance Group, a leading Michigan-based independent risk and insurance advisor, has selected RiskMatch for data and analytics and plans to leverage the patented digital technology to enhance client service, fortify its niche marketing strategy, and drive transactional efficiency. “We’re always looking for new ... ',
            "storyUrl": 'http://riskmatch.com/kapnick-insurance-group-selects-riskmatch-platform-for-dataanalytics-to-enhance-service-fortify-niche-marketing-strategy-drive-efficiency/'
        }, {
            "name": 'Crystal & Company Selects RiskMatch Platform For Data/Analytics, Bringing Patented Technology To Enhance Service, Drive Efficiency',
            "datePublished": 'November 21, 2016',
            "description": 'GREENWICH, CT, November 21, 2016 – Crystal & Company, a leading strategic risk and insurance advisor, has selected RiskMatch for data and analytics, to provide digital technology to its people and their clients, including ready access to real-time market information, enhanced service, transactional efficiency, and the potential to expand insurance ...',
            "storyUrl": 'http://riskmatch.com/?post_type=post&p=528'
        }, {
            "name": 'Michael S. Cormier Joins RiskMatch As Chief Client Engagement Officer, Focusing On Insurance Brokers And Wholesalers',
            "datePublished": 'September 26, 2016',
            "description": 'Mike brings proven strategic leadership skills and extensive experience leading a global consulting organization, which make him an excellent fit for our collaborative approach.',
            "storyUrl": 'http://riskmatch.com/?post_type=post&p=510'
        }]
    })
