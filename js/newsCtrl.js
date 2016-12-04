angular.module('riskMatch')
.controller('newsCtrl', function($scope, newsService) {
  function getNews() {
    newsService.getNews()
    .then(function(response) {
      $scope.news = response;
      console.log(response)
    })
  }
  // getNews();
$scope.sorter = '-datePublished';
$scope.sortDate = 'active'
  $scope.news = [
  {
    "name": "IBA Northeast: Kapnick Insurance partners with Riskmatch",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=sI6-z2cYwpgI8yqqgB9WRGEK3uIS6XprV0H_gJ6dKK0&v=1&r=http%3a%2f%2fwww.ibamag.com%2fus%2fnews%2fbreaking-news%2fiba-northeast-kapnick-insurance-partners-with-riskmatch-41150.aspx&p=DevEx,5021.1",
    "image": {
      "thumbnail": {
        "contentUrl": "https://www.bing.com/th?id=ON.12B68EDD6CB643CB28838C2D1D04869A&pid=News",
        "width": 448,
        "height": 252
      }
    },
    "description": "Independent risk and insurance advisor Kapnick Insurance Group has formed a partnership with the RiskMatch platform to help boost its digital transformation. “We’re always looking for new ways to help make our clients more successful and are excited ...",
    "about": [
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/6ed71c45-4329-5eee-5977-904773e5a5ad",
        "name": "Northeast United States"
      },
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/8ab3f322-d6dc-72b7-97d5-23918ecfdeea",
        "name": "Insurance"
      }
    ],
    "provider": [
      {
        "_type": "Organization",
        "name": "Insurance Business America"
      }
    ],
    "datePublished": "2016-11-29T18:22:00",
    "category": "ScienceAndTechnology",
    "$$hashKey": "object:11"
  },
  {
    "name": "RiskMatch™ Appoints Thomas McMahon as Relationship Leader",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=2mPeM4_85D6goV5gi02LcYHgmEKu3pcqmMrMABlkVpw&v=1&r=http%3a%2f%2fwww.businesswire.com%2fnews%2fhome%2f20131118006185%2fen%2fRiskMatch%25E2%2584%25A2-Appoints-Thomas-McMahon-Relationship-Leader&p=DevEx,5023.1",
    "description": "GREENWICH, Conn.--(BUSINESS WIRE)--RiskMatch TM, a business intelligence and analytics firm that provides insurance portfolio management and placement solutions to insurance brokers and insurers, today announced the appointment of Thomas McMahon as ...",
    "about": [
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/981e1497-286d-9393-e2ca-58a79e31e03f",
        "name": "Thomas McMahon"
      },
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/235a0e9c-154b-6a99-1b61-77f805360330",
        "name": "Business Wire"
      },
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/06119713-f244-2b6c-92cd-867e1398044a",
        "name": "Relationship"
      }
    ],
    "provider": [
      {
        "_type": "Organization",
        "name": "Business Wire"
      }
    ],
    "datePublished": "2013-11-18T12:04:00",
    "$$hashKey": "object:12"
  },
  {
    "name": "The Strongest Transformative Forces in the Insurance Industry",
    "url": "https://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=4zHwH7EgzxKCaESlwMNH1NxVOkZZ1NMLs8ujYWDtrfY&v=1&r=https%3a%2f%2fletstalkpayments.com%2fthe-strongest-transformative-forces-in-the-insurance-industry%2f&p=DevEx,5025.1",
    "image": {
      "thumbnail": {
        "contentUrl": "https://www.bing.com/th?id=ON.EC401CDD60AF411ADE7AC02E5D28EA29&pid=News",
        "width": 400,
        "height": 220
      }
    },
    "description": "An example here is RiskMatch, which provides an array of portfolio management and placement solutions, analytics, internal and external benchmarking capabilities, and information management services designed to enhance performance, reduce costs ...",
    "about": [
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/4cb409df-d264-b7f2-6251-038d04d1a878",
        "name": "Let's Talk"
      },
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/516bdc73-ed42-ee1a-6494-de4c761334b8",
        "name": "The Strongest"
      },
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/8ab3f322-d6dc-72b7-97d5-23918ecfdeea",
        "name": "Insurance"
      }
    ],
    "provider": [
      {
        "_type": "Organization",
        "name": "letstalkpayments.com"
      }
    ],
    "datePublished": "2016-11-26",
    "category": "ScienceAndTechnology",
    "$$hashKey": "object:13"
  },
  {
    "name": "Crystal Chooses RiskMatch Digital Technology",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=TzHHsgc-lb773EPwxjVQDWP_bVX5PfrRyqhW0H6yqGY&v=1&r=http%3a%2f%2femagazine.itapro.org%2fHome%2fArticle%2fCrystal-Chooses-RiskMatch-Digital-Technology%2f1723&p=DevEx,5027.1",
    "description": "Crystal & Company, a leading strategic risk and insurance advisor, selects RiskMatch for data and analytics, to provide digital technology to its people and their clients, including ready access to real-time market information, enhanced service ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "emagazine.itapro.org"
      }
    ],
    "datePublished": "2016-11-21",
    "$$hashKey": "object:14"
  },
  {
    "name": "RiskMatch – connecting the disconnected world of commercial insurance",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=Ru92dGwnBEytpwrlW8rrGkQHJ1PgTZM3GwCB07eVd1A&v=1&r=http%3a%2f%2fbankinnovation.net%2f2015%2f07%2friskmatch-connecting-the-disconnected-world-of-commercial-insurance%2f&p=DevEx,5029.1",
    "description": "As understatements go, saying that the US insurance market is a big market is up there with the best of them! It’s around $1trillion in size with the market split roughly 50:50 between commercial and personal. Let’s pick the commercial insurance market ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "bankinnovation.net"
      }
    ],
    "datePublished": "2015-07-02",
    "$$hashKey": "object:15"
  },
  {
    "name": "Schul Joins Analytics Firm RiskMatch",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=CzaION0FSMOiYsFJlQSsvJUIXPRKgeQF1A5Eaimxt4g&v=1&r=http%3a%2f%2fwww.insurancejournal.com%2fnews%2fnational%2f2015%2f09%2f03%2f380714.htm&p=DevEx,5031.1",
    "description": "Patrick Schul has joined RiskMatch, a Greenwich, Connecticut-based analytics firm for underwriters and brokers, as chief sales and marketing officer. Before joining RiskMatch, Schul was chairman and CEO of Schul Baker Partners, a firm he co-founded in 2011 ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "Insurance Journal"
      }
    ],
    "datePublished": "2015-09-03T16:45:07",
    "$$hashKey": "object:16"
  },
  {
    "name": "A.M. Best Webinar: Succeeding in the Data-Driven Insurance Sales Environment",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=kUmhXAdKDfVIGfSmw8DlStHJ4GGFLKI4A7LHpYagJzk&v=1&r=http%3a%2f%2fwww.advfn.com%2fnews_A-M-Best-Webinar-Succeeding-in-the-Data-Driven-I_72965783.html&p=DevEx,5033.1",
    "description": "Propis, U.S. commercial head of broker engagement, AIG; Cynthia Beveridge, deputy chief executive officer, AON InPoint; Bob Howe, placement & market leader, Marsh; and Kabir Syed, chief executive officer and founder, RiskMatch. Attendees can submit ...",
    "about": [
      {
        "readLink": "https://api.cognitive.microsoft.com/api/v5/entities/bfb3f5d8-ffb9-ee44-589e-cde998701d95",
        "name": "Data"
      }
    ],
    "provider": [
      {
        "_type": "Organization",
        "name": "advfn.com"
      }
    ],
    "datePublished": "2016-11-21T15:30:00",
    "category": "ScienceAndTechnology",
    "$$hashKey": "object:17"
  },
  {
    "name": "Company Overview of RiskMatch, LLC",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=zsH2WJ95u4wt--ZzttSB3Pce02woKmkstmCl8LpZ6c4&v=1&r=http%3a%2f%2fwww.bloomberg.com%2fresearch%2fstocks%2fprivate%2fsnapshot.asp%3fprivcapid%3d314344538&p=DevEx,5035.1",
    "description": "RiskMatch, LLC develops and provides Web-based insurance solutions for insurance intermediaries and underwriting partners in the United States. The company offers RiskMatch, a platform that elevates broker relationship management capabilities and enhances ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "Bloomberg"
      }
    ],
    "datePublished": "2016-11-26T02:30:00",
    "$$hashKey": "object:18"
  },
  {
    "name": "RiskMatch: Unlocking $120B in Premium Opportunities for Carriers",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=HyvXPpI30dtKN1F5s1v511EtJrUNd6CihhSFa0MSycw&v=1&r=http%3a%2f%2fwww.carriermanagement.com%2ffeatures%2f2014%2f08%2f18%2f127788.htm&p=DevEx,5037.1",
    "description": "With an ultimate goal of onboarding 97 brokers handling $120 billion of premium on its platform, a new entrant in the world of broker analytics offers carriers a clearer window into relationships with national and regional distribution partners. Kabir ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "carriermanagement.com"
      }
    ],
    "datePublished": "2014-08-18",
    "$$hashKey": "object:19"
  },
  {
    "name": "How One Company Is Empowering Brokers and Insurers in the Face of InsurTech Rivalry",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=QrejZU9eVTr9joWnGnwlfDIYgGXhA6LQLzOttLwOtT4&v=1&r=http%3a%2f%2ffintechranking.com%2f2016%2f10%2f03%2fhow-one-company-is-empowering-brokers-and-insurers-in-the-face-of-insurtech-rivalry%2f&p=DevEx,5039.1",
    "description": "One of the most notable players on the broker’s and carriers side of the field is RiskMatch, the fastest-growing insurance platform that delivers Web-based solutions for insurance intermediaries and underwriting partners throughout the US. The company ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "fintechranking.com"
      }
    ],
    "datePublished": "2016-10-03",
    "$$hashKey": "object:20"
  },
  {
    "name": "Who's Using What: The Latest Insurance Software Implementations",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=hUpLcrxDSkq-LHV2f4ztlMNe0_3HWCA8LtmPhJ3swtE&v=1&r=http%3a%2f%2fwww.propertycasualty360.com%2f2014%2f03%2f07%2fwhos-using-what-the-latest-insurance-software-impl&p=DevEx,5041.1",
    "description": "RiskMatch, an insurance industry business intelligence and analytics firm that provides portfolio management and placement solutions to brokers and insurers, was issued U.S. patent No. 8,666,788, \"Systems and methods for facilitating an insurance ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "Property Casualty 360"
      }
    ],
    "datePublished": "2014-03-07T13:40:13",
    "$$hashKey": "object:21"
  },
  {
    "name": "Connecticut venture funding tops $100m in Q3",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=M5BZ2lGKmCbbOAjzc89Z3ibZDvfWGq3rZ5Hs3PlcHPo&v=1&r=http%3a%2f%2fwww.thehour.com%2fbusiness%2farticle%2fConnecticut-venture-funding-tops-100m-in-Q3-9634621.php&p=DevEx,5043.1",
    "description": "and RiskMatch, a Greenwich firm that that has created a web-based analytics platform for insurance underwriters and brokers. The SEC deals do not include several more funding commitments for companies in Stamford made the past few months by Connecticut ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "The Hour Online"
      }
    ],
    "datePublished": "2016-10-03T20:48:55",
    "$$hashKey": "object:22"
  },
  {
    "name": "Six new tenants sign leases at recently renovated Greenwich Office Park",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=vpGPspHNVaZ69IOy8rf_gm1KmYCCYc-wqj2klGs1r18&v=1&r=http%3a%2f%2fwww.greenwich-post.com%2f35468%2fsix-new-tenants-sign-leases-at-recently-renovated-greenwich-office-park%2f&p=DevEx,5045.1",
    "description": "Starwood Capital Group was represented by Gil Ohls, Managing Director of JLL. RiskMatch, a business intelligence and analytics firm that provides insurance portfolio management and placement solutions to insurance brokers and insurers, leased one of the ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "greenwich-post.com"
      }
    ],
    "datePublished": "2015-07-14T19:29:13",
    "$$hashKey": "object:23"
  },
  {
    "name": "Larger buyers slow to adopt electronic insurance placement",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=ZRw3BEK9HJLvQieHFxil1knc8KEeH2Vu7x7zhPrS3dM&v=1&r=http%3a%2f%2fwww.businessinsurance.com%2farticle%2f20140831%2fNEWS05%2f308319996&p=DevEx,5047.1",
    "description": "Connecticut-based CEO of business intelligence and analytics firm RiskMatch L.L.C. For example, cyber risk policy terms, conditions and even terminology may vary widely among brokers and insurers, making apples-to-apples comparisons difficult, he said.",
    "provider": [
      {
        "_type": "Organization",
        "name": "Business Insurance"
      }
    ],
    "datePublished": "2014-08-31T20:13:30",
    "$$hashKey": "object:24"
  },
  {
    "name": "Greenwich Office Park welcomes six new tenants",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=cKEZtNudOgA9PLxS8rtj5VkyDRUcgFaBidRDNrJ5b-Y&v=1&r=http%3a%2f%2fwww.greenwichtime.com%2fbusiness%2farticle%2fGreenwich-Office-Park-welcomes-six-new-tenants-6389451.php&p=DevEx,5049.1",
    "description": "RiskMatch, a business intelligence and analytics firm that provides insurance portfolio management and placement solutions to insurance brokers and insurers, leased almost 2,000 square feet of space in the same building. CareNext, an eviCore company ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "Greenwich Time"
      }
    ],
    "datePublished": "2015-07-16T22:29:02",
    "$$hashKey": "object:25"
  },
  {
    "name": "6 Businesses Sign Leases for Greenwich Office Park",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=tVi0t5-Ns78eXtWWHS_PVpFcXHZjCMoHoVtrKqsaxJA&v=1&r=http%3a%2f%2fpatch.com%2fconnecticut%2fgreenwich%2f6-businesses-sign-leases-greenwich-office-park-0&p=DevEx,5051.1",
    "description": "Starwood Capital Group was represented by Gil Ohls, Managing Director of JLL, according to the announcement. RiskMatch, a business intelligence and analytics firm that provides insurance portfolio management and placement solutions to insurance brokers and ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "Patch"
      }
    ],
    "datePublished": "2015-07-15T01:00:00",
    "$$hashKey": "object:26"
  },
  {
    "name": "RiskMatch – connecting the disconnected world of commercial insurance",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=tWaxaps53mxN22GwsUcJ88O7i1p6UBrHMPNh7TLEt9E&v=1&r=http%3a%2f%2fbanknxt.com%2f51918%2friskmatch-commercial-insurance%2f&p=DevEx,5053.1",
    "description": "Rick Huckstep reviews analytics firm RiskMatch, a platform its co-founder Kabir Syed describes as being ‘an opportunity marketplace for brokers and insurers’. As understatements go, saying that the US insurance market is a big market is up there with ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "banknxt.com"
      }
    ],
    "datePublished": "2016-11-29T09:39:20",
    "$$hashKey": "object:27"
  },
  {
    "name": "A.M. Best Webinar: Succeeding in the Data-Driven Insurance Sales Environment",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=vkqGuQ6AK8Pqywc1brSPIqph4SGky7xXIhXJs-EhFh8&v=1&r=http%3a%2f%2fwww.traderplanet.com%2fnews%2fview%2f129882%2f&p=DevEx,5055.1",
    "description": "s demanding customers. Bob Howe, placement & market leader, Marsh; and Kabir Syed, chief executive officer and founder, RiskMatch. Attendees can submit questions during registration or by emailing webinars@ambest.com. The event will be streamed in video ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "traderplanet.com"
      }
    ],
    "datePublished": "2016-11-18",
    "$$hashKey": "object:28"
  },
  {
    "name": "A.M. Best Webinar: Succeeding in the Data-Driven Insurance Sales Environment",
    "url": "http://www.bing.com/cr?IG=F5714D4F9F504794BA2099A21D6D77D8&CID=190B6EC4BEDA6C2B16B96724BFEB6D49&rd=1&h=Ir0n09Odjk4UsEuNcJ-Cc4MrF29TZBxjndHDl4TFog0&v=1&r=http%3a%2f%2fwww.tmcnet.com%2fusubmit%2f-am-best-webinar-succeeding-the-data-driven-insurance-%2f2016%2f11%2f21%2f8457347.htm&p=DevEx,5057.1",
    "description": "A.M. Best will be hosting a one-hour webinar , titled, \"Succeeding in the Data-Driven Insurance Sales Environment\" on Tuesday, December 6, 2016, at 2:00 p.m. (EST). This webinar, sponsored by Lexington Insurance Company, a member of American International ...",
    "provider": [
      {
        "_type": "Organization",
        "name": "TMCnet.com"
      }
    ],
    "datePublished": "2016-11-21T21:43:47",
    "$$hashKey": "object:29"
  }
]
  $scope.shorten = function(str) {
    if(str.length > 85) {
      str = str.slice(0, 85) + "...";
    }
    return str;
    }
// "sortDate">Date</a> | <a href="#" ng-click="sorter = 'new.provider[0].name' changeClass()" ng-class="sortPub"
$scope.changeClass = function() {
  if($scope.sorter === 'new.provider[0].name') {
    $scope.sortDate = 'inactive';
    $scope.sortPub = 'active';
  }
  else {
    $scope.sortDate = 'active';
    $scope.sortPub = 'inactive';
  }
}

    $scope.getImg = function(source) {
      if (source ===   "Business Insurance") {
        return "media/newsIcons/business-insurance-logo.png";
      }
      if (source === "Property Casualty 360") {
        return "media/newsIcons/propertyCasual360.png";
      }
      if (source === 'carriermanagement.com') {
        return "media/newsIcons/carrier-management.png";
      }
      if (source === "Insurance Journal") {
        return "media/newsIcons/insuranceJournal.png";
      }
      if (source === "bankinnovation.net") {
        return "media/newsIcons/BankInnovation.png";
      }
      if (source === "emagazine.itapro.org") {
        return "media/newsIcons/ITA-PRO-1.png";
      }
      if (source === "Business Wire") {
        return "media/newsIcons/business-wire.png";
      }
      else {
        return "media/newsIcons/logo-w.png";
      }
    }
})
