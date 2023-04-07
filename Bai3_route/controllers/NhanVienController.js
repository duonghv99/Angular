window.NhanVienController = function ($scope, $routeParams) {
    // routeParams sẽ ra 1 đối tượng chứa param trên url
    $scope.levels = [
        {
            level: "Level 1",
            money: 70,
            id: 1,
            name: "Văn Dương",
            gender: "Nam",
            namsinh: 1998
        },
        {
            level: "Level 2",
            money: 90,
            id: 2,
            name: "Văn Hiếu",
            gender: "Nam",
            namsinh: 1999
        },
        {
            level: "Level 3",
            money: 120,
            id: 3,
            name: "Văn Mạnh",
            gender: "Nam",
            namsinh: 2002
        }
    ];

    $scope.onClose = function () {
        $scope.inputValue = {
            name: "",
            gender: "",
            namsinh: "",
        }

        $scope.editId = 0;
    }

    $scope.onSubmitForm = function () {
        let total = $scope.level.money * $scope.date;
        $scope.thongbao = total;
        
        let flag = false;

        // Trạng thái
        for(let i = 0; i < $scope.levels.length; i++){
            $scope.thongbao = $scope.trangthai;
        }
        
        if (!flag) {
            // Xử lý sửa
            let editId = $scope.editId;
            // Kiểm tra nếu tồn tại editId thì sửa
            if (editId) {
                for (let i = 0; i < $scope.levels.length; i++) {
                    if ($scope.levels[i].id == editId) {
                        $scope.levels[i].name = $scope.inputValue.name;
                        $scope.levels[i].gender = $scope.inputValue.gender;
                        $scope.levels[i].namsinh = $scope.inputValue.namsinh;
                    }
                }
                $scope.onClose();
                return;
            }


            // Thêm sản phẩm
            let lv = $scope.levels;
            // fake id tăng tự động
            let newId = lv.length > 0 ? lv[lv.length - 1].id + 1 : 1;

            // Tạo object
            let newItem = {
                id: newId,
                name: $scope.inputValue.name,
                gender: $scope.inputValue.gender,
                namsinh: $scope.inputValue.namsinh,
            }
            $scope.levels.push(newItem);
            $scope.onClose();
        }
    }

    $scope.onEdit = function (editId) {
        $scope.editId = editId;

        // Tạo ra một đối tượng editItem
        let editItem = {
            name: "",
            gender: "",
            namsinh: "",
        }
        for (let i = 0; i < $scope.levels.length; i++) {
            if ($scope.levels[i].id == editId) {
                editItem.name = $scope.levels[i].name;
                editItem.gender = $scope.levels[i].gender;
                editItem.namsinh = $scope.levels[i].namsinh;
            }
        }

        // Hiển thị thông tin cần sửa lên form
        $scope.inputValue = {
            name: editItem.name,
            gender: editItem.gender,
            namsinh: editItem.namsinh
        }
    }

    $scope.onDelete = function (deleteId) {
        let confirm = window.confirm("Bạn có muốn xóa không ?");
        if (confirm) {
            // Loại bỏ #deleteId thì Xóa
            $scope.levels = $scope.levels.filter(function (item) {
                return item.id !== deleteId;
            })
        }
    }

    $scope.total = function () {
        let total = 0;
        for (let i = 0; i < $scope.levels.length; i++) {
            let product = $scope.levels[i];
            total += (product.level * product.date);
        }
        return total;
    }
}