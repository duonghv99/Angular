window.BaiThemController = function ($scope, $routeParams) {
    // routeParams sẽ ra 1 đối tượng chứa param trên url
    $scope.capbacs = [
        {
            capbac: "Bậc 1",
            money: 500,
            money1: 1500,
            money2: 2000
        },
        {
            capbac: "Bậc 2",
            money: 1000,
            money1: 2000,
            money2: 2500
        },
        {
            capbac: "Bậc 3",
            money: 1500,
            money1: 2500,
            money2: 3000
        }
    ];

    $scope.onSubmitFormNhanVien = function () {
        var vienphi = $scope.capbac.money * $scope.date;
        if ($scope.gender == "Nam") {
            $scope.thongbao = "Ông " + $scope.name + " đã được thanh toán " + vienphi + "VNĐ";
        } else if ($scope.gender == "Nữ") {
            $scope.thongbao = "Bà " + $scope.name + " đã được thanh toán " + vienphi + "VNĐ";
        }
    }

    $scope.onSubmitFormCanBo = function () {
        var vienphi1 = $scope.capbac.money1 * $scope.date;
        if ($scope.gender == "Nam") {
            $scope.thongbao = "Ông " + $scope.name + " đã được thanh toán " + vienphi1 + "VNĐ";
        } else if ($scope.gender == "Nữ") {
            $scope.thongbao = "Bà " + $scope.name + " đã được thanh toán " + vienphi1 + "VNĐ";
        }
    }

    $scope.onSubmitFormQuanLy = function () {
        var vienphi2 = $scope.capbac.money2 * $scope.date;
        if ($scope.gender == "Nam") {
            $scope.thongbao = "Ông " + $scope.name + " đã được thanh toán " + vienphi2 + "VNĐ";
        } else if ($scope.gender == "Nữ") {
            $scope.thongbao = "Bà " + $scope.name + " đã được thanh toán " + vienphi2 + "VNĐ";
        }
    }

}