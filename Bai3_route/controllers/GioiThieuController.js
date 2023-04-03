window.GioiThieuController = function ($scope, $routeParams, $http) {
    // routeParams sẽ ra 1 đôi tượng chứa param trên url
    // console.log($routeParams.name);
    // Tạo 1 đối tượng kiểm tra dữ liệu mặc định là false
    // Tham số http là giao thức để gọi api
    $scope.kiemTraDuLieu = {
        ten: false, // Chưa có lỗi gì mặc định là false, khi có lỗi đánh dấu thành true
        tuoi: false
    };

    let apiURL = "http://localhost:3000/posts"; // Điền link api mà mình muốn gọi
    $scope.getData = function(){
        $http.get(apiURL).then(function(reponse){
            // Khi gọi API thành công cục reponse sẽ nhận dữ liệu
            // console.log(reponse);
            if(reponse.status == 200){ // Kiểm tra nếu trạng thái == 200 thì thành công
                $scope.danhsach = reponse.data;
            }
        })
    }

    $scope.getData();

    // $scope.danhsach = [
    //     { id: 1, ten: "Nguyễn Văn A", tuoi: 19 },
    //     { id: 2, ten: "Nguyễn Văn B", tuoi: 19 },
    // ]

    $scope.onClose = function () {
        $scope.inputValue = {
            ten: "",
            tuoi: ""
        }

        $scope.editId = 0;
    }

    $scope.onSubmitForm = function () {
        let flag = false;

        if (!$scope.inputValue || !$scope.inputValue.ten) {
            $scope.kiemTraDuLieu.ten = true; // có lỗi là true
            flag = true;
        }else{
            $scope.kiemTraDuLieu.ten = false;
            flag = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.tuoi) {
            $scope.kiemTraDuLieu.tuoi = true; // có lỗi là true
            flag = true;
        }else{
            $scope.kiemTraDuLieu.tuoi = false;
            flag = false;
        }

        if (!flag) {
            // Xử lý sửa
            let editId = $scope.editId;
            // Kiểm tra nếu tồn tại editId thì sửa
            if(editId){
                for(let i = 0; i < $scope.danhsach.length; i++){
                    if($scope.danhsach[i].id == editId){
                        $scope.danhsach[i].ten = $scope.inputValue.ten;
                        $scope.danhsach[i].tuoi = $scope.inputValue.tuoi;
                    }
                }
                $scope.onClose();
                return;
            }

            // let ds = $scope.danhsach;
            // fake id tăng tự động
            // let newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;

            // Tạo object
            let newItem = {
                // id: newId,
                ten: $scope.inputValue.ten,
                tuoi: $scope.inputValue.tuoi,
            }

            $http.post(
                apiURL, // đường dẫn API
                newItem // dữ liệu thêm
            ).then(function(reponse){
                // console.log(reponse);
                if(reponse.status == 201){
                    $scope.getData();
                }
            })
            
            // $scope.danhsach.push(newItem);
            $scope.onClose();
        }
    }

    $scope.onEdit = function (editId) {
        $scope.editId = editId;

        // Tạo ra một đối tượng editItem
        let editItem = {
            ten: "",
            tuoi: ""
        }
        for (let i = 0; i < $scope.danhsach.length; i++) {
            if ($scope.danhsach[i].id == editId) {
                editItem.ten = $scope.danhsach[i].ten;
                editItem.tuoi = $scope.danhsach[i].tuoi;
            }
        }

        // Hiển thị thông tin cần sửa lên form
        $scope.inputValue = {
            ten: editItem.ten,
            tuoi: editItem.tuoi,
        }
    }

    $scope.onDelete = function(deleteId){
        let confirm = window.confirm("Bạn có muốn xóa không ?");
        if(confirm){
            // Loại bỏ #deleteId thì Xóa
            $scope.danhsach = $scope.danhsach.filter(function(item){
                return item.id !== deleteId;
            })
        }
    }
}