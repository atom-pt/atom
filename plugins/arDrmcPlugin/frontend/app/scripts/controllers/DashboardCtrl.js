'use strict';

module.exports = function ($scope, $q, StatisticsService) {

  var pull = function () {

    var queries = [
      // StatisticsService.getArtworkByMonthSummary(),
      StatisticsService.getDownloadActivity(),
      StatisticsService.getIngestionActivity(),
      StatisticsService.getIngestionSummary(),
      StatisticsService.getRunningTotalByDepartment(),
      StatisticsService.getRunningTotalByCodec(),
      StatisticsService.getArtworkSizesByYearSummary(),
      StatisticsService.getMonthlyTotalByCodec()
    ];

    $q.all(queries).then(function (responses) {
      $scope.downloadActivity = responses[0].data.results;
      $scope.ingestionActivity = responses[1].data.results;
      $scope.ingestionSummary = {
        accessKey: 'total',
        formatKey: 'type',
        data: responses[2].data.results
      };
      $scope.countByDepartment = {
        accessKey: 'count',
        formatKey: 'department',
        data: responses[3].data.results
      };
      $scope.storageCodecs = {
        accessKey: 'total',
        formatKey: 'codec',
        data: responses[4].data.results
      };
      $scope.artworkSizes = [{
        name: 'Average',
        color: 'steelblue',
        xProperty: 'year',
        yProperty: 'average',
        data: responses[5].data.results
      }];
      $scope.yearlyTotalsByCollectionDate = [{
        name: 'Year',
        color: 'hotpink',
        xProperty: 'year',
        yProperty: 'count',
        data: responses[6].data.results.collection
      }];
      $scope.monthlyTotalsByCreation = [{
        name: 'Month',
        color: 'hotpink',
        xProperty: 'month',
        xLabelFormat: 'yearAndMonth',
        yProperty: 'count',
        data: responses[6].data.results.creation
      }];
    });

  };

  pull();

};