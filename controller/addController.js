window.addController= function($scope , $http , $location){
    $scope.title="Thêm Book";

  
    $scope.addBook= function(){
        let url ="http://localhost:3000/books";

        let check= true;

        $scope.checkFrom={
            maSach:false,
            tenSach:false,
            loaiSach:false,

            giaSach:false,
            soLuong:false,
        }
        if(!$scope.book || !$scope.book.maSach ){
            check=false,
            $scope.checkFrom.maSach=true;
        }
        if(!$scope.book || !$scope.book.tenSach || $scope.book.tenSach.length<=10){
            check=false,
            $scope.checkFrom.tenSach=true;
        }
        if(!$scope.book || !$scope.book.loaiSach ){
            check=false,
            $scope.checkFrom.loaiSach=true;
        }
        if(!$scope.book || !$scope.book.giaSach || $scope.book.giaSach <=10000 || isNaN($scope.book.giaSach)){
            check=false,
            $scope.checkFrom.giaSach=true;
        }
        if(!$scope.book || !$scope.book.soLuong ){
            check=false,
            $scope.checkFrom.soLuong=true;
        }

        if(check){
            let newbook={
                maSach:$scope.book.maSach,
                tenSach:$scope.book.tenSach,
                loaiSach:$scope.book.loaiSach,
                giaSach:$scope.book.giaSach,
                soLuong:$scope.book.soLuong,
            }

            $http
            .post(url , newbook)
            .then(function(res){
                if(res.status==201){
                    alert("Bạn đã thêm thành công ")
                    $location.path("/trangchu")
                }
            })
        }
        else{
            alert("Vui lòng nhập đúng các trường ")
        }

    }
}