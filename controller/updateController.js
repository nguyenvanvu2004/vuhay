window.editController= function($scope , $http , $routeParams , $location){
    $scope.title= "Cập nhật Book";

    let idBook = $routeParams.id;

    let url ="http://localhost:3000/books";

    $http
    .get(`${url}/${idBook}`)
    .then(function(res){
        if(res.status==200){
            $scope.book={
                maSach:res.data.maSach,
                tenSach:res.data.tenSach,
                loaiSach:res.data.loaiSach,
                giaSach:res.data.giaSach,
                soLuong:res.data.soLuong,

            }
        }
    })

    $scope.updateBook= function(){
        let check = true;
        $scope.checkFrom={
            maSach:false,
            tenSach:false,
            loaiSach:false,
            giaSach:false,
            soLuong:false,
       
        }
        if(!$scope.book || !$scope.book.maSach){
            check=false;
            $scope.checkFrom.maSach=true;
        }
        if(!$scope.book || !$scope.book.tenSach  || $scope.book.tenSach.length<=10){
            check=false;
            $scope.checkFrom.tenSach=true;
        }
        if(!$scope.book || !$scope.book.loaiSach){
            check=false;
            $scope.checkFrom.loaiSach=true;
        }
        if(!$scope.book || !$scope.book.giaSach  || $scope.book.giaSach<=10000 || isNaN($scope.book.giaSach)){
            check=false;
            $scope.checkFrom.giaSach=true;
        }
        if(!$scope.book || !$scope.book.soLuong){
            check=false;
            $scope.checkFrom.soLuong=true;
        }
        if(check){
            let updateBook={
                maSach:$scope.book.maSach,
                tenSach:$scope.book.tenSach,
                loaiSach:$scope.book.loaiSach,
                giaSach:$scope.book.giaSach,
                soLuong:$scope.book.soLuong,
            }

            $http
            .put(`${url}/${idBook}` , updateBook)
            .then(function(res){
                if(res.status==200){
                    alert("Bạn đã cập nhật thành công ")
                    $location.path("/trangchu")
                }
            })
        }else{
            alert("Vui lòng nhập chính xác")
        }
    }
    
}
