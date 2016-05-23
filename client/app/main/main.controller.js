'use strict';

angular.module('adventureLookupApp')
  .controller('MainCtrl', function ($scope, $document, $mdMedia) {
    $scope.getSpan = function($index) {
      var _d = ($index + 1) % 11;

      if (_d === 1 || _d === 5) {
        return 2;
      }
    };

    $scope.items = ['D&D', 'Advanced D&D', 'Basic D&D', 'D&D 3', 'D&D 4', 'D&D 5'];
    $scope.selected = [];
    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };
    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    $scope.jsonData = {
      authors: ['Chris Perkins', 'Jeremy Crawford'],
      artists: ['Kate Irwin', 'Shauna Narciso', 'Richard Whitters'],
      settings: ['Ravenloft', 'Sword Coast'],
      monsters: ['bandit', 'wolf', 'zombie'],
      monsterTypes: ['humanoid', 'beast', 'undead', 'construct'],
      villains: ['Strahd von Zarovich', 'Rahadin', 'Pidlwick II'],
      adventures: [
        {
          name: 'Curse of Strahd',
          description: 'Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against ' +
          'the ancient walls of Castle Ravenloft. Rumbling thunder pounds the castle spires. The wind\s howling ' +
          'increases as he turns his gaz down toward the village of Barovia',
          publisher: 'Wizards of the Coast',
          authors: ['Chris Perkins', 'Jeremy Crawford'],
          artists: ['Kate Irwin', 'Shauna Narciso', 'Richard Whitters'],
          editions: ['D&D 5'],
          setting: 'Ravenloft',
          datePublished: new Date('2016/03/15'),
          level: {
            min: 1,
            max: 10
          },
          hours: 100,
          maps: true,
          art: true,
          monsters: [
            {
              name: 'bandit',
              type: 'humanoid'
            },
            {
              name: 'wolf',
              type: 'beast'
            },
            {
              name: 'zombie',
              type: 'undead'
            }
          ],
          villains: [
            {
              name: 'Strahd von Zarovich',
              type: 'undead'
            },
            {
              name: 'Rahadin',
              type: 'humanoid'
            },
            {
              name: 'Pidlwick II',
              type: 'construct'
            }
          ]
        }
      ]
    };

    $scope.isLarge = function() {
      return $mdMedia('gt-md');
    };

    $scope.$on('$destroy', function () {
    });
  });


