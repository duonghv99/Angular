var app = angular.module("myapp", []);
// map hàm myFunc với vùng demoController để render dữ liệu ra

// Viết tắt
app.controller("inforController", function ($scope) {

    $scope.info = [{
        name: "Nguyễn Văn A",
        age: 18,
        phone: "09834434342",
    },
    {
        name: "Nguyễn Văn B",
        age: 19,
        phone: "08384834834",
    },
    {
        name: "Lê Văn Mạnh",
        age: 20,
        phone: "08384834834",
    }
    ]

    $scope.welcome = "hihi";

    $scope.say = function () {
        $scope.thongbao = $scope.test; // Lấy dữ liệu từ input sau đó gán cho biến thông báo
        // alert($scope.doibong); // Lấy ra value của select
        if ($scope.doibong == 1) {
            $scope.thongbao = "Mu vô địch";
        } else if ($scope.doibong == 2) {
            $scope.thongbao = "Mc top 2";
        } else {
            $scope.thongbao = "Arsenal top 3";
        }

        $scope.thongbao = $scope.gioitinh
    }
    $scope.count = 0;
    $scope.myMouse = function(){
        $scope.count++;
    }
});
