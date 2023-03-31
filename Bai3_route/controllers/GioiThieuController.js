window.GioiThieuController = function ($scope, $routeParams) {
    // routeParams sẽ ra 1 đôi tượng chứa param trên url
    // console.log($routeParams.name);
    // Tạo 1 đối tượng kiểm tra dữ liệu mặc định là false
    $scope.kiemTraDuLieu = {
        ten: false, // Chưa có lỗi gì mặc định là false, khi có lỗi đánh dấu thành true
        tuoi: false
    }

    $scope.danhsach = [
        { id: 1, ten: "Nguyễn Văn A", tuoi: 19 },
        { id: 2, ten: "Nguyễn Văn B", tuoi: 19 },
    ]

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
        }

        if (!$scope.inputValue || !$scope.inputValue.tuoi) {
            $scope.kiemTraDuLieu.tuoi = true; // có lỗi là true
            flag = true;
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

            let ds = $scope.danhsach;
            // fake id tăng tự động
            let newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;

            // Tạo object
            let newItem = {
                id: newId,
                ten: $scope.inputValue.ten,
                tuoi: $scope.inputValue.tuoi,
            }
            $scope.danhsach.push(newItem);
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