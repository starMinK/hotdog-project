$(document).ready(function () {
    cookieCheck();
});

function login() {
    console.log($('#sidebar_id').val(), $('#sidebar_password').val())
    $.ajax({
        type: "POST",
        url: "/api/login",
        data: {id_give: $('#sidebar_id').val(), pw_give: $('#sidebar_password').val()},
        success: function (response) {
            if (response['result'] == 'success') {
                // 로그인이 정상적으로 되면, 토큰을 받아옵니다.
                // 이 토큰을 mytoken이라는 키 값으로 쿠키에 저장합니다.
                $.cookie('mytoken', response['token']);
                alert('로그인 완료!')
                window.location.reload()
            } else {
                // 로그인이 안되면 에러메시지를 띄웁니다.
                alert(response['msg'])
            }
        }
    })
}

function goRegister() {
    window.location.href=("/register")
}

function cookieCheck() {
    if(document.cookie) {
        let tempHtml = ``;
        $('.sidebar').empty();

        tempHtml = `<div class="sidebar_navBtn">
                        <button>리뷰보기</button>
                        <button>메뉴보기</button>
                    </div>`

        $('.sidebar').append(tempHtml);
    }
}