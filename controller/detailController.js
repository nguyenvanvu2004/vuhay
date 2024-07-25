window.detailController = function($scope , $http, $routeParams)
{
    $scope.title="Chi tiết Book";

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




}