(function () {
    'use strict';

    angular.module('game')
        .controller('GameController', GameController);

    GameController.$inject = ['$scope'];

    function GameController($scope) {
        var vm = this;
        vm.user = new User("Doug");
        vm.thing = "thing";
        vm.scope = $scope;
    }

    GameController.prototype.addExp = function () {
        var _this = this;
        setInterval(function () {
            _this.scope.$apply(function () {
                _this.user.addExp(10);
            });
        }, 100);
    };


    var User = (function () {
        function User(name, experience) {
            var _this = this;

            _this.name = name;
            _this.exp = new Experience(100);

        }
        User.prototype.addExp = function (xp) {
            this.exp.addXp(xp);
        };

        return User;
    }());

    var Experience = (function () {
        var _const = 0.02;

        function Experience(xp) {
            var l = this;

            l.level = 1;

            l.xp = 0;
            l.progress = "";
            l.min = 0;
            l.max = 0;

            //            l.progressMax = 0;
            //            l.progressValue = 0;

            this.addXp(xp);
        }

        //        Experience.prototype.progressMax = function () {
        //            return this.max - this.min;
        //        };
        //        Experience.prototype.progressValue = function () {
        //            return this.xp - this.min;
        //        };
        Experience.prototype.calculateExp = function (level) {
            return (Math.pow(level, 2)) / _const;
        };
        Experience.prototype.calculate = function () {
            this.min = this.calculateExp(this.level);
            this.max = this.calculateExp(this.level + 1);


            //this.progressMax = this.max - this.min;
            this.progressValue = (this.xp - this.min) / (this.max - this.min) * 100;
            //var percent = 
            //this.progress = Math.floor(percent) + "%";

        };

        Experience.prototype.addXp = function (xp) {

            this.xp += xp;
            this.level = Math.floor(Math.sqrt(this.xp * _const));
            this.calculate();
        };

        return Experience;
    }());
}());