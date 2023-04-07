window.SanPhamController = function ($scope, $routeParams) {
    // routeParams sẽ ra 1 đôi tượng chứa param trên url
    // console.log($routeParams.name);
    // Tạo 1 đối tượng kiểm tra dữ liệu mặc định là false
    $scope.kiemTraDuLieu = {
        sp: false,
        sl: false,
        don: false, 
        trangthai: false,
    }

    $scope.danhsach = [
        { id: 1, sp: "Táo", sl: 2, don: 3000 },
        { id: 2, sp: "Lê", sl: 5, don: 5000 },
        { id: 3, sp: "Quất", sl: 3, don: 6000 },
        { id: 4, sp: "Đào", sl: 4, don: 8000 },
        { id: 5, sp: "Ổi", sl: 7, don: 2000 },
    ]

    $scope.onClose = function () {
        $scope.inputValue = {
            sp: "",
            sl: "",
            don: "",
            trangthai: "",
        }

        $scope.editId = 0;
    }

    $scope.onSubmitForm = function () {
        let flag = false;

        if (!$scope.inputValue || !$scope.inputValue.sp) {
            $scope.kiemTraDuLieu.sp = true; // có lỗi là true
            flag = true;
        }

        if (!$scope.inputValue || !$scope.inputValue.sl) {
            $scope.kiemTraDuLieu.sl = true; // có lỗi là true
            flag = true;
        } 

        if (!$scope.inputValue || !$scope.inputValue.don) {
            $scope.kiemTraDuLieu.don = true; // có lỗi là true
            flag = true;
        }
        
        if (!flag) {
            // Xử lý sửa
            let editId = $scope.editId;
            // Kiểm tra nếu tồn tại editId thì sửa
            if (editId) {
                for (let i = 0; i < $scope.danhsach.length; i++) {
                    if ($scope.danhsach[i].id == editId) {
                        $scope.danhsach[i].sp = $scope.inputValue.sp;
                        $scope.danhsach[i].sl = $scope.inputValue.sl;
                        $scope.danhsach[i].don = $scope.inputValue.don;
                        $scope.danhsach[i].trangthai = $scope.inputValue.trangthai;
                    }
                }
                $scope.onClose();
                return;
            }


            // Thêm sản phẩm
            let ds = $scope.danhsach;
            // fake id tăng tự động
            let newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;

            // Tạo object
            let newItem = {
                id: newId,
                sp: $scope.inputValue.sp,
                sl: $scope.inputValue.sl,
                don: $scope.inputValue.don,
                trangthai: $scope.inputValue.trangthai,
            }
            $scope.danhsach.push(newItem);
            $scope.onClose();
        }
    }

    $scope.onEdit = function (editId) {
        $scope.editId = editId;

        // Tạo ra một đối tượng editItem
        let editItem = {
            sp: "",
            sl: "",
            don: "",
            trangthai: "",
        }
        for (let i = 0; i < $scope.danhsach.length; i++) {
            if ($scope.danhsach[i].id == editId) {
                editItem.sp = $scope.danhsach[i].sp;
                editItem.sl = $scope.danhsach[i].sl;
                editItem.don = $scope.danhsach[i].don;
                editItem.trangthai = $scope.danhsach[i].trangthai;
            }
        }

        // Hiển thị thông tin cần sửa lên form
        $scope.inputValue = {
            sp: editItem.sp,
            sl: editItem.sl,
            don: editItem.don,
            trangthai: editItem.trangthai,
        }
    }

    $scope.onDelete = function (deleteId) {
        let confirm = window.confirm("Bạn có muốn xóa không ?");
        if (confirm) {
            // Loại bỏ #deleteId thì Xóa
            $scope.danhsach = $scope.danhsach.filter(function (item) {
                return item.id !== deleteId;
            })
        }
    }

    $scope.total = function () {
        let total = 0;
        for (let i = 0; i < $scope.danhsach.length; i++) {
            let product = $scope.danhsach[i];
            total += (product.sl * product.don);
        }
        return total;
    }
}